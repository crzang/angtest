import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-credit-info',
  templateUrl: './credit-info.component.html',
  styleUrls: ['./credit-info.component.css']
})
export class CreditInfoComponent implements OnInit {
  @ViewChild('main') main: ElementRef;

  credits = [];
  details = [];
  constructor() {

    this.credits = [
      {name: 'Начальная сумма кредита', value: '1000000 р'},
      {name: 'Финальная сумма кредита', value: '1058259 р'},
      {name: 'Процентная ставка', value: '9,9%'},
      {name: 'Дата выдачи', value: '05.08.2017'},
      {name: 'Дата завершения', value: '05.09.2018'},
      {name: 'Срок кредита', value: '13 месяцев'},
      {name: 'Ежемесячный платеж', value: '81438 '},
      {name: 'Дата следующего платежа', value: '05.05.2018'},

    ];
    this.details = [
      {date: '5 февраля', credit: '76 804 ', percent: '5 635 ', payment: '81 438', done: true, next: false},
      {date: '5 февраля', credit: '76 804 ', percent: '5 635 ', payment: '81 438', done: false, next: true},
      {date: '5 февраля', credit: '76 804 ', percent: '5 635 ', payment: '81 438', done: false, next: false},
      {date: '5 февраля', credit: '76 804 ', percent: '5 635 ', payment: '81 438', done: false, next: false},
      {date: '5 февраля', credit: '76 804 ', percent: '5 635 ', payment: '81 438', done: false, next: false},
      {date: '5 февраля', credit: '76 804 ', percent: '5 635 ', payment: '81 438', done: false, next: false},

    ];
  }

  ngOnInit() {
    const clientWidth = window.innerWidth;
    const clientHeight = window.innerHeight;
    this.main.nativeElement.style.height = clientHeight + 'px';
    this.main.nativeElement.style.width = clientWidth - 210 + 'px';
  }


}
