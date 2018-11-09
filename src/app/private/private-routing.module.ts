import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeContentComponent } from './home-content/home-content.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[{
      path: '',
      component: HomeContentComponent,
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
