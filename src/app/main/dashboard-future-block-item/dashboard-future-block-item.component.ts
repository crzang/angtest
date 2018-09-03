import { Component, OnInit, Input, ViewChild, ElementRef, HostListener, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-future-block-item',
  templateUrl: './dashboard-future-block-item.component.html',
  styleUrls: ['./dashboard-future-block-item.component.css']
})
export class DashboardFutureBlockItemComponent implements OnInit, AfterViewInit {
  @ViewChild('main') main: ElementRef;
  @ViewChild('table') table: ElementRef;

  @Input() icon = '';
  @Input() title = '';
  @Input() description = '';
  @Input() value = '';
  @Input() date = '';
  @Input() background = 'white';
  @Input() color = 'black';
  nameStyle = 'name';

  constructor() { }

  ngOnInit() {
    if (this.background !== 'white') {
      this.nameStyle = '';
      this.main.nativeElement.style.background = this.background;
    }

  }

  ngAfterViewInit() {
    this.onResize({});
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.table.nativeElement.style.width = (this.main.nativeElement.offsetWidth - 100) + 'px';
  }
}
