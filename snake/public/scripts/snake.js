'use strict';

/********************************************************************
* SNAKE GAME CLASS
*********************************************************************/
class SnakeGame {

  constructor(canvasId) {
    this.canvas = document.getElementById('snake-game');
    this.ctx = this.canvas.getContext('2d');
  }

  render() {
    this.ctx.beginPath();
    this.ctx.moveTo(0,0);
    this.ctx.lineTo(300,150);
    this.ctx.stroke();
  }
}


/********************************************************************
* SNAKE CLASS
*********************************************************************/
class Snake {

}


/********************************************************************
* MAIN PROGRAM
*********************************************************************/
const game = new SnakeGame();
game.render();
