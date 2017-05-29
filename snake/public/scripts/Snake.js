export default class Snake {

  constructor (x1, y1, x2, y2, options = {}) {
    this.start = [x1, y1, x2, y2];
    this.segments = [];
    this.createSegments(x1, y1, x2, y2);
    this.direction = this.computeDirection(x1, y1, x2, y2);
    this.color = options.color || '#8df27c';
  }

  createSegments (x1, y1, x2, y2) {
    for (let i = x1; i <= x2; i++) {
      for (let j = y1; j <= y2; j++) {
        this.segments.push([i, j]);
      }
    }
  }

  computeDirection (x1, y1, x2, y2) {

  }
}
