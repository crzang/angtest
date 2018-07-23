import {Component, ViewChild, AfterViewInit, ElementRef} from '@angular/core';

@Component({
  selector: 'app-reg-by-card',
  templateUrl: './reg-by-card.component.html',
  styleUrls: ['./reg-by-card.component.css']
})
export class RegByCardComponent implements AfterViewInit {

  @ViewChild('btnContinue') btnContinue: ElementRef;
  @ViewChild('btnCancel') btnCancel: ElementRef;

  title = 'Введите номер карты';
  baseHeight = 768;
  baseWith = 1024;

  constructor() {
    if (window.innerHeight > 768) {
      this.baseHeight = window.innerHeight;
    }
    if (window.innerWidth > 1024) {
      this.baseWith = window.innerWidth;
    }
  }

  ngAfterViewInit() {
    this.btnContinue.nativeElement.style.marginLeft = this.baseWith / 2 - this.btnContinue.nativeElement.offsetWidth / 2 + 'px';
    const btnContinuePos = this.baseHeight - this.btnContinue.nativeElement.offsetTop - this.btnContinue.nativeElement.offsetHeight;
    this.btnCancel.nativeElement.style.marginTop = (btnContinuePos - 150) + 'px';
  }

}
