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

  constructor() {
    if (window.innerHeight > 768) {
      this.baseHeight = window.innerHeight;
    }
    if (window.innerWidth > 1024) {
      this.baseWith = window.innerWidth;
    }
    this.mainHeight = this.baseHeight + 'px';
  }

  ngAfterViewInit() {
    this.loginBlock.nativeElement.style.marginLeft = this.baseWith / 2 - this.loginBlock.nativeElement.offsetWidth / 2 + 'px';
    this.passwordBlock.nativeElement.style.marginLeft = this.baseWith / 2 - this.passwordBlock.nativeElement.offsetWidth / 2 + 'px';
    this.btnEnter.nativeElement.style.marginLeft = this.baseWith / 2 - this.btnEnter.nativeElement.offsetWidth / 2 + 'px';
    this.lostPassword.nativeElement.style.marginLeft = this.baseWith / 2 - this.lostPassword.nativeElement.offsetWidth / 2 + 'px';
  }
}
