import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SigninComponent } from './signin/signin.component';
import { RegChoiceComponent } from './reg-choice/reg-choice.component';
import { ForaLogoComponent } from './fora-logo/fora-logo.component';
import {AppRoutingModule} from './app-routing.module';
import { TitleComponent } from './title/title.component';
import { DivMiddleComponent } from './div-middle/div-middle.component';
import { ButtonComponent } from './button/button.component';
import { Footer1Component } from './footer1/footer1.component';
import { RegByCardComponent } from './reg-by-card/reg-by-card.component';
import { RegByAccountComponent } from './reg-by-account/reg-by-account.component';
import { RegByContractComponent } from './reg-by-contract/reg-by-contract.component';
import { VerifySmsComponent } from './verify-sms/verify-sms.component';
import { AboutComponent } from './about/about.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import {CheckboxModule} from 'primeng/checkbox';
import {InputTextModule} from 'primeng/inputtext';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {TabViewModule} from 'primeng/tabview';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import { ErrorPaymentComponent } from './error-payment/error-payment.component';
import { SigninSuccessComponent } from './signin-success/signin-success.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { DashboardCurrentItemComponent } from './main/dashboard-current-item/dashboard-current-item.component';
import { DashboardFirstBannerItemComponent } from './main/dashboard-first-banner-item/dashboard-first-banner-item.component';
import { DashboardCurrentBlockComponent } from './main/dashboard-current-block/dashboard-current-block.component';
import { DashboardFutureBlockComponent } from './main/dashboard-future-block/dashboard-future-block.component';
import { DashboardFutureBlockItemComponent } from './main/dashboard-future-block-item/dashboard-future-block-item.component';
import { DashboardSuggessionBlockComponent } from './main/dashboard-suggession-block/dashboard-suggession-block.component';
import { DashboardSuggessionBlockItemComponent } from './main/dashboard-suggession-block-item/dashboard-suggession-block-item.component';
import { DashboardBannerBlockComponent } from './main/dashboard-banner-block/dashboard-banner-block.component';
import { DashboardFooterBlockComponent } from './main/dashboard-footer-block/dashboard-footer-block.component';
import { CardsComponent } from './cards/cards.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CreditsComponent } from './credits/credits.component';
import { CreditItemComponent } from './credit-item/credit-item.component';
import { CardInfoComponent } from './card-info/card-info.component';
import { CreditInfoComponent } from './credit-info/credit-info.component';
import { PaymentInfoComponent } from './payment-info/payment-info.component';
import { MainComponent } from './main/main.component';
import { HistoryComponent } from './history/history.component';
import { HistoryItemComponent } from './history-item/history-item.component';
import { HistoryDetailComponent } from './history-detail/history-detail.component';
import {CalendarModule} from 'primeng/calendar';
import {DataGridModule} from 'primeng/datagrid';
import {PanelModule} from 'primeng/panel';
import { StatisticComponent } from './statistic/statistic.component';
import { D3Service, D3_DIRECTIVES } from './d3';
import {SplitButtonModule} from 'primeng/splitbutton';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { AngularResizedEventModule } from 'angular-resize-event';

import { GraphComponent } from './visuals/graph/graph.component';
import { SHARED_VISUALS } from './visuals/shared';
import { StatisticDetailComponent } from './statistic-detail/statistic-detail.component';
import { ActionsAndPayComponent } from './actions-and-pay/actions-and-pay.component';
import { ActionsTemplatesComponent } from './actions-and-pay/actions-templates/actions-templates.component';
import { ActionsPayComponent } from './actions-and-pay/actions-pay/actions-pay.component';
import { NewTemplateComponent } from './actions-and-pay/new-template/new-template.component';
import { NewTemplateItemComponent } from './actions-and-pay/new-template-item/new-template-item.component';
import { RubComponent } from './rub/rub.component';
import { TemplateConfirmComponent } from './actions-and-pay/template-confirm/template-confirm.component';
import { SuccessPaymentComponent } from './actions-and-pay/success-payment/success-payment.component';
import { SuccessPayment2Component } from './actions-and-pay/success-payment2/success-payment2.component';
import { Card2cardComponent } from './actions-and-pay/card2card/card2card.component';
import { Card2cardConfirmComponent } from './actions-and-pay/card2card/card2card-confirm/card2card-confirm.component';
import { Pay2bankComponent } from './actions-and-pay/pay2bank/pay2bank.component';
import { Pay2bankConfirmComponent } from './actions-and-pay/pay2bank/pay2bank-confirm/pay2bank-confirm.component';
import { Pay2orgComponent } from './actions-and-pay/pay2org/pay2org.component';
import { Pay2orgConfirmComponent } from './actions-and-pay/pay2org/pay2org-confirm/pay2org-confirm.component';
import { CheckTaxComponent } from './actions-and-pay/check-tax/check-tax.component';
import { SimpleButtonComponent } from './simple-button/simple-button.component';
import { WebStorageModule } from 'ngx-store';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    RegChoiceComponent,
    ForaLogoComponent,
    TitleComponent,
    DivMiddleComponent,
    ButtonComponent,
    Footer1Component,
    RegByCardComponent,
    RegByAccountComponent,
    RegByContractComponent,
    VerifySmsComponent,
    AboutComponent,
    CreateAccountComponent,
    ErrorPaymentComponent,
    SigninSuccessComponent,
    DashboardComponent,
    LeftMenuComponent,
    DashboardCurrentItemComponent,
    DashboardFirstBannerItemComponent,
    DashboardCurrentBlockComponent,
    DashboardFutureBlockComponent,
    DashboardFutureBlockItemComponent,
    DashboardSuggessionBlockComponent,
    DashboardSuggessionBlockItemComponent,
    DashboardBannerBlockComponent,
    DashboardFooterBlockComponent,
    CardsComponent,
    AccountsComponent,
    CreditsComponent,
    CreditItemComponent,
    CardInfoComponent,
    CreditInfoComponent,
    PaymentInfoComponent,
    MainComponent,
    HistoryComponent,
    HistoryItemComponent,
    HistoryDetailComponent,
    StatisticComponent,
    GraphComponent,
    ...SHARED_VISUALS,
    ...D3_DIRECTIVES,
    StatisticDetailComponent,
    ActionsAndPayComponent,
    ActionsTemplatesComponent,
    ActionsPayComponent,
    NewTemplateComponent,
    NewTemplateItemComponent,
    RubComponent,
    TemplateConfirmComponent,
    SuccessPaymentComponent,
    SuccessPayment2Component,
    Card2cardComponent,
    Card2cardConfirmComponent,
    Pay2bankComponent,
    Pay2bankConfirmComponent,
    Pay2orgComponent,
    Pay2orgConfirmComponent,
    CheckTaxComponent,
    SimpleButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CheckboxModule,
    InputTextModule,
    ScrollPanelModule,
    TabViewModule,
    DropdownModule,
    ProgressBarModule,
    CalendarModule,
    DataGridModule,
    PanelModule,
    SplitButtonModule,
    AutoCompleteModule,
    AngularResizedEventModule,
    WebStorageModule
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
