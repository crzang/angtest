import { Component, OnInit, Input } from '@angular/core';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  @Input() width = '1024px';
  @Input() height = '768px';
  orders: SelectItem[];
  constructor() {
    this.orders = [
      {label: 'Сортировка по состоянию счета', value: {id: 1, name: 'Сортировка по состоянию счета', code: 'byValue'}},
      {label: 'Сортировка по названию', value: {id: 2, name: 'Сортировка по названию', code: 'byName'}},
    ];
  }

  ngOnInit() {
  }

}
