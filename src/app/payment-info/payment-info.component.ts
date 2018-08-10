import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.css']
})
export class PaymentInfoComponent implements OnInit {
  @ViewChild('main') main: ElementRef;
  cards = [];
  details = [];
  constructor() {

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
    const clientWidth = window.innerWidth;
    const clientHeight = window.innerHeight;
    this.main.nativeElement.style.height = clientHeight + 'px';
    this.main.nativeElement.style.width = clientWidth - 210 + 'px';
  }
}
