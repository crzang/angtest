import {Component, AfterViewInit, Input, ViewChild, ElementRef,HostListener} from '@angular/core';
import {SelectItem} from 'primeng/api';
import {Node, Link} from '../d3';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements AfterViewInit {
  @ViewChild('main') main: ElementRef;
  orders: SelectItem[];
  nodes: Node[] = [];
  links: Link[] = [];
  fullData=[];
  constructor(private router: Router) {
    this.orders = [
      {label: 'За месяц', value: 1},
      {label: 'За неделю', value: 2},
    ];
    this.fullData = [
      {name: 'Декабрь', value: '73 028 руб',selected: false},
      {name: 'Ноябрь', value: '84 028 руб',selected: false},
      {name: 'Октябрь', value: '55 628 руб', selected: true},
      {name: 'Сентябрь', value: '74 028 руб',selected: false},
      {name: 'Август', value: '70 0635 руб',selected: false},
      {name: 'Июль', value: '55 628 руб',selected: false},
      {name: 'Июнь', value: '54 028 руб',selected: false},
    ];
    const N = 100,
      getIndex = number => number - 1;
    const total = 31800 + 24567 + 14500+5650+9600+7900;

    /** constructing the nodes array */
    this.nodes.push(new Node({id: 1, name: 'Снято наличными', value: '31 800,00 руб', color: '#2C3E50', weight: 31800 / total}));
    this.nodes.push(new Node({id: 2, name: 'Еда, продукты питания', value: '24 567,07 руб', color: '#16A085', weight: 24567 / total}));
    this.nodes.push(new Node({id: 3, name: 'Развленчение', value: '14 500,00 руб', color: '#FFAA00', weight: 14500 / total}));
    this.nodes.push(new Node({id: 4, name: 'Мобильная связь', value: '5650,00 руб', color: 'rgb(74,193,226)', weight: 15650 / total}));
    this.nodes.push(new Node({id: 5, name: 'Коммунальные услуги', value: '9 600,07 руб', color: 'rgb(239,58,127)', weight: 11600 / total}));
    this.nodes.push(new Node({id: 6, name: 'Межбанковские  переводы', value: '7 900,00 руб', color: 'rgb(141,161,248)', weight: 17900 / total}));

    for (let i = 1; i <= this.nodes.length; i++) {
      for (let m = 2; i * m <= this.nodes.length; m++) {
        // increasing connections toll on connecting nodes
        this.nodes[getIndex(i)].linkCount++;
        this.nodes[getIndex(i * m)].linkCount++;

        // connecting the nodes before starting the simulation
        this.links.push(new Link(i, i * m));
      }
    }
  }

  ngAfterViewInit() {
    this.onResize({})
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const clientWidth = window.innerWidth;
    const clientHeight = window.innerHeight;
    this.main.nativeElement.style.height = clientHeight - 50 + 'px';
    this.main.nativeElement.style.width = clientWidth - 300 + 'px';
  }
  getStyleForeItem(item) {
    let className = 'item ';
    if (item.selected) {
      className = className + 'selected';
    }
    return className;
  }
}
