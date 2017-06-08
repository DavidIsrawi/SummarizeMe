import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{name}}</h1>
  <home></home>
  <how></how>
  `,
})
export class AppComponent  { name = 'David'; }
