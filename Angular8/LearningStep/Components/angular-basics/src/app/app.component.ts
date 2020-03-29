import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Dynamic title'
  number = 42
  arr = [1, 2, 3]

  obj = { a: 1, b: {c: 2} }

  img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsm-dQHFmWp9Xw1e-4BfLDr67vBq5cil6OytRJExumqHUzTHVZ'

  inputValue = 'Initial'

  // ------------
  myTitle = 'Initial value'

  constructor() {
    setTimeout(() => {
      console.log('Timeout is over')
      this.img = 'https://angular.io/assets/images/logos/angular/angular.png'
    }, 5000)
  }

  onInput(event?){
    console.log('Event', event)
    this.inputValue = event.target.value
  }

  onBlur(str: string) {
    this.inputValue = str
  }

  onClick() {
    console.log('Click!')
  }

  onMyInput(event:any){
    this.myTitle = event.target.value;

  }
}
