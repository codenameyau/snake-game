'use strict';

/********************************************************************
* SNAKE GAME CLASS
*********************************************************************/
class SnakeGame {

  constructor(canvasId='snake-game', options={}) {
    this.canvas = document.querySelector(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.snake = null;
    this.food = null;
    this.score = 0;
  }

  render() {
    this.ctx.beginPath();
    this.ctx.moveTo(0,0);
    this.ctx.lineTo(300,150);
    this.ctx.stroke();
  }

  start() {
    this.render();
  }

  resetScore() {
    this.score = 0;
  }

  newGame() {
    this.spawnSnake();
    this.spawnFood();
    this.resetScore();
    this.start();
  }

  spawnSnake() {
    this.snake = new Snake(1, 1, 5, 1);
  }

  spawnFood() {
    const emptyCell = this.getEmptyCell();
  }

  getEmptyCell() {
    // By definition an empty square is a non-snake segment occupied cell.

  }

  isEmptyCell() {

  }

}



/********************************************************************
* SNAKE CLASS
*********************************************************************/
class Snake {
  constructor(x1, y1, x2, y2) {
    this.start = [x1, y1, x2, y2];
    this.segments = [];
    this.createSegments(x1, y1, x2, y2);
    this.direction = this.computeDirection(x1, y1, x2, y2);
  }

  createSegments(x1, y1, x2, y2) {
    for (let i=x1; i<=x2; i++) {
      console.log(i);
      for (let j=y1; j<=y2; j++) {
        debugger;
        this.segments.push([i, j]);
      }
    }
  }

  computeDirection(x1, y1, x2, y2) {

  }
}


/********************************************************************
* MAIN PROGRAM
*********************************************************************/
const game = new SnakeGame('#snake-game', { width: 40, length: 40 });
game.newGame();
