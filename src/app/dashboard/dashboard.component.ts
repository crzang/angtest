import {Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router, ActivatedRoute, NavigationEnd, NavigationStart} from '@angular/router';
import {LeftMenuComponent} from '../left-menu/left-menu.component';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild('header') header: ElementRef;
  @ViewChild('body') body: ElementRef;
  @ViewChild('leftpartOne') leftpartOne: ElementRef;
  @ViewChild('container') container: ElementRef;
  @ViewChild('routeContainer') routeContainer: ElementRef;
  @ViewChild('leftMenu') leftMenu: LeftMenuComponent;
  baseHeight = '768px';
  baseWidth = '1024px';
  mainHeight = this.baseHeight + 'px';
  visibility = 'hidden';
  visibilityMain = 'hidden';
  routeLevel = 0;
  leftPartTwoClass = 'leftPartTwo hidden';
  leftPart3Class = 'left3Two hidden';
  ANIMATION_DELAY = 10;
  env = environment;

  constructor(private router: Router) {
    router.events.subscribe((r: any) => {
        if (r instanceof NavigationStart && r.url && this.body) {
          /*this.container.nativeElement.className = 'hideContainer';
setTimeout(() => {
  this.router.navigateByUrl('/' + targetBlock);
  this.leftpartOne.nativeElement.className = 'leftPart ' + targetBlock;
  this.container.nativeElement.className = 'showContainer';
}, 1000);*/
          this.container.nativeElement.className = 'hideContainer';
          this.routeContainer.nativeElement.className = 'hideRoute';
          setTimeout(() => {
            if(!this.body){
              return
            }
            this.container.nativeElement.className = 'showContainer';
            this.routeContainer.nativeElement.className = 'showRoute';
            const urlParts = r.url.split('/');
              this.leftMenu.visible(false);
              if (urlParts.length === 2) {
                this.routeLevel = 1;
                this.leftpartOne.nativeElement.className = 'leftPart ' + urlParts[1];
                this.leftPartTwoClass = 'leftPartTwo hidden';
                this.visibility = 'visible';
                this.leftPart3Class = 'left3Two hidden';
              } else if (urlParts.length === 3) {
                this.routeLevel = 2;

                this.visibility = 'hidden';
                const leftPartTwoClass = urlParts[1];
                this.leftPartTwoClass = 'leftPartTwo show ' + leftPartTwoClass;
                this.leftPart3Class = 'left3Two hidden';
              } else if (urlParts.length === 4) {
                this.routeLevel = 3;
                this.visibility = 'hidden';
                const leftPartTwoClass = urlParts[1];
                this.leftPartTwoClass = 'leftPartTwo liteHide' + leftPartTwoClass;
                this.leftPart3Class = 'left3Two show ' + leftPartTwoClass + '_3';
                if ((urlParts[2] === 'card2card' || urlParts[2] === 'pay2bank' || urlParts[2] === 'pay2org') && urlParts[3] === 'confirm') {
                  this.leftMenu.visible(true);
                }
              } else if (urlParts.length === 5) {
                this.leftMenu.visible(true);
              }
              if (urlParts.length > 1) {
                if (urlParts[1] === 'actionsAndPay') {
                  this.visibility = 'hidden';
                }
              }

          }, this.ANIMATION_DELAY);
        }
      }
    );
  }

  ngOnInit() {
    let bHeight = 768;
    if (window.innerHeight > 768) {
      bHeight = window.innerHeight;
    }
    if (window.innerWidth > 1024) {
      this.baseWidth = (window.innerWidth - 230) + 'px';
    }
    this.baseHeight = bHeight + 'px';
    this.mainHeight = (bHeight - 21) + 'px';
    this.baseHeight = bHeight + 'px';
  }

  onClick = (e, targetBlock) => {
    this.clearActive();
    e.target.className = 'active';
    this.router.navigateByUrl('/' + targetBlock);



  }

  clearActive() {
    const children = this.header.nativeElement.children;
    for (let i = 0; i < children.length; ++i) {
      children.item(i).className = 'notactive';
    }
  }

  ngAfterViewInit() {
    /* setTimeout(() => {
       if (this.routeLevel < 2) {
         this.visibility = 'visible';
       }
     }, 1000);*/
  }
}
