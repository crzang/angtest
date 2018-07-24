import {Component, ViewChild, AfterViewInit, ElementRef} from '@angular/core';
import {CardInfo} from 'card-info';
@Component({
  selector: 'app-reg-by-card',
  templateUrl: './reg-by-card.component.html',
  styleUrls: ['./reg-by-card.component.css']
})
export class RegByCardComponent implements AfterViewInit {

  @ViewChild('btnContinue') btnContinue: ElementRef;
  @ViewChild('btnCancel') btnCancel: ElementRef;
  @ViewChild('card') card: ElementRef;
  @ViewChild('body') body: ElementRef;

  title = 'Введите номер карты';
  baseHeight = 768;
  baseWith = 1024;
  bankLogo = '';
  brandLogo = '';
  codeName = '';
  constructor() {
    if (window.innerHeight > 768) {
      this.baseHeight = window.innerHeight;
    }
    if (window.innerWidth > 1024) {
      this.baseWith = window.innerWidth;
    }
    CardInfo.setDefaultOptions({
      banksLogosPath: '/assets/banks-logos/',
      brandsLogosPath: '/assets/brands-logos/'
    });
  }

  ngAfterViewInit() {
    this.btnContinue.nativeElement.style.marginLeft = this.baseWith / 2 - this.btnContinue.nativeElement.offsetWidth / 2 + 'px';
    this.card.nativeElement.style.left = this.baseWith / 2 - this.card.nativeElement.offsetWidth / 2 + 'px';
    const btnContinuePos = this.baseHeight - this.btnContinue.nativeElement.offsetTop - this.btnContinue.nativeElement.offsetHeight;
    this.btnCancel.nativeElement.style.marginTop = (btnContinuePos - 150) + 'px';
  }

  onCardNumberChange = (e) => {
    const value = e.target.value;
    const cardInfo = new CardInfo(value);
    console.log(cardInfo);
    if (cardInfo.backgroundGradient !== 'linear-gradient(135deg, #eeeeee, #dddddd)') {
      this.body.nativeElement.style.background = cardInfo.backgroundGradient;
    }
    if (cardInfo.bankLogo) {
      this.bankLogo = cardInfo.bankLogo;
    }
    this.brandLogo = cardInfo.brandLogoPng;
    this.codeName = cardInfo.codeName;
  }
}
