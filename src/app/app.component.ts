import {Component, ViewChild, AfterViewInit, ElementRef} from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  baseHeight = 768;
  baseWith = 1024;
  mainHeight = this.baseHeight + 'px';
  constructor() {
    if (window.innerHeight > 768) {
      this.baseHeight = window.innerHeight;
    }
    if (window.innerWidth > 1024) {
      this.baseWith = window.innerWidth;
    }
    this.mainHeight = this.baseHeight + 'px';
  }




}
