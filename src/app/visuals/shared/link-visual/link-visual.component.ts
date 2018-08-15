import { Component, Input } from '@angular/core';
import { Link } from '../../../d3';

@Component({
  selector: '[linkVisual]',
  template: `
    <svg:line
        class="link"
        [attr.x1]="getX(link.source)"
        [attr.y1]="getY(link.source)"
        [attr.x2]="getX(link.target)"
        [attr.y2]="getY(link.target)"
    ></svg:line>
  `,
  styleUrls: ['./link-visual.component.css']
})
export class LinkVisualComponent  {
  @Input('linkVisual') link: Link;

  getX(node) {
    return node.x;
  }
  getY(node) {
    return node.y;
  }
}
