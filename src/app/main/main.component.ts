import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  baseHeight = 768;
  baseWidth = '1024';
  mainHeight = this.baseHeight + 'px';

  constructor() { }

  ngOnInit() {


  }
  onResize(event) {
    if (window.innerHeight > 768) {
      this.baseHeight = window.innerHeight;
    }
    if (window.innerWidth > 1024) {
      this.baseWidth = (window.innerWidth - 210) + 'px';
    }
    this.mainHeight = (this.baseHeight - 21 ) + 'px';
  }
}
