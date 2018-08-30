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
import {CardInfoComponent} from './card-info/card-info.component';
import {CreditInfoComponent} from './credit-info/credit-info.component';
import {PaymentInfoComponent} from './payment-info/payment-info.component';
import {MainComponent} from './main/main.component';
import {CardsComponent} from './cards/cards.component';
import {AccountsComponent} from './accounts/accounts.component';
import {CreditsComponent} from './credits/credits.component';
import {HistoryComponent} from './history/history.component';
import {HistoryItemComponent} from './history-item/history-item.component';
import {StatisticComponent} from './statistic/statistic.component';
import {StatisticDetailComponent} from './statistic-detail/statistic-detail.component';
import {ActionsAndPayComponent} from './actions-and-pay/actions-and-pay.component';
import {NewTemplateComponent} from './actions-and-pay/new-template/new-template.component';
import {NewTemplateItemComponent} from './actions-and-pay/new-template-item/new-template-item.component';
import {TemplateConfirmComponent} from './actions-and-pay/template-confirm/template-confirm.component';
import {SuccessPaymentComponent} from './actions-and-pay/success-payment/success-payment.component';
import {SuccessPayment2Component} from './actions-and-pay/success-payment2/success-payment2.component';
import {Card2cardComponent} from './actions-and-pay/card2card/card2card.component';
import {Card2cardConfirmComponent} from './actions-and-pay/card2card/card2card-confirm/card2card-confirm.component';
import {Pay2bankComponent} from './actions-and-pay/pay2bank/pay2bank.component';
import {Pay2bankConfirmComponent} from './actions-and-pay/pay2bank/pay2bank-confirm/pay2bank-confirm.component';
import {Pay2orgComponent} from './actions-and-pay/pay2org/pay2org.component';
import {Pay2orgConfirmComponent} from './actions-and-pay/pay2org/pay2org-confirm/pay2org-confirm.component';
import {CheckTaxComponent} from './actions-and-pay/check-tax/check-tax.component';
import {AuthGuardService} from './auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'signIn', component: SigninComponent, canActivate: [AuthGuardService],data:{isSignInPath:true}} ,
  { path: 'signIn/verifySms', component: VerifySmsComponent, canActivate: [AuthGuardService],data:{isSignInPath:true} },
  { path: 'regChoice', component: RegChoiceComponent, canActivate: [AuthGuardService],data:{isSignInPath:true} },
  { path: 'regChoice/regByCard', component: RegByCardComponent, canActivate: [AuthGuardService],data:{isSignInPath:true} },
  { path: 'regChoice/regByContract', component: RegByContractComponent, canActivate: [AuthGuardService],data:{isSignInPath:true} },
  { path: 'regChoice/regByAccount', component: RegByAccountComponent, canActivate: [AuthGuardService],data:{isSignInPath:true} },
  { path: 'regChoice/createAccount', component: CreateAccountComponent, canActivate: [AuthGuardService],data:{isSignInPath:true} },
  { path: 'error', component: ErrorPaymentComponent, canActivate: [AuthGuardService],data:{isSignInPath:true} },
  { path: 'success', component: SigninSuccessComponent , canActivate: [AuthGuardService],data:{isSignInPath:true}},
  { path: 'main', component: MainComponent, canActivate: [AuthGuardService]},
  { path: 'cards', component: CardsComponent, canActivate: [AuthGuardService]},
  { path: 'accounts', component: AccountsComponent, canActivate: [AuthGuardService]},
  { path: 'credits', component: CreditsComponent, canActivate: [AuthGuardService]},
  { path: 'cards/item0', component: CardInfoComponent, canActivate: [AuthGuardService]},
  { path: 'credits/item0', component: CreditInfoComponent, canActivate: [AuthGuardService]},
  { path: 'cards/item0/details0', component: PaymentInfoComponent, canActivate: [AuthGuardService]},
  { path: 'history', component: HistoryComponent, canActivate: [AuthGuardService]},
  { path: 'history/item0', component: HistoryItemComponent, canActivate: [AuthGuardService]},
  { path: 'statistic', component: StatisticComponent, canActivate: [AuthGuardService]},
  { path: 'statistic/item0', component: StatisticDetailComponent, canActivate: [AuthGuardService]},
  { path: 'actionsAndPay', component: ActionsAndPayComponent, canActivate: [AuthGuardService]},
  { path: 'actionsAndPay/card2card', component: Card2cardComponent, canActivate: [AuthGuardService]},
  { path: 'actionsAndPay/card2card/confirm', component: Card2cardConfirmComponent, canActivate: [AuthGuardService]},
  { path: 'actionsAndPay/pay2bank', component: Pay2bankComponent, canActivate: [AuthGuardService]},
  { path: 'actionsAndPay/pay2bank/confirm', component: Pay2bankConfirmComponent, canActivate: [AuthGuardService]},
  { path: 'actionsAndPay/pay2org', component: Pay2orgComponent, canActivate: [AuthGuardService]},
  { path: 'actionsAndPay/pay2org/confirm', component: Pay2orgConfirmComponent, canActivate: [AuthGuardService]},
  { path: 'actionsAndPay/checkTax', component: CheckTaxComponent, canActivate: [AuthGuardService]},
  { path: 'actionsAndPay/newTemplate', component: NewTemplateComponent, canActivate: [AuthGuardService]},
  { path: 'actionsAndPay/newTemplate/item0', component: NewTemplateItemComponent, canActivate: [AuthGuardService]},
  { path: 'actionsAndPay/newTemplate/item0/confirm', component: TemplateConfirmComponent, canActivate: [AuthGuardService]},
  { path: 'actionsAndPay/newTemplate/item0/successPayment', component: SuccessPaymentComponent, canActivate: [AuthGuardService]},
  { path: 'actionsAndPay/newTemplate/item0/successPayment2', component: SuccessPayment2Component, canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
