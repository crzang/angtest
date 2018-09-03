import {Component, ViewChild, AfterViewInit, ElementRef, HostListener} from '@angular/core';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements AfterViewInit {
  @ViewChild('loginBlock') loginBlock: ElementRef;
  @ViewChild('passwordBlock') passwordBlock: ElementRef;
  @ViewChild('passwordConfirmBlock') passwordConfirmBlock: ElementRef;
  @ViewChild('btnNext') btnNext: ElementRef;
  @ViewChild('agree') agree: ElementRef;
  @ViewChild('footerBlock') footerBlock: ElementRef;
  baseHeight = 768;
  baseWith = 1024;
  login = '';
  pass = '';
  confirm = '';
  agreeI = false;
  btnNextEnabled = false;
  constructor() {
    if (window.innerHeight > 768) {
      this.baseHeight = window.innerHeight;
    }
    if (window.innerWidth > 1024) {
      this.baseWith = window.innerWidth;
    }
  }
  ngAfterViewInit() {
    this.onResize({});
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.loginBlock.nativeElement.style.marginLeft = this.baseWith / 2 - this.loginBlock.nativeElement.offsetWidth / 2 + 'px';
    this.passwordBlock.nativeElement.style.marginLeft = this.baseWith / 2 - this.passwordBlock.nativeElement.offsetWidth / 2 + 16 + 'px';
    this.passwordConfirmBlock.nativeElement.style.marginLeft = this.baseWith / 2 - this.passwordConfirmBlock.nativeElement.offsetWidth / 2 + 'px';

    this.agree.nativeElement.style.marginLeft = this.baseWith / 2 - this.agree.nativeElement.offsetWidth / 2 + 'px';
    const btnContinuePos = this.baseHeight - this.btnNext.nativeElement.offsetTop - this.btnNext.nativeElement.offsetHeight;
    this.footerBlock.nativeElement.style.marginTop = (btnContinuePos - 150) + 'px';
  }
  onLoginChange(e) {
    this.login = e.target.value;
    this.checkInput();
  }

  onPassChange(e) {
    this.pass = e.target.value;
    this.checkInput();
  }

  onPassConfirmChange(e) {
    this.confirm = e.target.value;
    this.checkInput();
  }

  onAgreeChange(e) {
    this.agreeI = e;
    this.checkInput();
  }

  checkInput() {
    this.btnNextEnabled = this.login.length !== 0 && this.pass.length !== 0 && this.confirm === this.pass && this.agreeI === true;
  }
}
