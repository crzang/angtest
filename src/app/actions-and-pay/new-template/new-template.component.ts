import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-new-template',
  templateUrl: './new-template.component.html',
  styleUrls: ['./new-template.component.css']
})
export class NewTemplateComponent implements OnInit {

  payments = [];

  constructor() {
    this.payments = [{name: 'Мобильная связь', image: 'assets/img/actions/mobile.png', route: '.'},
      {name: 'Штрафы, налоги и государственные услуги', image: 'assets/img/actions/tax.png', route: 'checkTax'},
      {name: 'Коммунальные услуги ЖКХ', image: 'assets/img/actions/comm.png', route: '.'},
      {name: 'Интернет, телевидение, телефон', image: 'assets/img/actions/internet.png', route: '.'},
      {name: 'Социальные сети, онлайн игры', image: 'assets/img/actions/social.png', route: '.'},
      {name: 'Охранные системы', image: 'assets/img/actions/security.png', route: '.'},
      {name: 'Сетевой маркетинг', image: 'assets/img/actions/netMarket.png', route: '.'},
      {name: 'Платеж организации по реквизитам', image: 'assets/img/actions/pay2org.png', route: 'pay2org'},
      {name: 'Прочее', image: 'assets/img/actions/other.png', route: '.'},
    ];
  }

  ngOnInit() {
  }

}
