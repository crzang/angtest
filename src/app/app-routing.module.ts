import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { RegChoiceComponent } from './reg-choice/reg-choice.component';
import {RegByCardComponent} from './reg-by-card/reg-by-card.component';
import {RegByContractComponent} from './reg-by-contract/reg-by-contract.component';
import {RegByAccountComponent} from './reg-by-account/reg-by-account.component';
import {VerifySmsComponent} from "./verify-sms/verify-sms.component";
import {CreateAccountComponent} from "./create-account/create-account.component";
import {ErrorPaymentComponent} from "./error-payment/error-payment.component";
import {SigninSuccessComponent} from "./signin-success/signin-success.component";

const routes: Routes = [
  { path: '', redirectTo: '/signIn', pathMatch: 'full' },
  { path: 'signIn', component: SigninComponent },
  { path: 'signIn/verifySms', component: VerifySmsComponent },
  { path: 'regChoice', component: RegChoiceComponent },
  { path: 'regChoice/regByCard', component: RegByCardComponent },
  { path: 'regChoice/regByContract', component: RegByContractComponent },
  { path: 'regChoice/regByAccount', component: RegByAccountComponent },
  { path: 'regChoice/createAccount', component: CreateAccountComponent },
  { path: 'error', component: ErrorPaymentComponent },
  { path: 'success', component: SigninSuccessComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
