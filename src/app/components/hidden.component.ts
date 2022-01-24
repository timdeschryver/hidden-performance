import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, combineLatest, delay, distinctUntilChanged, filter, map } from 'rxjs';
import { WordsService } from '../words.service';

@Component({
  selector: 'app-hidden',
  template: `
    <h2>[hidden]: <mark>{{ result$ | async }}ms</mark></h2>

    <ng-container *ngFor="let word of words$ | async">
      <div [hidden]="!word.visible">
        {{ word.word | delay: wordsService.delay:'hidden' }}
      </div>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HiddenComponent {
  words$ = combineLatest([
    this.wordsService.words$,
    this.wordsService.query$,
  ]).pipe(
    map(([words, query]) => {
      const queryParts = query.split(' ');
      return words.map((word) => {
        return {
          word,
          visible: queryParts.every((q) => word.includes(q)),
        };
      });
    })
  );

  constructor(public wordsService: WordsService) {}

  start = 0;
  result = new BehaviorSubject(0);
  result$ = this.result.asObservable().pipe(distinctUntilChanged(), filter(v => v > 1), delay(0))

  time(value: string) {
    if (value === 'start') {
      this.start = performance.now();
      this.result.next(0);
    } else if (value === 'stop') {
      this.result.next(Math.round(performance.now() - this.start));
    }
  }

  ngDoCheck() {
    this.time('start');
  }

  ngAfterViewChecked() {
    this.time('stop');
  }
}
