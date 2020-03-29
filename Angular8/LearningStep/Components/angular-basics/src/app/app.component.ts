import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Dynamic title'
  number = 42
  obj = { a: 1, b: {c: 2} }
  img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsm-dQHFmWp9Xw1e-4BfLDr67vBq5cil6OytRJExumqHUzTHVZ'
   inputValue = 'Initial'

  // ------------
  myTitle = 'Initial value'
  backgroundToggle = false
  toggleSW: any = false

  arr = [1, 1, 2, 3, 5, 8, 13]

  objs = [
    {title: 'Post 1', author: 'Vladilen', comments: [
        {name: 'Max', text: 'lorem 1'},
        {name: 'Max', text: 'lorem 2'},
        {name: 'Max', text: 'lorem 3'},
      ]},
    {title: 'Post 2', author: 'Vladilen 2', comments: [
        {name: 'Max 2', text: 'lorem 1'},
        {name: 'Max 2', text: 'lorem 2'},
        {name: 'Max 2', text: 'lorem 3'},
      ]}
  ]

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
