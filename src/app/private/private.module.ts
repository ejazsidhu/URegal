import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { HomeComponent } from './home/home.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { SettingsComponent } from './settings/settings.component';
import { WalletComponent } from './wallet/wallet.component';
import { RegalCodesComponent } from './regal-codes/regal-codes.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { MembersComponent } from './network/members/members.component';
import { RefrealComponent } from './network/refreal/refreal.component';
import { NetworkTreeComponent } from './network/network-tree/network-tree.component';
import { TeamTreeComponent } from './network/team-tree/team-tree.component';
import { NetworkComponent } from './network/network.component';

import {MenubarModule} from 'primeng/menubar';
// import { MenuItem} from 'primeng/api';
import {DialogModule} from 'primeng/dialog';
import {TreeModule} from 'primeng/tree';
import { VisaCardComponent } from './visa-card/visa-card.component';
import { OrgChartModule } from 'ng2-org-chart';
import { AddMemberComponent } from './network/add-member/add-member.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    PrivateRoutingModule,
    MenubarModule,
    DialogModule,
    TreeModule,
    OrgChartModule,
    FormsModule
    
    ],
  declarations: [HomeComponent, HomeContentComponent, SettingsComponent, WalletComponent, RegalCodesComponent, TransactionsComponent, MembersComponent, RefrealComponent, NetworkTreeComponent, TeamTreeComponent, NetworkComponent, VisaCardComponent, AddMemberComponent]
})
export class PrivateModule { }
