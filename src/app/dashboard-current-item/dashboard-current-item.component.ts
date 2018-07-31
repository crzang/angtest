import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-current-item',
  templateUrl: './dashboard-current-item.component.html',
  styleUrls: ['./dashboard-current-item.component.css']
})
export class DashboardCurrentItemComponent implements OnInit {

  @Input() name = '';
  @Input() icon = '';
  @Input() nameIcon = 'assets/img/mock.png';
  @Input() number = '';
  @Input() value = '';

  constructor() { }

  ngOnInit() {
  }

}
