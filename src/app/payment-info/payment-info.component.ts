import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.css']
})
export class PaymentInfoComponent implements OnInit {
  baseHeight = 768;
  baseWidth = '1024';
  mainHeight = this.baseHeight + 'px';
  cards = [];
  details = [];
  constructor() {
    if (window.innerHeight > 768) {
      this.baseHeight = window.innerHeight;
    }
    if (window.innerWidth > 1024) {
      this.baseWidth = (window.innerWidth - 230) + 'px';
    }
    this.mainHeight = (this.baseHeight - 21) + 'px';
    this.cards = [
      {name: 'Дата платежа', value: '5 сентября, 16:57'},
      {name: 'Счет списания', value: 'Visa Classic *1110'},
      {name: 'Категория', value: 'Еда, продукты питания'},
      {name: 'Статус платежа', value: 'Совершен'},

    ];
    this.details = [
      {name: 'Тоrк Полотенца бумажные однослойные ZZ-сложение листа 5 х 250 л ', count: 'x5', value: '14 567 руб'},
      {name: 'Кроненбург Бланк, упаковка, 20 бутылок ', count: 'x45', value: '14 567 руб'},
      {name: 'Tork Диспенсер мини для полотенец c ZZ-сложением листа', count: 'x20', value: '14 567 руб'},
      {name: '', count: '', value: ''}
    ];
  }

  ngOnInit() {
  }

}
