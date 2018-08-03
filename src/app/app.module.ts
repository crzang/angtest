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
import { DashboardCurrentItemComponent } from './dashboard-current-item/dashboard-current-item.component';
import { DashboardFirstBannerItemComponent } from './dashboard-first-banner-item/dashboard-first-banner-item.component';
import { DashboardCurrentBlockComponent } from './dashboard-current-block/dashboard-current-block.component';
import { DashboardFutureBlockComponent } from './dashboard-future-block/dashboard-future-block.component';
import { DashboardFutureBlockItemComponent } from './dashboard-future-block-item/dashboard-future-block-item.component';
import { DashboardSuggessionBlockComponent } from './dashboard-suggession-block/dashboard-suggession-block.component';
import { DashboardSuggessionBlockItemComponent } from './dashboard-suggession-block-item/dashboard-suggession-block-item.component';
import { DashboardBannerBlockComponent } from './dashboard-banner-block/dashboard-banner-block.component';
import { DashboardFooterBlockComponent } from './dashboard-footer-block/dashboard-footer-block.component';
import { CardsComponent } from './cards/cards.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CreditsComponent } from './credits/credits.component';
import { CreditItemComponent } from './credit-item/credit-item.component';
import { CardInfoComponent } from './card-info/card-info.component';
import { CreditInfoComponent } from './credit-info/credit-info.component';
import { PaymentInfoComponent } from './payment-info/payment-info.component';

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
    ProgressBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
