import { Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-template-confirm',
  templateUrl: './template-confirm.component.html',
  styleUrls: ['./template-confirm.component.css']
})
export class TemplateConfirmComponent implements OnInit, AfterViewInit {
  @ViewChild('main') main: ElementRef;
  @ViewChild('table') table: ElementRef;
  @ViewChild('inputBox') inputBox: ElementRef;
  data = [];
  enabledNext = false;
  constructor() {
    this.data = [{label: 'Счет списания', value: 'Зарплатный счет *9706' , className: 'value'},
      {label: 'Получатель', value: 'Мегафон все регионы', className: 'value'},
      {label: 'Телефон', value: '+7 (921)235-56-48', className: 'value'},
      {label: 'Начало платежей', value: '28.02.2018', className: 'value'},
      {label: 'Сумма платежа', value: '206', className: 'amount'}];
  }

  ngOnInit() {
    const clientWidth = window.innerWidth;
    const clientHeight = window.innerHeight;
    this.main.nativeElement.style.height = clientHeight + 'px';
    this.main.nativeElement.style.width = clientWidth  + 'px';

  }

  ngAfterViewInit() {
    this.table.nativeElement.style.marginLeft = window.innerWidth / 2 - this.table.nativeElement.offsetWidth / 2 + 'px';
    this.inputBox.nativeElement.style.marginLeft = window.innerWidth / 2 - this.inputBox.nativeElement.offsetWidth / 2 + 'px';
  }

  inputCode(e) {
    this.enabledNext = e.target.value.length === 4;
  }
}
