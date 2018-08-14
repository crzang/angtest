import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-new-template',
  templateUrl: './new-template.component.html',
  styleUrls: ['./new-template.component.css']
})
export class NewTemplateComponent implements OnInit {

  payments = [];

  constructor() {
    this.payments = [{name: 'Штрафы, налоги и государственные услуги', image: 'assets/img/paymentsPhone1.png', route: 'item0'},
      {name: 'Коммунальные услуги ЖКХ', image: 'assets/img/paymentsPhone1.png', route: 'item0'},
      {name: 'Мобильная связь', image: 'assets/img/paymentsPhone1.png', route: 'item0'},
      {name: 'Штрафы, налоги и государственные услуги', image: 'assets/img/paymentsPhone1.png', route: 'item0'},
      {name: 'Коммунальные услуги ЖКХ', image: 'assets/img/paymentsPhone1.png', route: 'item0'},
      {name: 'Мобильная связь', image: 'assets/img/paymentsPhone1.png', route: 'item0'},
      {name: 'Штрафы, налоги и государственные услуги', image: 'assets/img/paymentsPhone1.png', route: 'item0'},
      {name: 'Коммунальные услуги ЖКХ', image: 'assets/img/paymentsPhone1.png', route: 'item0'},
      {name: 'Мобильная связь', image: 'assets/img/paymentsPhone1.png', route: 'item0'},
      {name: 'Штрафы, налоги и государственные услуги', image: 'assets/img/paymentsPhone1.png', route: 'item0'},
      {name: 'Коммунальные услуги ЖКХ', image: 'assets/img/paymentsPhone1.png', route: 'item0'},
      {name: 'Мобильная связь', image: 'assets/img/paymentsPhone1.png', route: 'item0'},
      {name: 'Штрафы, налоги и государственные услуги', image: 'assets/img/paymentsPhone1.png', route: 'item0'},
      {name: 'Коммунальные услуги ЖКХ', image: 'assets/img/paymentsPhone1.png', route: 'item0'},
      {name: 'Мобильная связь', image: 'assets/img/paymentsPhone1.png', route: 'item0'},
      {name: 'Штрафы, налоги и государственные услуги', image: 'assets/img/paymentsPhone1.png', route: 'item0'},
      {name: 'Коммунальные услуги ЖКХ', image: 'assets/img/paymentsPhone1.png', route: 'item0'},
      {name: 'Мобильная связь', image: 'assets/img/paymentsPhone1.png', route: 'item0'},
      {name: 'Штрафы, налоги и государственные услуги', image: 'assets/img/paymentsPhone1.png', route: 'item0'},
      {name: 'Коммунальные услуги ЖКХ', image: 'assets/img/paymentsPhone1.png', route: 'item0'}
    ];
  }

  ngOnInit() {
  }

}
