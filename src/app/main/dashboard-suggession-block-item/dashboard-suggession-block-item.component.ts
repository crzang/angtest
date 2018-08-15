import {Component, OnInit, Input, ElementRef, ViewChild, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-dashboard-suggession-block-item',
  templateUrl: './dashboard-suggession-block-item.component.html',
  styleUrls: ['./dashboard-suggession-block-item.component.css']
})
export class DashboardSuggessionBlockItemComponent implements OnInit , AfterViewInit {
  @ViewChild('main') main: ElementRef;
  @ViewChild('footer') footer: ElementRef;
  @ViewChild('textBlock') textBlock: ElementRef;
  @Input() icon = '';
  @Input() text = '';
  @Input() background = '';
  @Input() linkText = '';

  constructor() { }

  ngOnInit() {
    if (this.background !== '') {
      this.main.nativeElement.style.background = this.background;
    }

  }

  ngAfterViewInit() {
    const marginTop = 240 - this.textBlock.nativeElement.clientHeight ;
    this.footer.nativeElement.style.marginTop = marginTop + 'px';
  }
}
