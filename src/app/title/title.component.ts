import {Component, Input, ViewChild, AfterViewInit, ElementRef, HostListener} from '@angular/core';


@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements AfterViewInit {
  @Input() title = '';
  @ViewChild('main') main: ElementRef;

  baseWith = 1024;
  constructor() {

  }
  ngAfterViewInit() {
    this.onResize({});
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerWidth > 1024) {
      this.baseWith = window.innerWidth;
    }
    this.main.nativeElement.style.marginLeft = this.baseWith / 2 - this.main.nativeElement.offsetWidth / 2 + 'px';
  }
}
