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

  bgHeight = '0px';
  baseWith = 1024;
  logoOffset = '0px';
  constructor() {

    this.bgHeight = window.innerHeight + 'px';
    if (window.innerWidth > 1024) {
      this.baseWith = window.innerWidth;
    }
    this.logoOffset = this.baseWith / 2 - 188 / 2 + 'px';
  }


  ngAfterViewInit() {
    this.titleEnter.nativeElement.style.marginLeft = this.baseWith / 2 - this.titleEnter.nativeElement.offsetWidth / 2 + 'px';
    this.loginBlock.nativeElement.style.marginLeft = this.baseWith / 2 - this.loginBlock.nativeElement.offsetWidth / 2 + 'px';
    this.passwordBlock.nativeElement.style.marginLeft = this.baseWith / 2 - this.passwordBlock.nativeElement.offsetWidth / 2 + 'px';
  }

}
