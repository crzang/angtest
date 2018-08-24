import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-simple-button',
  templateUrl: './simple-button.component.html',
  styleUrls: ['./simple-button.component.css']
})
export class SimpleButtonComponent implements OnInit {
  @Input() label = '';
  constructor() { }

  ngOnInit() {
  }

}
