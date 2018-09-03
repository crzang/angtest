import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-pay2org-confirm',
  templateUrl: './pay2org-confirm.component.html',
  styleUrls: ['./pay2org-confirm.component.css']
})
export class Pay2orgConfirmComponent implements OnInit, AfterViewInit {

  @ViewChild('main') main: ElementRef;
  @ViewChild('table') table: ElementRef;
  @ViewChild('inputBox') inputBox: ElementRef;
  data = [];
  enabledNext = false;
  constructor() {
    this.data = [{label: 'Счет списания', value: 'Моя сберочка *7354' , className: 'value'},
      {label: 'Счет получателя', value: '40702810149490078843', className: 'value'},
      {label: 'Получатель', value: 'Фонд кап ремонта', className: 'value'},
      {label: 'Назначение', value: 'оплата за месяц', className: 'value'},
      {label: 'Сумма платежа', value: '2575', className: 'amount'}];
  }

  ngAfterViewInit() {
    this.onResize({});
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const clientWidth = window.innerWidth;
    const clientHeight = window.innerHeight;
    this.main.nativeElement.style.height = clientHeight + 'px';
    this.main.nativeElement.style.width = clientWidth  + 'px';
    this.table.nativeElement.style.marginLeft = window.innerWidth / 2 - this.table.nativeElement.offsetWidth / 2 + 'px';
    this.inputBox.nativeElement.style.marginLeft = window.innerWidth / 2 - this.inputBox.nativeElement.offsetWidth / 2 + 'px';

  }
  ngOnInit() {

  }

  inputCode(e) {
    this.enabledNext = e.target.value.length === 4;
  }

}
