import {Component, OnInit, DoCheck, Input, ViewChild, AfterViewInit, ElementRef} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements AfterViewInit, DoCheck, OnInit {
  @Input() label = '';
  @Input() border = false;
  @Input() useWindowWidth = true;
  @Input() width = '250px';
  @Input() enabled = true;
  @Input() underlined = false;
  @Input() bgColor;
  @Input() color;
  @Input() route = '';

  @ViewChild('main') main: ElementRef;
  baseWidth = 1024;
  extStyleNames = '';

  constructor() {

  }

  ngOnInit() {
    if (this.useWindowWidth === true) {
      if (window.innerWidth > 1024) {
        this.baseWidth = window.innerWidth;
      }
    } else {
      this.baseWidth = this.main.nativeElement.parentElement.parentElement.innerWidth;
    }
  }

  ngDoCheck() {
    this.extStyleNames = '';
    if (this.border === true || this.border == 'true') {
      this.extStyleNames += ' withBorder';
    }
    if (this.enabled === true || this.enabled === 'true') {
      this.extStyleNames += ' labeledButtonEnabled';
    } else {
      this.extStyleNames += ' labeledButtonDisabled';
    }
    if (this.underlined) {
      this.extStyleNames += ' underlined';
    }
    if (this.bgColor) {
      this.main.nativeElement.style.background = this.bgColor;
    }
    if (this.color) {
      this.main.nativeElement.style.color = this.color;
    }
  }

  ngAfterViewInit() {
    this.main.nativeElement.style.marginLeft = this.baseWidth / 2 - this.main.nativeElement.offsetWidth / 2 + 'px';
    this.main.nativeElement.style.width = this.width;
  }

}
