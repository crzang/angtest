import {Component, ViewChild, AfterViewInit, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'app-footer1',
  templateUrl: './footer1.component.html',
  styleUrls: ['./footer1.component.css']
})
export class Footer1Component implements AfterViewInit {
  @ViewChild('footer') footer: ElementRef;
  @Input() route = '/regChoice';
  @Input() mainTitle = 'Зарегистрироваться';
  baseHeight = 768;

  constructor() {
    if (window.innerHeight > 768) {
      this.baseHeight = window.innerHeight;
    }
  }

  ngAfterViewInit() {
    const lostPasswordPos = this.baseHeight - this.footer.nativeElement.offsetHeight - 50;
    this.footer.nativeElement.style.top = lostPasswordPos + 'px';
  }

}
