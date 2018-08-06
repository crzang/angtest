import { Component, OnInit, Input } from '@angular/core';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() width = '1024px';
  @Input() height = '768px';
  orders: SelectItem[];
  baseHeight = '768px';
  constructor() {
    this.orders = [
      {label: 'Сортировка по состоянию счета', value: {id: 1, name: 'Сортировка по состоянию счета', code: 'byValue'}},
      {label: 'Сортировка по названию', value: {id: 2, name: 'Сортировка по названию', code: 'byName'}},
    ];
  }

  ngOnInit() {
    if (window.innerHeight > 768) {
      this.baseHeight = window.innerHeight+'px';
    }
  }

}
