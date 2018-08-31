import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-templ-item',
  templateUrl: './template-item.component.html',
  styleUrls: ['./template-item.component.css']
})
export class TemplateItemComponent implements OnInit {

  @Input() name = '';
  @Input() icon = '';
  @Input() nameIcon = 'assets/img/mock.png';
  @Input() number = '';
  @Input() value = '';
  @Input() isFirst = false;
  @Input() isLast = false;
  constructor() { }

  ngOnInit() {
  }

}
