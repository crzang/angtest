import {Component, ViewChild, AfterViewInit, ElementRef} from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements AfterViewInit {

  @ViewChild('loginBlock') loginBlock: ElementRef;
  @ViewChild('passwordBlock') passwordBlock: ElementRef;
  @ViewChild('btnEnter') btnEnter: ElementRef;
  @ViewChild('lostPassword') lostPassword: ElementRef;

  baseHeight = 768;
  baseWith = 1024;
  mainHeight = this.baseHeight + 'px';
  login = '';
  pass = '';
  btnEnterStyle = 'btnEnter_disabled';

  constructor() {
    if (window.innerHeight > 768) {
      this.baseHeight = window.innerHeight;
    }
    if (window.innerWidth > 1024) {
      this.baseWith = window.innerWidth;
    }
    this.mainHeight = this.baseHeight + 'px';
  }

  onLoginChange(e) {
    this.login = e.target.value;
    this.checkData();
  }

  onPassChange(e) {
    this.pass = e.target.value;
    this.checkData();
  }

  checkData() {
    const btnEnterEnabled = this.login.length !== 0 && this.pass.length !== 0;
    if (btnEnterEnabled) {
      this.btnEnterStyle = 'btnEnter_enabled';
    } else {
      this.btnEnterStyle = 'btnEnter_disabled';
    }
  }

  ngAfterViewInit() {
    this.loginBlock.nativeElement.style.marginLeft = this.baseWith / 2 - this.loginBlock.nativeElement.offsetWidth / 2 + 'px';
    this.passwordBlock.nativeElement.style.marginLeft = this.baseWith / 2 - this.passwordBlock.nativeElement.offsetWidth / 2 + 'px';
    this.btnEnter.nativeElement.style.marginLeft = this.baseWith / 2 - this.btnEnter.nativeElement.offsetWidth / 2 + 'px';
    this.lostPassword.nativeElement.style.marginLeft = this.baseWith / 2 - this.lostPassword.nativeElement.offsetWidth / 2 + 'px';
  }
}
