import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignComponent } from './sign.component'
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignRoutingModule } from './sign-routing.module';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [SignInComponent, SignUpComponent, SignComponent],
  imports: [
    CommonModule,
    SignRoutingModule,
    NzButtonModule
  ],
  exports: [
    SignRoutingModule
  ]
})
export class SignModule { }
