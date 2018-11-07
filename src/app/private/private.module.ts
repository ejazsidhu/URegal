import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    PrivateRoutingModule
  ],
  declarations: [HomeComponent]
})
export class PrivateModule { }
