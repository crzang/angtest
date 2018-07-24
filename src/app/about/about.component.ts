import {Component, ElementRef, Input, ViewChild, AfterViewInit} from '@angular/core';

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
    if (window.innerWidth > 1024) {
      this.baseWith = window.innerWidth;
    }
  }

  ngAfterViewInit() {
    this.about.nativeElement.style.marginLeft = this.baseWith / 2 - this.about.nativeElement.offsetWidth / 2 + 'px';
  }

}
