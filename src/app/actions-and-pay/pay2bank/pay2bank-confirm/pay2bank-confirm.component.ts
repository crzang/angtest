import { Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-pay2bank-confirm',
  templateUrl: './pay2bank-confirm.component.html',
  styleUrls: ['./pay2bank-confirm.component.css']
})
export class Pay2bankConfirmComponent implements OnInit, AfterViewInit {
  @ViewChild('main') main: ElementRef;
  @ViewChild('table') table: ElementRef;
  @ViewChild('inputBox') inputBox: ElementRef;
  data = [];
  enabledNext = false;
  constructor() {
    this.data = [{label: 'Счет списания', value: 'Моя сберочка *7354' , className: 'value'},
      {label: 'Счет получателя', value: '40702810149490078843', className: 'value'},
      {label: 'Получатель', value: 'Куд***** А.С. *5437', className: 'value'},
      {label: 'Назначение', value: 'за обеды', className: 'value'},
      {label: 'Сумма платежа', value: '2575', className: 'amount'}];
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
