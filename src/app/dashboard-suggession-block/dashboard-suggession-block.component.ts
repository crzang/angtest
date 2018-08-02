import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-suggession-block',
  templateUrl: './dashboard-suggession-block.component.html',
  styleUrls: ['./dashboard-suggession-block.component.css']
})
export class DashboardSuggessionBlockComponent implements AfterViewInit {
  @ViewChild('block') block: ElementRef;
  constructor() { }

  ngAfterViewInit() {
    const mainWidth = this.block.nativeElement.offsetWidth / 2;
    const parentWidth = this.block.nativeElement.parentElement.offsetWidth / 2;
    const newMargin = parentWidth - mainWidth
    if (newMargin > 0) {
      this.block.nativeElement.style.marginLeft = newMargin + 'px';
    }
  }

}