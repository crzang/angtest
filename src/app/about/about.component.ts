import {Component, ElementRef, Input, ViewChild, AfterViewInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {
  @Input() text = '';
  @ViewChild('about') about: ElementRef;
  baseWith = 1024;

  constructor() {

  }

  ngAfterViewInit() {
    this.onResize({})
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerWidth > 1024) {
      this.baseWith = window.innerWidth;
    }
    this.about.nativeElement.style.marginLeft = this.baseWith / 2 - this.about.nativeElement.offsetWidth / 2 + 'px';
  }
}
