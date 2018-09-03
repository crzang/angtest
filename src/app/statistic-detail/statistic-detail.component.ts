import {Component, AfterViewInit, ViewChild, ElementRef,HostListener} from '@angular/core';

@Component({
  selector: 'app-statistic-detail',
  templateUrl: './statistic-detail.component.html',
  styleUrls: ['./statistic-detail.component.css']
})
export class StatisticDetailComponent implements AfterViewInit {
  @ViewChild('main') main: ElementRef;
  details = [];
  cards = [];
  constructor() {
    this.cards = [
      {name: 'Запланированный расход в месяц', value: '20 000 руб'},
      {name: 'Общая сумма затрат за все время', value: '23 020 054 руб'},
      {name: 'Общее время затрат', value: '10 месяцев'},

    ];
    this.details = [
      {
        date: '1 октября',
        data: [{icon: 'assets/img/cardDetailItem0.png', name: 'METRO Store 1019', value: '14567 руб', bonus: '1200'},
          {icon: 'assets/img/cardDetailItem1.png', name: 'PEREKRESTOK 24 ', extraName: 'Гипермаркет', value: '2964 руб', bonus: '65'},
          {icon: 'assets/img/cardDetailItem2.png', name: 'Азбука вкуса', extraName: 'Супермаркет', value: '2100 руб', bonus: '1200'}
        ]
      },
      {
        date: '5 октября',
        data: [{icon: 'assets/img/cardDetailItem3.png', name: 'Пятерочка', extraName: 'Продуктовый магазин', value: '2964 руб', bonus: '65'},
          {icon: 'assets/img/cardDetailItem4.png', name: 'Dyadushka FHO', extraName: 'Гипермаркет', value: '550 руб', bonus: '0'},
          {icon: 'assets/img/cardDetailItem2.png', name: 'Азбука вкуса', extraName: 'Супермаркет',
            value: '2100 руб',
            bonus: '1200'
          }]
      }
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
}
