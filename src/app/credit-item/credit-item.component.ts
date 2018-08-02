import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-credit-item',
  templateUrl: './credit-item.component.html',
  styleUrls: ['./credit-item.component.css']
})
export class CreditItemComponent implements OnInit {
  @Input() name = '';
  @Input() payed = '';
  @Input() endDate = '';
  @Input() value = '';
  @Input() percent = '';
  fPercent = 0;
  constructor() {
    this.fPercent = parseFloat(this.payed)/100;
  }

  ngOnInit() {
  }

}
