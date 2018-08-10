import { Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @ViewChild('main') main: ElementRef;
  orders: SelectItem[];
  baseHeight = '768px';
  constructor() {
    this.orders = [
      {label: 'Сортировка по состоянию счета', value: {id: 1, name: 'Сортировка по состоянию счета', code: 'byValue'}},
      {label: 'Сортировка по названию', value: {id: 2, name: 'Сортировка по названию', code: 'byName'}},
    ];
  }

  ngOnInit() {
    const clientWidth = window.innerWidth;
    const clientHeight = window.innerHeight;
    this.main.nativeElement.style.height = clientHeight - 50 + 'px';
    this.main.nativeElement.style.width = clientWidth - 210 - clientWidth * 0.2 + 'px';
  }

}
