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
import {HistoryComponent} from "./history/history.component";
import {HistoryItemComponent} from "./history-item/history-item.component";
import {StatisticComponent} from "./statistic/statistic.component";
import {StatisticDetailComponent} from "./statistic-detail/statistic-detail.component";
import {ActionsAndPayComponent} from "./actions-and-pay/actions-and-pay.component";
import {NewTemplateComponent} from "./actions-and-pay/new-template/new-template.component";
import {NewTemplateItemComponent} from "./actions-and-pay/new-template-item/new-template-item.component";
import {TemplateConfirmComponent} from "./actions-and-pay/template-confirm/template-confirm.component";
import {SuccessPaymentComponent} from "./actions-and-pay/success-payment/success-payment.component";
import {SuccessPayment2Component} from "./actions-and-pay/success-payment2/success-payment2.component";
import {Card2cardComponent} from "./actions-and-pay/card2card/card2card.component";
import {Card2cardConfirmComponent} from "./actions-and-pay/card2card/card2card-confirm/card2card-confirm.component";
import {Pay2bankComponent} from "./actions-and-pay/pay2bank/pay2bank.component";
import {Pay2bankConfirmComponent} from "./actions-and-pay/pay2bank/pay2bank-confirm/pay2bank-confirm.component";
import {Pay2orgComponent} from "./actions-and-pay/pay2org/pay2org.component";
import {Pay2orgConfirmComponent} from "./actions-and-pay/pay2org/pay2org-confirm/pay2org-confirm.component";
import {CheckTaxComponent} from "./actions-and-pay/check-tax/check-tax.component";

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
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
  { path: 'history', component: HistoryComponent},
  { path: 'history/item0', component: HistoryItemComponent},
  { path: 'statistic', component: StatisticComponent},
  { path: 'statistic/item0', component: StatisticDetailComponent},
  { path: 'actionsAndPay', component: ActionsAndPayComponent},
  { path: 'actionsAndPay/card2card', component: Card2cardComponent},
  { path: 'actionsAndPay/card2card/confirm', component: Card2cardConfirmComponent},
  { path: 'actionsAndPay/pay2bank', component: Pay2bankComponent},
  { path: 'actionsAndPay/pay2bank/confirm', component: Pay2bankConfirmComponent},
  { path: 'actionsAndPay/pay2org', component: Pay2orgComponent},
  { path: 'actionsAndPay/pay2org/confirm', component: Pay2orgConfirmComponent},
  { path: 'actionsAndPay/checkTax', component: CheckTaxComponent},
  { path: 'actionsAndPay/newTemplate', component: NewTemplateComponent},
  { path: 'actionsAndPay/newTemplate/item0', component: NewTemplateItemComponent},
  { path: 'actionsAndPay/newTemplate/item0/confirm', component: TemplateConfirmComponent},
  { path: 'actionsAndPay/newTemplate/item0/successPayment', component: SuccessPaymentComponent},
  { path: 'actionsAndPay/newTemplate/item0/successPayment2', component: SuccessPayment2Component},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
