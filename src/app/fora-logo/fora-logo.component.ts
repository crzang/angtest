import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fora-logo',
  templateUrl: './fora-logo.component.html',
  styleUrls: ['./fora-logo.component.css']
})
export class ForaLogoComponent implements OnInit {

  logoOffset = '0px';
  constructor() {
    let baseWidth = 1024;
    if (window.innerWidth > 1024) {
      baseWidth = window.innerWidth;
    }
    this.logoOffset = baseWidth / 2 - 188 / 2 + 'px';
  }

  ngOnInit() {
  }

}
