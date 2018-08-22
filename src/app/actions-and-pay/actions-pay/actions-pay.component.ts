import {Component, ViewChild, AfterViewInit, ElementRef,Input} from '@angular/core';

@Component({
  selector: 'app-actions-pay',
  templateUrl: './actions-pay.component.html',
  styleUrls: ['./actions-pay.component.css']
})
export class ActionsPayComponent implements AfterViewInit {
  @Input() name = '';
  @Input() items = [];
  @ViewChild('main') main: ElementRef;
  width=''
  imageSize=10
  constructor() {
    let w = (window.innerWidth - 350 - window.innerWidth*0.1)/5;
    this.width=w+'px'
    this.imageSize=Math.round(w/3)
  }

  ngAfterViewInit() {

  }

  getItemSize() {
    return this.width
  }

  getImageSize() {
    return this.imageSize
  }
}
