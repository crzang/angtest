import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild('header') header: ElementRef;
  @ViewChild('leftpart') leftpart: ElementRef;
  @ViewChild('container') container: ElementRef;
  baseHeight = '768px';
  baseWidth = '1024px';
  mainHeight = this.baseHeight + 'px';
  visibility = 'hidden';
  visibilityMain = 'hidden';
  constructor(private router: Router) {


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
    this.container.nativeElement.className = 'hideContainer';
    setTimeout(() => {
      this.router.navigateByUrl('/' + targetBlock);
      this.leftpart.nativeElement.className = 'leftPart ' + targetBlock;
      this.container.nativeElement.className = 'showContainer';
    }, 1000);


  }
  clearActive() {
    const children = this.header.nativeElement.children;
    for (let i = 0; i < children.length; ++i) {
      children.item(i).className = 'notactive';
    }
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.visibility = 'visible';
    }, 1000);
  }
}
