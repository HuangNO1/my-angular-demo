import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  // input 裝飾器 接收 組件傳入參數
  @Input() item;
  constructor() { }

  ngOnInit(): void {
  }

}
