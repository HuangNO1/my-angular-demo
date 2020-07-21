import { Component, OnInit } from '@angular/core';

// selector : 模板名稱
// templateUrl : 模板 file
/// styleUrls : 模板 style file
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  msg = 'This is a msg';
  skyBlue = 'skyBlue';
  htmlStr = 'Hello world';
  classObj = {
    skyBlue: true,
    active: false,
  };
  isShow = true;
  arrayStr = ['skyBlue', 'bac'];

  ifColor = true;

  items = ['aaaaa', 'bbbbb', 'ccccc'];
  HomeState = true;
  username: string = "";
  password: string = "";
  time = new Date();
  constructor() {}

  ngOnInit() {}

  sum(a, b) {
    return a + b;
  }

  changeColor() {
    this.classObj = {
      skyBlue: false,
      active: false,
    };
  }

  changeBtn(event) {
    console.log(event);
    event.target.style.background = 'green';
  }

  alert(item: string, i: number): void {
    alert(`click is ${ i + 1 } : ${ item }`);
  }
}
