import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-fora-logo',
  templateUrl: './fora-logo.component.html',
  styleUrls: ['./fora-logo.component.css']
})
export class ForaLogoComponent implements AfterViewInit {
  @Input() width = '0';
  @Input() scale = 1;
  @ViewChild('mainImg') mainImg: ElementRef;

  logoOffset = '0px';
  constructor() {

  }

  ngAfterViewInit() {
    this.onResize({});
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    let baseWidth = 1024;
    if (window.innerWidth > 1024) {
      baseWidth = window.innerWidth;
    }
    if (this.width !== '0') {
      baseWidth = parseFloat(this.width);
    }
    this.logoOffset = baseWidth / 2 - 188 / 2 + 'px';
    this.mainImg.nativeElement.style.transform = 'scale(' + this.scale + ')';
  }
}
