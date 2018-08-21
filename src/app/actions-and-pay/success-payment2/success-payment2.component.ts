import { Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-success-payment2',
  templateUrl: './success-payment2.component.html',
  styleUrls: ['./success-payment2.component.css']
})
export class SuccessPayment2Component implements OnInit,AfterViewInit {
  @ViewChild('main') main: ElementRef;
  @ViewChild('image') image: ElementRef;
  @ViewChild('text') text: ElementRef;
  constructor() { }

  ngOnInit() {
    const clientWidth = window.innerWidth;
    const clientHeight = window.innerHeight;
    this.main.nativeElement.style.height = clientHeight + 'px';
    this.main.nativeElement.style.width = clientWidth  + 'px';

  }
  ngAfterViewInit() {
    this.image.nativeElement.style.marginLeft = (window.innerWidth / 2 - this.image.nativeElement.offsetWidth / 2 -20) + 'px';
    this.text.nativeElement.style.marginLeft = window.innerWidth / 2 - this.text.nativeElement.offsetWidth / 2 + 'px';
  }
}
