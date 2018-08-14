import {Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';
import {SelectItem} from 'primeng/api';
import {Node, Link} from '../d3';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {
  @ViewChild('main') main: ElementRef;
  orders: SelectItem[];
  nodes: Node[] = [];
  links: Link[] = [];
  fullData: [];
  constructor(private router: Router) {
    this.orders = [
      {label: 'За месяц', value: 1},
      {label: 'За неделю', value: 2},
    ];
    this.fullData = [
      {name: 'Декабрь', value: '73 028 руб'},
      {name: 'Ноябрь', value: '84 028 руб'},
      {name: 'Октябрь', value: '55 628 руб', selected: true},
      {name: 'Сентябрь', value: '74 028 руб'},
      {name: 'Август', value: '70 0635 руб'},
      {name: 'Июль', value: '55 628 руб'},
      {name: 'Июнь', value: '54 028 руб'},
    ];
    const N = 100,
      getIndex = number => number - 1;
    const total = 31800 + 24567 + 14500;
    let routeHandler = () => {
      router.navigateByUrl('item0');
    };
    /** constructing the nodes array */
    this.nodes.push(new Node({id: 1, name: 'Снято наличными', value: '31 800,00 руб', color: '#2C3E50', weight: 31800 / total}, routeHandler));
    this.nodes.push(new Node({id: 2, name: 'Еда, продукты питания', value: '24 567,07 руб', color: '#16A085', weight: 24567 / total}, routeHandler));
    this.nodes.push(new Node({id: 3, name: 'Развленчение', value: '14 500,00 руб', color: '#FFAA00', weight: 14500 / total}, routeHandler));

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

  ngOnInit() {
    const clientWidth = window.innerWidth;
    const clientHeight = window.innerHeight;
    this.main.nativeElement.style.height = clientHeight - 50 + 'px';
    this.main.nativeElement.style.width = clientWidth - 210 - clientWidth * 0.2 + 'px';
  }

  getStyleForeItem(item) {
    let className = 'item ';
    if (item.selected) {
      className = className + 'selected';
    }
    return className;
  }
}
