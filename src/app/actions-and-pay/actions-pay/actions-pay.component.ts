import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-actions-pay',
  templateUrl: './actions-pay.component.html',
  styleUrls: ['./actions-pay.component.css']
})
export class ActionsPayComponent implements OnInit {
  @Input() name = '';
  @Input() items = [];
  constructor() {
  }

  ngOnInit() {
  }

}
