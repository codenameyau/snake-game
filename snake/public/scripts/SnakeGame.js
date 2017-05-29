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
    this.ctx.beginPath();
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(300, 150);
    this.ctx.strokeStyle = this.snake.color;
    this.ctx.stroke();
  }

  renderFood () {

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
    this.snake = new Snake(1, 1, 5, 1);
    this.snake = new Snake(1, 1, 5, 1);
    this.snake = new Snake(1, 1, 5, 1);
    this.snake = new Snake(1, 1, 5, 1);
  }

  spawnFood () {
    const emptyCell = this.getEmptyCell();
    this.food = new Food(emptyCell[0], emptyCell[1]);
  }

  getEmptyCell () {
    // By definition an empty square is a non-snake segment occupied cell.
    return [0, 0];
  }

  isEmptyCell () {
    return true;
  }

}
