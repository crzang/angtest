import {Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-actions-and-pay',
  templateUrl: './actions-and-pay.component.html',
  styleUrls: ['./actions-and-pay.component.css']
})
export class ActionsAndPayComponent implements OnInit {
  @ViewChild('main') main: ElementRef;
  baseHeight = 768;
  baseWidth = '1024';
  mainHeight = this.baseHeight + 'px';
  payments = []
  transfers = []

  constructor() {
    this.payments = [{name: 'Штрафы, налоги и государственные услуги', image: 'assets/img/paymentsPhone1.png'},
      {name: 'Коммунальные услуги ЖКХ', image: 'assets/img/paymentsPhone1.png'},
      {name: 'Мобильная связь', image: 'assets/img/paymentsPhone1.png'},
      {name: 'Штрафы, налоги и государственные услуги', image: 'assets/img/paymentsPhone1.png'},
      {name: 'Коммунальные услуги ЖКХ', image: 'assets/img/paymentsPhone1.png'},
      {name: 'Мобильная связь', image: 'assets/img/paymentsPhone1.png'},
      {name: 'Штрафы, налоги и государственные услуги', image: 'assets/img/paymentsPhone1.png'},
      {name: 'Коммунальные услуги ЖКХ', image: 'assets/img/paymentsPhone1.png'},
      {name: 'Мобильная связь', image: 'assets/img/paymentsPhone1.png'},
      {name: 'Штрафы, налоги и государственные услуги', image: 'assets/img/paymentsPhone1.png'},
      {name: 'Коммунальные услуги ЖКХ', image: 'assets/img/paymentsPhone1.png'},
      {name: 'Мобильная связь', image: 'assets/img/paymentsPhone1.png'},
      {name: 'Штрафы, налоги и государственные услуги', image: 'assets/img/paymentsPhone1.png'},
      {name: 'Коммунальные услуги ЖКХ', image: 'assets/img/paymentsPhone1.png'},
      {name: 'Мобильная связь', image: 'assets/img/paymentsPhone1.png'},
      {name: 'Штрафы, налоги и государственные услуги', image: 'assets/img/paymentsPhone1.png'},
      {name: 'Коммунальные услуги ЖКХ', image: 'assets/img/paymentsPhone1.png'},
      {name: 'Мобильная связь', image: 'assets/img/paymentsPhone1.png'},
      {name: 'Штрафы, налоги и государственные услуги', image: 'assets/img/paymentsPhone1.png'},
      {name: 'Коммунальные услуги ЖКХ', image: 'assets/img/paymentsPhone1.png'}
    ];
    this.transfers = [{name: 'Штрафы, налоги и государственные услуги', image: 'assets/img/paymentsPhone1.png'},
      {name: 'Коммунальные услуги ЖКХ', image: 'assets/img/paymentsPhone1.png'},
      {name: 'Мобильная связь', image: 'assets/img/paymentsPhone1.png'},
      {name: 'Штрафы, налоги и государственные услуги', image: 'assets/img/paymentsPhone1.png'},
      {name: 'Коммунальные услуги ЖКХ', image: 'assets/img/paymentsPhone1.png'},
      {name: 'Мобильная связь', image: 'assets/img/paymentsPhone1.png'},
      {name: 'Штрафы, налоги и государственные услуги', image: 'assets/img/paymentsPhone1.png'},
      {name: 'Коммунальные услуги ЖКХ', image: 'assets/img/paymentsPhone1.png'},
      {name: 'Мобильная связь', image: 'assets/img/paymentsPhone1.png'},
      {name: 'Штрафы, налоги и государственные услуги', image: 'assets/img/paymentsPhone1.png'},
      {name: 'Коммунальные услуги ЖКХ', image: 'assets/img/paymentsPhone1.png'},
      {name: 'Мобильная связь', image: 'assets/img/paymentsPhone1.png'},
      {name: 'Штрафы, налоги и государственные услуги', image: 'assets/img/paymentsPhone1.png'},
      {name: 'Коммунальные услуги ЖКХ', image: 'assets/img/paymentsPhone1.png'},
      {name: 'Мобильная связь', image: 'assets/img/paymentsPhone1.png'},
      {name: 'Штрафы, налоги и государственные услуги', image: 'assets/img/paymentsPhone1.png'},
      {name: 'Коммунальные услуги ЖКХ', image: 'assets/img/paymentsPhone1.png'},
      {name: 'Мобильная связь', image: 'assets/img/paymentsPhone1.png'},
      {name: 'Штрафы, налоги и государственные услуги', image: 'assets/img/paymentsPhone1.png'},
      {name: 'Коммунальные услуги ЖКХ', image: 'assets/img/paymentsPhone1.png'}
    ];
  }

  ngOnInit() {
    const clientWidth = window.innerWidth;
    const clientHeight = window.innerHeight;
    /*this.main.nativeElement.style.height = clientHeight - 50 + 'px';
    this.main.nativeElement.style.width = clientWidth - 210 - clientWidth * 0.2 + 'px';
*/
    if (window.innerHeight > 768) {
      this.baseHeight = window.innerHeight;
    }
    if (window.innerWidth > 1024) {
      this.baseWidth = (window.innerWidth - 210) + 'px';
    }
    this.mainHeight = (this.baseHeight - 21) + 'px';

  }
}
