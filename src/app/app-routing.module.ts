import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { RegChoiceComponent } from './reg-choice/reg-choice.component';
import {RegByCardComponent} from './reg-by-card/reg-by-card.component';
import {RegByContractComponent} from './reg-by-contract/reg-by-contract.component';
import {RegByAccountComponent} from './reg-by-account/reg-by-account.component';
import {VerifySmsComponent} from './verify-sms/verify-sms.component';
import {CreateAccountComponent} from './create-account/create-account.component';
import {ErrorPaymentComponent} from './error-payment/error-payment.component';
import {SigninSuccessComponent} from './signin-success/signin-success.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CardInfoComponent} from './card-info/card-info.component';
import {CreditInfoComponent} from './credit-info/credit-info.component';
import {PaymentInfoComponent} from './payment-info/payment-info.component';
import {DashboardCardsComponent} from './dashboard-cards/dashboard-cards.component';
import {MainComponent} from './main/main.component';
import {CardsComponent} from "./cards/cards.component";
import {AccountsComponent} from "./accounts/accounts.component";
import {CreditsComponent} from "./credits/credits.component";

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
  { path: 'main', component: MainComponent},
  { path: 'cards', component: CardsComponent},
  { path: 'accounts', component: AccountsComponent},
  { path: 'credits', component: CreditsComponent},
  { path: 'cards/item0', component: CardInfoComponent},
  { path: 'credits/item0', component: CreditInfoComponent},
  { path: 'cards/item0/details0', component: PaymentInfoComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
