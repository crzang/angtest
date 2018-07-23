import {Component, ElementRef, ViewChild, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-reg-choice',
  templateUrl: './reg-choice.component.html',
  styleUrls: ['./reg-choice.component.css']
})
export class RegChoiceComponent implements AfterViewInit {
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
