import { Component } from '@angular/core';
import { AppState } from '../app.service';

@Component({

  selector: 'home',
  styles: [ require('./home.css') ],
  template: require('./home.html')
})
export class Home {
  localState = { value: '' };
  // TypeScript public modifiers
  constructor(public appState: AppState) {

  }

  ngOnInit() {
    console.log('hello `Home` component');
  }

  submitState(value) {
    console.log(this.appState.state);
  }

}
