import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';

// ngIf, ngFor, ngSwitch 等指令
import { CommonModule } from '@angular/common';

// ngModel 表單雙向綁定
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [WelcomeRoutingModule, CommonModule, FormsModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
