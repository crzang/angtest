import {Component, OnInit, Input, ViewChild, AfterViewInit,  ElementRef} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements AfterViewInit, OnInit {
  @Input() label = '';
  @Input() border = false;
  @Input() route = ''
  @ViewChild('main') main: ElementRef;
  baseWith = 1024;
  extStyleNames = [];
  constructor() {
    if (window.innerWidth > 1024) {
      this.baseWith = window.innerWidth;
    }
  }

  ngOnInit() {
    if(this.border){
      this.extStyleNames.push("withBorder")
    }
  }

  ngAfterViewInit() {
    this.main.nativeElement.style.marginLeft = this.baseWith / 2 - this.main.nativeElement.offsetWidth / 2 + 'px';
  }

}
