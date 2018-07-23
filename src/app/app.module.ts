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

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    RegChoiceComponent,
    ForaLogoComponent,
    TitleComponent,
    DivMiddleComponent,
    ButtonComponent,
    Footer1Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
