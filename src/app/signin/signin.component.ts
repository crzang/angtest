import {Component, ViewChild, AfterViewInit, ElementRef,HostListener} from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import {AuthGuardService} from '../auth-guard.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements AfterViewInit {

  @ViewChild('loginBlock') loginBlock: ElementRef;
  @ViewChild('passwordBlock') passwordBlock: ElementRef;

  env = environment;
  baseHeight = 768;
  baseWith = 1024;
  mainHeight = this.baseHeight + 'px';
  login = '';
  pass = '';
  btnEnterEnabled = false;

  constructor(private router: Router, private authGuard: AuthGuardService) {

  }
  ngAfterViewInit() {
    this.onResize({})
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerHeight > 768) {
      this.baseHeight = window.innerHeight;
    }
    if (window.innerWidth > 1024) {
      this.baseWith = window.innerWidth;
    }
    this.mainHeight = this.baseHeight + 'px';

    this.loginBlock.nativeElement.style.marginLeft = this.baseWith / 2 - this.loginBlock.nativeElement.offsetWidth / 2 + 'px';
    this.passwordBlock.nativeElement.style.marginLeft = this.baseWith / 2 - this.passwordBlock.nativeElement.offsetWidth / 2 + 'px';
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
    this.btnEnterEnabled = this.login.length !== 0 && this.pass.length !== 0;
  }

  doLogin() {
    if (this.btnEnterEnabled) {
      this.authGuard.setUserId(this.login)
      this.router.navigateByUrl('/main');
    }

  }
}
