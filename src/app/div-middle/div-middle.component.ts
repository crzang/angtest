import {Component, ViewChild, Input, AfterViewInit, ElementRef} from '@angular/core';


@Component({
  selector: 'app-div-middle',
  templateUrl: './div-middle.component.html',
  styleUrls: ['./div-middle.component.css'],
})
export class DivMiddleComponent implements AfterViewInit {
  @ViewChild('main') main: ElementRef;
  @Input() className = '';

  baseWith = 1024;
  constructor() {
    if (window.innerWidth > 1024) {
      this.baseWith = window.innerWidth;
    }
  }

  ngAfterViewInit() {
    this.main.nativeElement.style.marginLeft = this.baseWith / 2 - this.main.nativeElement.offsetWidth / 2 + 'px';
  }

}
