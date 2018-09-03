import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-main-banner-block',
  templateUrl: './dashboard-banner-block.component.html',
  styleUrls: ['./dashboard-banner-block.component.css']
})
export class DashboardBannerBlockComponent implements AfterViewInit {
  @ViewChild('block') block: ElementRef;
  constructor() { }

  ngAfterViewInit() {
    this.onResize({});
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const mainWidth = this.block.nativeElement.offsetWidth / 2;
    const parentWidth = this.block.nativeElement.parentElement.offsetWidth / 2;
    const newMargin = parentWidth - mainWidth;
    if (newMargin > 0) {
      this.block.nativeElement.style.marginLeft = newMargin + 'px';
    }
  }
}
