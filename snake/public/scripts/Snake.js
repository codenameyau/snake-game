export default class Snake {

  constructor (x1, y1, x2, y2, options = {}) {
    this.startingPosition = [x1, y1, x2, y2];
    this.headColor = options.headColor || '#ec2626';
    this.color = options.color || '#52ee38';
    this.segments = [];
    this.direction = null;
    this.createSegments(x1, y1, x2, y2);
  }

  // Segments are created from head first, tail last, meaning that:
  // - The first element in segments is the head--the last element is the tail.
  // - (x1, y1) is the head and will be added first.
  createSegments (x1, y1, x2, y2) {
    if (x1 !== x2 && y1 !== y2) {
      y1 = y2; // Collapse matrix into a vector.
    }

    if (x1 < x2) {
      this.direction = 'left';
      for (let i = x1; i <= x2; i++) {
        this.segments.push([i, y1]);
      }
    }

    else if (x1 > x2) {
      this.direction = 'right';
      for (let i = x1; i >= x2; i--) {
        this.segments.push([i, y1]);
      }
    }

    else if (y1 < y2) {
      this.direction = 'up';
      for (let i = y1; i <= y2; i++) {
        this.segments.push([x1, i]);
      }
    }

    else if (y1 > y2) {
      this.direction = 'down';
      for (let i = y1; i >= y2; i--) {
        this.segments.push([x1, i]);
      }
    }
  }

}
