import {Component, AfterViewInit, ViewChild, ElementRef,HostListener} from '@angular/core';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.css']
})
export class PaymentInfoComponent implements AfterViewInit {
  @ViewChild('main') main: ElementRef;
  cards = [];
  details = [];
  detailClass="extra hiddenDetail";
  constructor() {

    this.cards = [
      {name: 'Дата платежа', value: '5 сентября, 16:57'},
      {name: 'Счет списания', value: 'Visa Classic *1110'},
      {name: 'Категория', value: 'Еда, продукты питания'},
      {name: 'Статус платежа', value: 'Совершен'},

    ];
    this.details = [
      {id:1,name: 'Тоrк Полотенца бумажные однослойные ZZ-сложение листа 5 х 250 л ', count: 'x5', value: '14 567 руб',className:'extra hiddenDetail'},
      {id:2,name: 'Кроненбург Бланк, упаковка, 20 бутылок ', count: 'x45', value: '14 567 руб',className:'extra hiddenDetail'},
      {id:3,name: 'Tork Диспенсер мини для полотенец c ZZ-сложением листа', count: 'x20', value: '14 567 руб',className:'extra hiddenDetail'},
    ];
  }

  ngAfterViewInit() {
    this.onResize({})
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const clientWidth = window.innerWidth;
    const clientHeight = window.innerHeight;
    this.main.nativeElement.style.height = clientHeight + 'px';
    this.main.nativeElement.style.width = clientWidth - 210 + 'px';
  }
  showDetail(id){
    this.details.forEach((d)=>{
      d.className="extra hiddenDetail"
      if(d.id===id){
        d.className="extra showDetail"
      }
    })
  }

  hideDetail(id){
    this.details.forEach((d)=>{
      if(d.id===id){
        d.className="extra hiddenDetail"
      }
    })
  }
}
