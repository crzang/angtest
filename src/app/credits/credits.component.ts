import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.css']
})
export class CreditsComponent implements OnInit {
  @Input() width = '1024px';
  @Input() height = '768px';
  constructor() { }

  ngOnInit() {
  }

}
