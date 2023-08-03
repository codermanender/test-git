import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'test';
  inputtext: string = '';
  Onsubmit(inputEl: HTMLInputElement) {
    this.inputtext = inputEl.value;
    console.log(this.inputtext);
  }
}
