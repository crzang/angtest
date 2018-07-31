import { Component, OnInit, Input,ElementRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard-suggession-block-item',
  templateUrl: './dashboard-suggession-block-item.component.html',
  styleUrls: ['./dashboard-suggession-block-item.component.css']
})
export class DashboardSuggessionBlockItemComponent implements OnInit {
  @ViewChild('main') main: ElementRef;
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

}
