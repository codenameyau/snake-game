export default class Food {

  constructor (x, y, options = {}) {
    this.x = x;
    this.y = y;
    this.value = options.value || 1;
    this.color = options.color || 'red';
  }

}
