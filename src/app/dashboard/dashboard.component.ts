import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild('header') header: ElementRef;
  @ViewChild('main') main: ElementRef;
  @ViewChild('cards') cards: ElementRef;
  @ViewChild('accounts') accounts: ElementRef;
  @ViewChild('credits') credits: ElementRef;
  baseHeight = '768px';
  baseWidth = '1024px';
  mainHeight = this.baseHeight + 'px';
  visibility = 'hidden';
  visibilityMain = 'hidden';
  visibilityCard = 'hidden';
  visibilityAccounts = 'hidden';
  visibilityCredits = 'hidden';
  constructor() {


  }
  ngOnInit() {
    if (window.innerHeight > 768) {
      this.baseHeight = window.innerHeight;
    }
    if (window.innerWidth > 1024) {
      this.baseWidth = (window.innerWidth - 230) + 'px';
    }
    this.mainHeight = (this.baseHeight - 21 ) + 'px';
    this.baseHeight = this.baseHeight + 'px';
  }

  onClick = (e, targetBlock) => {
    this.clearActive();
    e.target.className = 'active';
    if (targetBlock !== 'main' && this.main.nativeElement.className === 'showContainer') {
      this.main.nativeElement.className = 'hideContainer';
    }
    if (targetBlock !== 'cards' && this.cards.nativeElement.className === 'showContainer') {
      this.cards.nativeElement.className = 'hideContainer';
    }
    if (targetBlock !== 'accounts' && this.accounts.nativeElement.className === 'showContainer') {
      this.accounts.nativeElement.className = 'hideContainer';
    }
    if (targetBlock !== 'credits' && this.credits.nativeElement.className === 'showContainer') {
      this.credits.nativeElement.className = 'hideContainer';
    }
    setTimeout(() => {
      if (targetBlock === 'cards') {
        this.visibilityCard = 'visible';
        this.cards.nativeElement.className = 'showContainer';
      } else if (targetBlock === 'main') {
        this.visibilityMain = 'visible';
        this.main.nativeElement.className = 'showContainer';
      } else if (targetBlock === 'accounts') {
        this.visibilityAccounts = 'visible';
        this.accounts.nativeElement.className = 'showContainer';
      } else if (targetBlock === 'credits') {
        this.visibilityCredits = 'visible';
        this.credits.nativeElement.className = 'showContainer';
      }
    }, 500);


  }
  clearActive() {
    const children = this.header.nativeElement.children;
    for (let i = 0; i < children.length; ++i) {
      children.item(i).className = 'notactive';
    }
  }
  ngAfterViewInit() {
    setTimeout(() => {
      setTimeout(() => {
        this.visibilityMain = 'visible';
      }, 500);
      this.visibility = 'visible';
    }, 1000);
  }
}
