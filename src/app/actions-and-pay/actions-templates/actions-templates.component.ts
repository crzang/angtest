import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actions-templates',
  templateUrl: './actions-templates.component.html',
  styleUrls: ['./actions-templates.component.css']
})
export class ActionsTemplatesComponent implements OnInit {
  templates = [];
  constructor() {
    this.templates = [
      {image: 'assets/img/templ-alpha.png', name: 'Моя альфа', lastUse: 'Последний 20 февраля', value: '4500 '},
      {image: 'assets/img/templ-alpha.png', name: 'Моя альфа', lastUse: 'Последний 20 февраля', value: '4500 '},
      {image: 'assets/img/templ-alpha.png', name: 'Моя альфа', lastUse: 'Последний 20 февраля', value: '4500 '},
      {image: 'assets/img/templ-alpha.png', name: 'Моя альфа', lastUse: 'Последний 20 февраля', value: '4500 '}
    ];
  }

  ngOnInit() {
  }

}
