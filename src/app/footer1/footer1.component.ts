import {Component, ViewChild, AfterViewInit, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'app-footer1',
  templateUrl: './footer1.component.html',
  styleUrls: ['./footer1.component.css']
})
export class Footer1Component implements AfterViewInit {
  @ViewChild('footer') footer: ElementRef;
  @ViewChild('helpToNewAccount') helpToNewAccount: ElementRef;
  @ViewChild('signUp') signUp: ElementRef;
  @ViewChild('helpdesk') helpdesk: ElementRef;
  @Input() route = '/regChoice';
  @Input() mainTitle = 'Зарегистрироваться';
  baseHeight = 768;
  baseWith = 1024;

  constructor() {
    if (window.innerHeight > 768) {
      this.baseHeight = window.innerHeight;
    }
    if (window.innerWidth > 1024) {
      this.baseWith = window.innerWidth;
    }
  }

  ngAfterViewInit() {
    this.footer.nativeElement.style.left = this.baseWith / 2 - this.footer.nativeElement.offsetWidth / 2 + 'px';
    const lostPasswordPos = this.baseHeight - this.footer.nativeElement.offsetHeight - 50;
    this.footer.nativeElement.style.top = lostPasswordPos + 'px';
  }

}
