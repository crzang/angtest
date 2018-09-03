import {Component, ElementRef,  ViewChild, AfterViewInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-error-payment',
  templateUrl: './error-payment.component.html',
  styleUrls: ['./error-payment.component.css']
})
export class ErrorPaymentComponent implements AfterViewInit {

  @ViewChild('image') image: ElementRef;
  @ViewChild('btnRetry') btnRetry: ElementRef;
  @ViewChild('footerBlock') footerBlock: ElementRef;
  baseWith = 1024;
  baseHeight = 768;

  constructor() {

  }
  ngAfterViewInit() {
    this.onResize({});
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerWidth > 1024) {
      this.baseWith = window.innerWidth;
    }
    if (window.innerHeight > 768) {
      this.baseHeight = window.innerHeight;
    }
    this.image.nativeElement.style.marginLeft = (this.baseWith / 2 - this.image.nativeElement.offsetWidth / 2 - 80) + 'px';
    this.btnRetry.nativeElement.style.marginLeft = this.baseWith / 2 - this.btnRetry.nativeElement.offsetWidth / 2 + 'px';
    const btnContinuePos = this.baseHeight - this.btnRetry.nativeElement.offsetTop - this.btnRetry.nativeElement.offsetHeight;
    this.footerBlock.nativeElement.style.marginTop = (btnContinuePos - 150) + 'px';
  }

}
