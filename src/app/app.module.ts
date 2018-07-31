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
import { ErrorPaymentComponent } from './error-payment/error-payment.component';
import { SigninSuccessComponent } from './signin-success/signin-success.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { DashboardCurrentItemComponent } from './dashboard-current-item/dashboard-current-item.component';
import { DashboardFirstBannerItemComponent } from './dashboard-first-banner-item/dashboard-first-banner-item.component';
import { DashboardCurrentBlockComponent } from './dashboard-current-block/dashboard-current-block.component';
import { DashboardFutureBlockComponent } from './dashboard-future-block/dashboard-future-block.component';

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
    DashboardFutureBlockComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CheckboxModule,
    InputTextModule,
    ScrollPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
