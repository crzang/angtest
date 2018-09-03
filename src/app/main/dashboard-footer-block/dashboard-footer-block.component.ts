import { Component, AfterViewInit, ElementRef, ViewChild,HostListener } from '@angular/core';

@Component({
  selector: 'app-main-footer-block',
  templateUrl: './dashboard-footer-block.component.html',
  styleUrls: ['./dashboard-footer-block.component.css']
})
export class DashboardFooterBlockComponent implements AfterViewInit {
  @ViewChild('main') main: ElementRef;
  @ViewChild('info') info: ElementRef;
  @ViewChild('info2') info2: ElementRef;
  @ViewChild('path3') path3: ElementRef;
  @ViewChild('path4') path4: ElementRef;

  baseWidth = 900;
  constructor() {

  }

  ngAfterViewInit() {
    this.onResize({})
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const clientWidth = this.main.nativeElement.parentElement.parentElement.clientWidth;
    const marginLeft = (clientWidth / 2 - 480 - clientWidth * 0.1) + 'px';
    this.info.nativeElement.style.marginLeft = marginLeft;
    this.info2.nativeElement.style.marginLeft = marginLeft;
  }

}
