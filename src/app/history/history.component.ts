import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {SelectItem} from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  @ViewChild('main') main: ElementRef;
  typeOperations: SelectItem[];
  operations = [];

  constructor() {
    this.typeOperations = [
      {label: 'Все операции', value: null},
      {label: 'Исходящие', value: 'out'},
      {label: 'Входящие', value: 'in'},
    ];
    this.operations = [
      {
        date: '19 марта', dateDesc: 'Сегодня', operations: [
          {
            name: 'Открытие вклада',
            status: 'pending',
            statusString: 'Ожидается',
            fromIco: 'assets/img/sber.png',
            from: 'Зарплатный счет',
            fromNum: '9706',
            toIco: 'assets/img/sber.png',
            to: 'Сбербанк России',
            toNum: '5644',
            value: '-200 000 руб',
            bonus: ''
          }
        ]
      },
      {
        date: '18 марта', dateDesc: 'Вчера', operations: [
          {
            name: 'Оплата услуг',
            status: 'canceled',
            statusString: 'Отменен',
            fromIco: 'assets/img/sber.png',
            from: 'Моя сберочка',
            fromNum: '7354',
            toIco: 'assets/img/gibdd.png',
            to: 'Управление ГИБДД ГУВД',
            toNum: '401 01 810 8 00000012197659',
            value: '-400 руб',
            bonus: ''
          },
          {
            name: 'Оплата услуг',
            status: 'done',
            statusString: 'Исполнен',
            fromIco: 'assets/img/sber.png',
            from: 'Visa classic',
            fromNum: '1110',
            toIco: 'assets/img/yandex.png',
            to: 'ООО "Яндекс"',
            toNum: '302 01 540 5 000023468653',
            value: '-5000 руб',
            bonus: '+ 25 юонусов'
          }
          ,
          {
            name: 'Перевод между счетами',
            status: 'done',
            statusString: 'Исполнен',
            fromIco: 'assets/img/sber.png',
            from: 'Visa classic',
            fromNum: '1110',
            toIco: 'assets/img/alfa.png',
            to: 'Анастасия Сергеевна К.',
            toNum: '3365',
            value: '-10 200 руб',
            bonus: ''
          }
        ]
      }
    ];
  }

  ngOnInit() {
    const clientWidth = window.innerWidth;
    const clientHeight = window.innerHeight;
    this.main.nativeElement.style.height = clientHeight + 'px';
    this.main.nativeElement.style.width = (clientWidth - 210) * 0.8 + 'px';

  }

  getItemClass(operation) {

  }

  getStatus(status) {
    if (status === 'pending') {
      return 'assets/img/pending.png';
    } else if (status === 'canceled') {
      return 'assets/img/canceled.png';
    } else if (status === 'done') {
      return 'assets/img/done.png';
    }
  }
}
