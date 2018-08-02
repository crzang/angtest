import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-info',
  templateUrl: './credit-info.component.html',
  styleUrls: ['./credit-info.component.css']
})
export class CreditInfoComponent implements OnInit {
  baseHeight = 768;
  baseWidth = '1024';
  mainHeight = this.baseHeight + 'px';
  credits = [];
  details = [];
  constructor() {
    if (window.innerHeight > 768) {
      this.baseHeight = window.innerHeight;
    }
    if (window.innerWidth > 1024) {
      this.baseWidth = (window.innerWidth - 230) + 'px';
    }
    this.mainHeight = (this.baseHeight - 21) + 'px';
    this.credits = [
      {name: 'Начальная сумма кредита', value: '1000000 руб'},
      {name: 'Финальная сумма кредита', value: '1058259 руб'},
      {name: 'Процентная ставка', value: '9,9%'},
      {name: 'Дата выдачи', value: '05.08.2017'},
      {name: 'Дата завершения', value: '05.09.2018'},
      {name: 'Срок кредита', value: '13 месяцев'},
      {name: 'Ежемесячный платеж', value: '81438 руб'},
      {name: 'Дата следующего платежа', value: '05.05.2018'},

    ];
    this.details = [
      {date: '5 февраля', credit: '76 804 р', percent: '5 635 р', payment: '81 438', done: true, next: false},
      {date: '5 февраля', credit: '76 804 р', percent: '5 635 р', payment: '81 438', done: false, next: true},
      {date: '5 февраля', credit: '76 804 р', percent: '5 635 р', payment: '81 438', done: false, next: false},
      {date: '5 февраля', credit: '76 804 р', percent: '5 635 р', payment: '81 438', done: false, next: false},
      {date: '5 февраля', credit: '76 804 р', percent: '5 635 р', payment: '81 438', done: false, next: false},
      {date: '5 февраля', credit: '76 804 р', percent: '5 635 р', payment: '81 438', done: false, next: false},

    ];
  }

  ngOnInit() {
  }


}
