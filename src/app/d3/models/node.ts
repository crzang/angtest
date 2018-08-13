import APP_CONFIG from './app.config';

export class Node implements d3.SimulationNodeDatum {
  // optional - defining optional implementation properties - required for relevant typing assistance
  index?: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;

  id: string;
  linkCount = 0;
  name: string;
  value: string;
  _color: string;
  weight: number;

  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.value = data.value;
    this._color = data.color;
    this.weight = data.weight;
  }

  normal = () => {
    return this.weight; //Math.sqrt(this.linkCount / APP_CONFIG.N);
  }

  get r() {
    return 300 * this.normal() + 10;
  }

  get fontSize() {
    return (30 * this.normal() + 10) + 'px';
  }

  get color() {
    const index = Math.floor(APP_CONFIG.SPECTRUM.length * this.normal());
    return this._color
  }
}
