export default class Food {
  constructor (x, y, options = {}) {
    this.entity = 'Food';
    this.x = x;
    this.y = y;
    this.value = options.value || 1;
    this.color = options.color || '#cdb92b';
  }
}
