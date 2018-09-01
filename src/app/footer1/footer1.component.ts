import {Component, ViewChild, AfterViewInit, ElementRef, Input, HostListener} from '@angular/core';

@Component({
  selector: 'app-footer1',
  templateUrl: './footer1.component.html',
  styleUrls: ['./footer1.component.css']
})
export class Footer1Component implements AfterViewInit {
  @ViewChild('footer') footer: ElementRef;

  @Input() route = '/regChoice';
  @Input() mainTitle = 'Зарегистрироваться';
  @Input() secondTitle = 'Нет аккаунта?';

  baseHeight = 768;
  secondTitleWidth='768px';


  constructor() {

  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerHeight > 768) {
      this.baseHeight = window.innerHeight;
    }
    this.secondTitleWidth=window.innerWidth+"px"
    const lostPasswordPos = this.baseHeight - this.footer.nativeElement.offsetHeight - 50;
    this.footer.nativeElement.style.top = lostPasswordPos + 'px';
  }
  ngAfterViewInit() {
    this.onResize({})
  }

}
