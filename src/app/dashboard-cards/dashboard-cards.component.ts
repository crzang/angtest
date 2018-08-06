import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-cards',
  templateUrl: './dashboard-cards.component.html',
  styleUrls: ['./dashboard-cards.component.css']
})
export class DashboardCardsComponent implements OnInit,AfterViewInit {
  @ViewChild('main') footer: ElementRef;
  baseHeight = 768;
  baseWidth = '1024';
  mainHeight = this.baseHeight + 'px';
  visibility = 'hidden';
  constructor() { }

  ngOnInit() {
    if (window.innerHeight > 768) {
      this.baseHeight = window.innerHeight;
    }
    if (window.innerWidth > 1024) {
      this.baseWidth = (window.innerWidth - 230) + 'px';
    }
    this.mainHeight = (this.baseHeight - 21 ) + 'px';
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.visibility = 'visible';
    }, 1000);
  }
}
