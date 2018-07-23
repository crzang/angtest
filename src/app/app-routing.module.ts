import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { RegChoiceComponent } from './reg-choice/reg-choice.component';
import {RegByCardComponent} from './reg-by-card/reg-by-card.component';
import {RegByContractComponent} from './reg-by-contract/reg-by-contract.component';
import {RegByAccountComponent} from './reg-by-account/reg-by-account.component';

const routes: Routes = [
  { path: '', redirectTo: '/signIn', pathMatch: 'full' },
  { path: 'signIn', component: SigninComponent },
  { path: 'regChoice', component: RegChoiceComponent },
  { path: 'regChoice/regByCard', component: RegByCardComponent },
  { path: 'regChoice/regByContract', component: RegByContractComponent },
  { path: 'regChoice/regByAccount', component: RegByAccountComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
