import {Component, ElementRef,  ViewChild, AfterViewInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-verify-sms',
  templateUrl: './verify-sms.component.html',
  styleUrls: ['./verify-sms.component.css']
})
export class VerifySmsComponent implements AfterViewInit {

  @ViewChild('smsCode') smsCode: ElementRef;
  @ViewChild('btnNext') btnNext: ElementRef;
  @ViewChild('footerBlock') footerBlock: ElementRef;
  baseWith = 1024;
  baseHeight = 768;
  btnNextEnabled = false;

  constructor() {

  }

  onSmsChange(e) {
    this.btnNextEnabled = e.target.value.length === 6;
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
    this.smsCode.nativeElement.style.marginLeft = this.baseWith / 2 - this.smsCode.nativeElement.offsetWidth / 2 + 'px';
    this.btnNext.nativeElement.style.marginLeft = this.baseWith / 2 - this.btnNext.nativeElement.offsetWidth / 2 + 'px';
    const btnContinuePos = this.baseHeight - this.btnNext.nativeElement.offsetTop - this.btnNext.nativeElement.offsetHeight;
    this.footerBlock.nativeElement.style.marginTop = (btnContinuePos - 150) + 'px';
  }
}
