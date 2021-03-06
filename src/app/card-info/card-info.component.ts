import {Component, AfterViewInit, ViewChild, ElementRef, HostListener} from '@angular/core';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css']
})
export class CardInfoComponent implements AfterViewInit {
  @ViewChild('main') main: ElementRef;

  cards = [];
  details = [];

  constructor() {

    this.cards = [
      {name: 'Начало действия карты', value: '11.07.2017'},
      {name: 'Дата окончания действия карты', value: '11.08.2018'},
      {name: 'Доступный остаток', value: '221350 '},
      {name: 'Сумма заблокированных средств', value: '1350 '},
      {name: 'Дата и время акутализации остатка', value: 'Вчера, 16:00'},
      {name: 'Тариф', value: 'Волшебный'},
    ];
    this.details = [
      {
        date: '1 октября',
        data: [{icon: 'assets/img/cardDetailItem0.png', name: 'METRO Store 1019', value: '14 567 руб', bonus: '1200', background: '#185CA9'},
          {icon: 'assets/img/cardDetailItem1.png', name: 'PEREKRESTOK 24 ', extraName: 'Гипермаркет', value: '2 964 ', bonus: '65', background: '#005127'},
          {icon: 'assets/img/cardDetailItem2.png', name: 'Азбука вкуса', extraName: 'Супермаркет', value: '2 100 ', bonus: '1200', background: '#6EBF14'}
        ]
      },
      {
        date: '5 октября',
        data: [{icon: 'assets/img/cardDetailItem3.png', name: 'Пятерочка', extraName: 'Продуктовый магазин', value: '2 964 ', bonus: '65', background: '#F80000'},
          {icon: 'assets/img/cardDetailItem4.png', name: 'Dyadushka FHO', extraName: 'Гипермаркет', value: '550 ', bonus: '0', background: '#E2AF2D'},
          {icon: 'assets/img/cardDetailItem2.png', name: 'Азбука вкуса', extraName: 'Супермаркет',
            value: '2100 ',
            bonus: '1200', background: '#6EBF14'
          }]
      }
    ];
  }

  ngAfterViewInit() {
    this.onResize({});
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const clientWidth = window.innerWidth;
    const clientHeight = window.innerHeight;
    this.main.nativeElement.style.height = clientHeight + 'px';
    this.main.nativeElement.style.width = clientWidth - 210 + 'px';
  }

}
