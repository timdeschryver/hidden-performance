import { Component } from '@angular/core';
import { WordsService } from './words.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private wordsService: WordsService) {
  }

  queryInput(query: string) {
    this.wordsService.query(query);
  }

  
  // iAm = new URLSearchParams(window.location.search).get('iAm');

  // @ViewChild(NgModel) model!: NgModel;

  // constructor(private wordsService: WordsService) {
  //   const channel = new BroadcastChannel('example-channel');
  //   setTimeout(() => {
  //     if (this.iAm === 'sender') {
  //       this.model.valueChanges?.subscribe((v) => {
  //         channel.postMessage(v);
  //       });
  //     } else {
  //       channel.addEventListener('message', (event) => {
  //         this.wordsService.query(event.data as string);
  //       });
  //     }
  //   }, 10);
  // }

}
