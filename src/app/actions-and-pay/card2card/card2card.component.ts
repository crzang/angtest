import {Component, ViewChild, AfterViewInit, ElementRef} from '@angular/core';
import {CardInfo} from 'card-info';

@Component({
  selector: 'app-card2card',
  templateUrl: './card2card.component.html',
  styleUrls: ['./card2card.component.css']
})
export class Card2cardComponent implements AfterViewInit {
  @ViewChild('card') card: ElementRef;
  @ViewChild('card2') card2: ElementRef;
  @ViewChild('cardImg') cardImg: ElementRef;
  @ViewChild('card2Img') card2Img: ElementRef;
  @ViewChild('body') body: ElementRef;

  brandLogo = '';
  brand2Logo = '';
  codeName = '';
  btnNextEnabled = false;
  cardNumber = '';
  card2Number = '';
  cardMonth = '';
  cardYear = '';
  cardCVV = '';
  bankLogo = '';
  bank2Logo = '';
  amountWithTax = 0;
  constructor() {
    CardInfo.setDefaultOptions({
      banksLogosPath: '/assets/banks-logos/',
      brandsLogosPath: '/assets/brands-logos/'
    });
  }

  ngAfterViewInit() {
  }

  onCardNumberChange = (e) => {
    this.cardNumber = e.target.value;
    const cardInfo = new CardInfo(this.cardNumber);
    this.bankLogo = cardInfo.bankLogo;
    this.cardImg.nativeElement.style.visibility = this.bankLogo === null ? 'hidden' : 'visible';
    if (cardInfo.backgroundColor !== '#eeeeee') {
      this.card.nativeElement.style.background = cardInfo.backgroundColor;
    } else {
      this.card.nativeElement.style.background = '#F8F8F8';
    }


    this.brandLogo = cardInfo.brandLogoPng;
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
    this.btnNextEnabled = this.cardNumber.length === 16 && this.cardMonth.length === 2 && this.cardYear.length === 2 && this.cardCVV.length === 3 && this.card2Number.length === 16 && this.amount > 0;
  }

  onPaymentNameChange($event) {

  }
  onAmountChange(event) {
    this.amount = event.target.value;
    this.amountWithTax = this.amount * 1.03;
    this.checkInput();
}
  onCard2NumberChange(e) {
    this.card2Number = e.target.value;
    const cardInfo = new CardInfo(this.card2Number);
    this.bank2Logo = cardInfo.bankLogo;
    this.card2Img.nativeElement.style.visibility = this.bank2Logo === null ? 'hidden' : 'visible';
    if (cardInfo.backgroundColor !== '#eeeeee') {
      this.card2.nativeElement.style.background = cardInfo.backgroundColor;
    } else {
      this.card2.nativeElement.style.background = '#F8F8F8';
    }
    this.brand2Logo = cardInfo.brandLogoPng;
    this.checkInput();
  }
}
