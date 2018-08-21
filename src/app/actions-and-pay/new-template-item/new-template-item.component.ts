import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-new-template-item',
  templateUrl: './new-template-item.component.html',
  styleUrls: ['./new-template-item.component.css']
})
export class NewTemplateItemComponent implements OnInit {

  accounts = [];
  items = [];
  operators: SelectItem[];
  regularClass = 'hiddenTr';
  buttonDisabled = true;
  name = '';

  operator = null;
  phone = '';
  amount = 0;
  periods = [];

  buttonStyle = {background: 'green'};
  leftFillClass = 'leftFill_visible';
  leftFill = '';
  constructor() {
    this.accounts = [{label: 'Зарплатный Счет', value: '55 000 руб'},
      {label: 'VISA Classic', value: '55 000 руб'},
      {label: 'Еще один счет Счет', value: '55 000 руб'} ];
    this.operators = [{label: 'Мультифон', value: 'megafon'}];
    this.items = [
      {label: 'Сохранить и оплатить'},
      {label: 'Сохранить шаблон'},
      {label: 'Оплатить' }
    ];
    this.periods = [{label: 'Каждый месяц'}];
    this.leftFill = '"Название","Оператор","Телефон","Сумма"';
  }

  ngOnInit() {
  }

  onNameChange(e) {
    this.name = e.target.value + '';
    this.checkFormData();
  }

  onOperatorChange(event: any) {
    this.operator = event.value;
    this.checkFormData();
  }

  onPhoneChange(event) {
    this.phone = event.target.value;
    this.checkFormData();
  }

  onAmountChange(event) {
    this.amount = event.target.value;
    this.checkFormData();
  }

  onRegularChange($event: any) {
      this.regularClass = $event ? 'visibleTr' : 'hiddenTr';
  }

  onPeriodsChange($event: any) {

  }

  checkFormData() {
    this.leftFill = '';
    if (this.name.length === 0) {
      this.leftFill = '"Название"';
    }
    if (this.operator === null) {
      this.leftFill = this.leftFill + ',"Оператор"';
    }
    if (this.phone.length === 2) {
      this.leftFill = this.leftFill + ',"Телефон"';
    }
    if (this.amount <= 0) {
      this.leftFill = this.leftFill + ',"Сумма"';
    }

    this.leftFillClass = this.leftFill.length !== 0 ? 'leftFill_visible' : 'leftFill_hidden';
    this.buttonDisabled = this.leftFill.length !== 0;

  }
}
