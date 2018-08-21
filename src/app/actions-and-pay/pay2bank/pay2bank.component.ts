import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay2bank',
  templateUrl: './pay2bank.component.html',
  styleUrls: ['./pay2bank.component.css']
})
export class Pay2bankComponent implements OnInit {
  items = [];
  accounts = [];
  btnNextEnabled = false;
  constructor() {
    this.accounts = [{label: 'Зарплатный Счет', value: '55 000 руб'},
      {label: 'VISA Classic', value: '55 000 руб'},
      {label: 'Еще один счет Счет', value: '55 000 руб'} ];

    this.items = [
      {id: 1, label: 'Номер счета получателя', value: '', labelClass: 'itemLabel', valueClass: 'itemValue', valueType: 'number'},
      {id: 2, label: 'ФИО', value: '', labelClass: 'itemLabel', valueClass: 'itemValue', valueType: 'text'},
      {id: 3, label: 'ИНН', value: '', labelClass: 'itemLabel', valueClass: 'itemValue', valueType: 'number'},
      {id: 4, label: 'Адрес', value: '', labelClass: 'itemLabel', valueClass: 'itemValue', valueType: 'text'},
      {id: 5, label: 'Банк получателя', value: '', labelClass: 'itemLabel', valueClass: 'itemValue', valueType: 'text'},
      {id: 6, label: 'БИК', value: '', labelClass: 'itemLabel', valueClass: 'itemValue', valueType: 'number'},
      {id: 7, label: 'Корр счет', value: '', labelClass: 'itemLabel', valueClass: 'itemValue', valueType: 'number'},
      {id: 8, label: 'Счет списания', value: this.accounts[0], labelClass: 'itemLabel', valueClass: 'itemValue', valueType: 'accounts'},
      {id: 9, label: 'Назначение платежа', value: '', labelClass: 'itemLabel', valueClass: 'itemValue', valueType: 'text'},
      {id: 10, label: 'Сумма', value: '', labelClass: 'itemLabel', valueClass: 'itemValue', valueType: 'number'},
      {id: 11, label: 'Итого с коммисией (3%)', value: '', labelClass: 'itemLabel', valueClass: 'itemValue', valueType: 'label'},

    ];

  }

  ngOnInit() {
  }

  onValueChange(e, id) {
    const value = e.target.value;
    const index = this.items.findIndex((item) => item.id === id);
    if (index !== -1) {
      if (id === 10) {
        const index2 = this.items.findIndex((item) => item.id === 11);
        this.items[index2].value = value * 1.03;
      }
      this.items[index].value = value;
    }
    let btnEnabled = true;
    this.items.forEach((i) => {
      if (i.value === '') {
        btnEnabled = false;
      }
    });
    this.btnNextEnabled = btnEnabled;
  }

}
