import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { NetworkComponent } from './network/network.component';
import { MembersComponent } from './network/members/members.component';
import { NetworkTreeComponent } from './network/network-tree/network-tree.component';
import { TeamTreeComponent } from './network/team-tree/team-tree.component';
import { RefrealComponent } from './network/refreal/refreal.component';
import { SettingsComponent } from './settings/settings.component';
import { WalletComponent } from './wallet/wallet.component';
import { RegalCodesComponent } from './regal-codes/regal-codes.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { VisaCardComponent } from './visa-card/visa-card.component';

const routes: Routes = [
  // {
  //   path:'home',
  //   component:HomeComponent
  // },
  {


    path:'',
    component:HomeComponent,
    children:[{
      path: '',
      component: HomeContentComponent,
    },
    {path:'settings',component:SettingsComponent},
    {path:'visa-card',component:VisaCardComponent},
    {path:'wallet', component:WalletComponent},
    {path:'codes',component:RegalCodesComponent},
    {path:'transactions',component:TransactionsComponent}
    
    ,{
      path:'network',
      component:NetworkComponent,
      children:[
        {path:'',component:MembersComponent    },
        {path:'members',component:MembersComponent},
        {path:'network-tree',component:NetworkTreeComponent},
        {path:'team-tree',component:TeamTreeComponent},
        {path:'refreal',component:RefrealComponent},
  
      ]
    }
  ],

  }
  // ,{
  //   path:'**',
  //   component:HomeContentComponent,
   
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
