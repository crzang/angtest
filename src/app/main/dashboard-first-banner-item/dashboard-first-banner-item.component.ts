import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard-first-banner-item',
  templateUrl: './dashboard-first-banner-item.component.html',
  styleUrls: ['./dashboard-first-banner-item.component.css']
})
export class DashboardFirstBannerItemComponent implements OnInit {
  @Input() icon = '';
  @Input() extraIcon = '';
  @Input() iconDetails = '';
  @Input() amount = 0;
  @Input() text = '';
  @Input() button0 = '';
  @Input() button1 = '';
  @Input() color = 'black';
  @Input() background = 'white';
  @ViewChild('secondButton') secondButton: ElementRef;
  @ViewChild('value') value: ElementRef;

  hideExtra = true;
  constructor() {

  }


  ngOnInit() {
    if (this.extraIcon !== '' ){
      this.hideExtra = false;
    }
      this.secondButton.nativeElement.hidden = this.button1 === '';
      this.value.nativeElement.hidden = this.amount === 0;
  }

}
