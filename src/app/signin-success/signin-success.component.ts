import {Component, ElementRef,  ViewChild, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-signin-success',
  templateUrl: './signin-success.component.html',
  styleUrls: ['./signin-success.component.css']
})
export class SigninSuccessComponent implements AfterViewInit {

  @ViewChild('image') image: ElementRef;
  @ViewChild('btnReady') btnReady: ElementRef;
  baseWith = 1024;


  constructor() {
    if (window.innerWidth > 1024) {
      this.baseWith = window.innerWidth;
    }

  }

  ngAfterViewInit() {
    this.image.nativeElement.style.marginLeft = (this.baseWith / 2 - this.image.nativeElement.offsetWidth / 2 - 160) + 'px';
    this.btnReady.nativeElement.style.marginLeft = this.baseWith / 2 - this.btnReady.nativeElement.offsetWidth / 2 + 'px';
  }
}
