import {Component, ViewChild, AfterViewInit, ElementRef, HostListener} from '@angular/core';
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
  @ViewChild('cardImg') cardImg: ElementRef;
  @ViewChild('body') body: ElementRef;
  @ViewChild('ccNumber') ccNumber: ElementRef;

  title = 'Введите номер карты';
  baseHeight = 768;
  baseWith = 1024;
  bankLogo = '';
  brandLogo = '';
  codeName = '';
  btnNextEnabled = false;
  cardNumber = '';
  cardMonth = '';
  cardYear = '';
  cardCVV = '';

  expMask = [/\d/, /\d/];
  cvvMask = [/\d/, /\d/, /\d/];
  bankVisibility = 'hidden';
  brandVisibility = 'hidden';
  constructor() {

    CardInfo.setDefaultOptions({
      banksLogosPath: '/assets/banks-logos/',
      brandsLogosPath: '/assets/brands-logos/'
    });
  }

  ngAfterViewInit() {
    this.onResize({});
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerHeight > 768) {
      this.baseHeight = window.innerHeight;
    }
    if (window.innerWidth > 1024) {
      this.baseWith = window.innerWidth;
    }
    this.btnContinue.nativeElement.style.marginLeft = this.baseWith / 2 - this.btnContinue.nativeElement.offsetWidth / 2 + 'px';
    this.card.nativeElement.style.left = this.baseWith / 2 - this.card.nativeElement.offsetWidth / 2 + 'px';
    const btnContinuePos = this.baseHeight - this.btnContinue.nativeElement.offsetTop - this.btnContinue.nativeElement.offsetHeight;
    this.btnCancel.nativeElement.style.marginTop = (btnContinuePos - 150) + 'px';
  }
  onCardNumberChange = (e) => {
    this.cardNumber = e.target.value;
    const cardInfo = new CardInfo(this.cardNumber);
    console.log(cardInfo);
    if (cardInfo.backgroundGradient !== 'linear-gradient(135deg, #eeeeee, #dddddd)') {
      this.body.nativeElement.style.background = cardInfo.backgroundGradient;
    } else {
      this.body.nativeElement.style.background = 'linear-gradient(90deg, #ea4442 0%, #bb3853 100%)';
    }
    if (cardInfo.backgroundColor !== '#eeeeee') {
      this.cardImg.nativeElement.style.background = cardInfo.backgroundColor;
    } else {
      this.cardImg.nativeElement.style.background = '#F27B3A';
    }
    this.bankLogo = cardInfo.bankLogo;
    this.bankVisibility = this.bankLogo === null ? 'hidden' : 'visible';
    this.brandLogo = cardInfo.brandLogoPng;
    this.brandVisibility = this.brandLogo === null ? 'hidden' : 'visible';
    this.codeName = cardInfo.codeName;
    this.checkInput();
  }

  onCardMonthChange(e) {
    this.cardMonth = e.target.value;
    this.checkInput();
  }
  onCardYearChange(e) {
    this.cardYear = e.target.value;
    this.checkInput();
  }
  onCardCVVChange(e) {
    this.cardCVV = e.target.value;
    this.checkInput();
  }
  checkInput() {
    this.btnNextEnabled = this.cardNumber.length === 16 && this.cardMonth.length === 2 && this.cardYear.length === 2 && this.cardCVV.length === 3;
  }

  changeTitle(title) {
    this.title = title;
    if (this.cardNumber.length === 16) {
      this.ccNumber.nativeElement.value = '**** **** **** ' + this.cardNumber.slice(12);
    }
  }
}
