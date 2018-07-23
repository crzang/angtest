import {Component, ViewChild, AfterViewInit, ElementRef} from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('titleEnter') titleEnter: ElementRef;
  @ViewChild('loginBlock') loginBlock: ElementRef;
  @ViewChild('passwordBlock') passwordBlock: ElementRef;
  @ViewChild('btnEnter') btnEnter: ElementRef;
  @ViewChild('lostPassword') lostPassword: ElementRef;
  @ViewChild('helpToNewAccount') helpToNewAccount: ElementRef;
  @ViewChild('signUp') signUp: ElementRef;
  @ViewChild('helpdesk') helpdesk: ElementRef;
  @ViewChild('footer') footer: ElementRef;

  baseHeight = 768;
  baseWith = 1024;
  mainHeight = this.baseHeight+"px";
  logoOffset = '0px';
  constructor() {
    if (window.innerHeight > 768) {
      this.baseHeight = window.innerHeight;
    }
    if (window.innerWidth > 1024) {
      this.baseWith = window.innerWidth;
    }
    this.logoOffset = this.baseWith / 2 - 188 / 2 + 'px';
    this.mainHeight=this.baseHeight+"px";
  }


  ngAfterViewInit() {
    this.titleEnter.nativeElement.style.marginLeft = this.baseWith / 2 - this.titleEnter.nativeElement.offsetWidth / 2 + 'px';
    this.loginBlock.nativeElement.style.marginLeft = this.baseWith / 2 - this.loginBlock.nativeElement.offsetWidth / 2 + 'px';
    this.passwordBlock.nativeElement.style.marginLeft = this.baseWith / 2 - this.passwordBlock.nativeElement.offsetWidth / 2 + 'px';
    this.btnEnter.nativeElement.style.marginLeft = this.baseWith / 2 - this.btnEnter.nativeElement.offsetWidth / 2 + 'px';
    this.lostPassword.nativeElement.style.marginLeft = this.baseWith / 2 - this.lostPassword.nativeElement.offsetWidth / 2 + 'px';
    this.footer.nativeElement.style.left = this.baseWith / 2 - this.footer.nativeElement.offsetWidth / 2 + 'px';
    let lostPasswordPos=this.baseHeight- this.footer.nativeElement.offsetHeight - 50
      //-this.lostPassword.nativeElement.offsetTop + this.lostPassword.nativeElement.offsetHeight;
    //lostPasswordPos=lostPasswordPos
    this.footer.nativeElement.style.top = lostPasswordPos + 'px';
  }

}
