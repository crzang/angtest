import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit, AfterViewInit {
  @ViewChild('footer') footer: ElementRef;
  baseHeight = 768;
  mainHeight = this.baseHeight + 'px';

  constructor() {
    if (window.innerHeight > 768) {
      this.baseHeight = window.innerHeight;
    }
    this.mainHeight = this.baseHeight + 'px';
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const lostPasswordPos = this.baseHeight - this.footer.nativeElement.offsetHeight - 50;
    this.footer.nativeElement.style.top = lostPasswordPos + 'px';
  }
}
