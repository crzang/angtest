import {Component, AfterViewInit, Input, ViewChild, ElementRef, HostListener} from '@angular/core';


@Component({
  selector: 'app-actions-and-pay',
  templateUrl: './actions-and-pay.component.html',
  styleUrls: ['./actions-and-pay.component.css']
})
export class ActionsAndPayComponent implements AfterViewInit {
  @ViewChild('main') main: ElementRef;
  baseHeight = 768;
  baseWidth = '1024';
  mainHeight = this.baseHeight + 'px';
  payments = [];
  transfers = [];

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
    this.transfers = [
      {name: 'Между своими счетами', image: 'assets/img/actions/selfAccounts.png', route: '.'},
      {name: 'Клиенту банка', image: 'assets/img/actions/client.png', route: '.'},
      {name: 'С карты на карту', image: 'assets/img/actions/card2card.png', route: 'card2card'},
      {name: 'В другой банк на счет или карту', image: 'assets/img/actions/toOtherBank.png', route: '.'},
      {name: 'В другой банк по реквизитам', image: 'assets/img/actions/toOtherBank.png', route: 'pay2bank'},
      {name: 'Организации по реквизитам', image: 'assets/img/actions/toOtherBank.png', route: 'pay2org'},
      {name: 'Запросить деньги на счет', image: 'assets/img/actions/tellMoney.png', route: '.'},
      {name: 'На электронный кошелек', image: 'assets/img/actions/toDigitalWallet.png', route: '.'},
      {name: 'Благотворительная помощь', image: 'assets/img/actions/help.png', route: '.'},
    ];
  }

  ngAfterViewInit() {
    this.onResize({});
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
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
    this.mainHeight = (this.baseHeight) + 'px';
  }
}
