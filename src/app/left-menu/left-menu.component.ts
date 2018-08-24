import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit, AfterViewInit {
  @ViewChild('footer') footer: ElementRef;
  @ViewChild('main') main: ElementRef;
  @Input() background = 'url(\'../../assets/img/cards-rectangle-17-copy-4.png\') round';
  baseHeight = 768;
  mainHeight = this.baseHeight + 'px';
  mainClass = 'link';
  actionsClass = 'link';
  partnerClass = 'link';
  banksClass = 'link';

  constructor(private router: Router) {
    router.events.subscribe((r: any) => {
        if (r.url) {
          const urlParts = r.url.split('/');
          if (r.shouldActivate) {
            if (urlParts.length > 1) {
              this.mainClass = 'link inactive';
              this.actionsClass = 'link inactive';
              this.partnerClass = 'link inactive';
              this.banksClass = 'link inactive';

              if (urlParts[1] === 'actionsAndPay') {
                this.actionsClass = 'link active';
              } else if (urlParts[1] === 'partners') {
                this.partnerClass = 'link active';
              } else if (urlParts[1] === 'banks') {
                this.banksClass = 'link active';
              } else if (urlParts[1] !== 'account') {
                this.mainClass = 'link active';
              }
            }
          }
        }
      }
    );
  }
  onResize(event) {
    if (window.innerHeight > 768) {
      this.baseHeight = window.innerHeight;
    }
    this.mainHeight = this.baseHeight + 'px';
  }
  visible(vis) {
    this.main.nativeElement.hidden = vis;
  }
  ngOnInit() {
    this.main.nativeElement.style.background = this.background;
  }

  ngAfterViewInit() {
    const lostPasswordPos = this.baseHeight - this.footer.nativeElement.offsetHeight - 50;
    this.footer.nativeElement.style.top = lostPasswordPos + 'px';
  }
}
