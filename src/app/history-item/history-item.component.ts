import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.css']
})
export class HistoryItemComponent implements OnInit {
  @ViewChild('main') main: ElementRef;
  details = [];

  constructor() {
    this.details = [
      {name: 'Назначение', value: 'За тренировки'},
      {name: 'Счет списания', value: 'Visa Classic *1110'},
      {name: 'Получатель', value: 'Мин***** Н.Н. *5437'},
      {name: 'Дата перевода', value: '12.02.2018'},
      {name: 'Статус перевода', value: ' Совершен'}
    ];
  }

  ngOnInit() {
    const clientWidth = window.innerWidth;
    const clientHeight = window.innerHeight;
    this.main.nativeElement.style.height = clientHeight + 'px';
    this.main.nativeElement.style.width = clientWidth - 210 + 'px';
  }
}
