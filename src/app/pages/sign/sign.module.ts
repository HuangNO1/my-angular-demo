import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignComponent } from './sign.component'
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignRoutingModule } from './sign-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// antd
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  declarations: [SignInComponent, SignUpComponent, SignComponent],
  imports: [
    CommonModule,
    SignRoutingModule,
    FormsModule,
    NzButtonModule,
    NzCardModule,
    NzLayoutModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule
  ],
  exports: [
    SignRoutingModule
  ]
})
export class SignModule { }
