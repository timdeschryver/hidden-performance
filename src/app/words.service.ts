import { Injectable } from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { words } from './words';

@Injectable({
  providedIn: 'root',
})
export class WordsService {
  private querySubject = new BehaviorSubject('');

  delay = 5
  words$ = of(words.slice(0, 250));
  query$ = this.querySubject.asObservable();

  query(q: string) {
    this.querySubject.next(q);
  }
}
