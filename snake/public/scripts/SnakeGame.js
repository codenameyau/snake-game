import Snake from './Snake';
import Food from './Food';

export default class SnakeGame {

  constructor (canvasId = 'snake-game', options = {}) {
    // Canvas and rendering properties.
    this.canvas = document.querySelector(canvasId);
    this.ctx = this.canvas.getContext('2d');

    // Game internals and options.
    this.width = options.width || 40;
    this.height = options.height || 40;
    this.cellSize = Math.floor(this.canvas.width / this.width);
    this.cellPadded = this.cellSize - 2;

    // Game entities and mechanics.
    this.snake = null;
    this.food = null;
    this.score = 0;
  }

  render () {
    this.renderSnake();
    this.renderFood();
  }

  renderSnake () {
    this.snake.segments.forEach((segment, i) => {
      this.ctx.fillStyle = i ? this.snake.color : this.snake.headColor;
      const posX = segment[0] * this.cellSize;
      const posY = segment[1] * this.cellSize;
      this.ctx.fillRect(posX, posY, this.cellPadded, this.cellPadded);
    });
  }

  renderFood () {
    this.ctx.fillStyle = this.food.color;
    const posX = this.food.x * this.cellSize;
    const posY = this.food.y * this.cellSize;
    this.ctx.fillRect(posX, posY, this.cellPadded, this.cellPadded);
  }

  start () {
    this.render();
  }

  resetScore () {
    this.score = 0;
  }

  newGame () {
    this.spawnSnake();
    this.spawnFood();
    this.resetScore();
    this.start();
  }

  spawnSnake () {
    this.snake = new Snake(5, 2, 1, 2);
  }

  spawnFood () {
    const emptyCell = this.getRandomEmptyCell();
    this.food = new Food(emptyCell[0], emptyCell[1]);
  }

  getRandomEmptyCell () {
    return [8, 8];
  }

  isEmptyCell () {
    return true;
  }

}
