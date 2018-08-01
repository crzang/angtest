import { Component, AfterViewInit,ElementRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard-footer-block',
  templateUrl: './dashboard-footer-block.component.html',
  styleUrls: ['./dashboard-footer-block.component.css']
})
export class DashboardFooterBlockComponent implements AfterViewInit {
  @ViewChild('main') main: ElementRef;
  @ViewChild('path1') path1: ElementRef;
  @ViewChild('path2') path2: ElementRef;
  @ViewChild('path3') path3: ElementRef;
  @ViewChild('path4') path4: ElementRef;

  baseWidth = 900;
  constructor() {

  }

  ngAfterViewInit() {
    let clientWidth = this.main.nativeElement.parentElement.parentElement.clientWidth;
    if (clientWidth > 900) {
      this.main.nativeElement.style.width = clientWidth + "px";
      this.path1.nativeElement.style.width = clientWidth + "px";
      this.path2.nativeElement.style.width = clientWidth + "px";
      this.path3.nativeElement.style.width = (clientWidth-200) + "px";
      this.path4.nativeElement.style.left = (clientWidth-100) + "px";
    }
  }

}
