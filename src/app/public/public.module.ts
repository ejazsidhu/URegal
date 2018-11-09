import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {FormsModule} from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
    FormsModule
  ],
  declarations: [LoginComponent, SignupComponent]
})
export class PublicModule { }
