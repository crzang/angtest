import { Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-success-payment',
  templateUrl: './success-payment.component.html',
  styleUrls: ['./success-payment.component.css']
})
export class SuccessPaymentComponent implements OnInit,AfterViewInit {
  @ViewChild('main') main: ElementRef;
  @ViewChild('logo') logo: ElementRef;
  @ViewChild('content') content: ElementRef;
  constructor() { }

  ngOnInit() {
    const clientWidth = window.innerWidth;
    const clientHeight = window.innerHeight;
    this.main.nativeElement.style.height = clientHeight + 'px';
    this.main.nativeElement.style.width = clientWidth  + 'px';

  }
  ngAfterViewInit() {
    this.content.nativeElement.style.marginLeft = window.innerWidth / 2 - this.content.nativeElement.offsetWidth / 2 + 'px';
    this.logo.nativeElement.style.marginLeft = window.innerWidth / 2 - this.logo.nativeElement.offsetWidth / 2 + 'px';
  }
}
