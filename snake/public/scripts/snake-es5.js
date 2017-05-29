'use strict';

/********************************************************************
* SNAKE GAME CLASS
*********************************************************************/

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var SnakeGame = (function () {
  function SnakeGame() {
    var canvasId = arguments.length <= 0 || arguments[0] === undefined ? 'snake-game' : arguments[0];
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, SnakeGame);

    this.canvas = document.querySelector(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.snake = null;
    this.food = null;
    this.score = 0;
  }

  /********************************************************************
  * SNAKE CLASS
  *********************************************************************/

  _createClass(SnakeGame, [{
    key: 'render',
    value: function render() {
      this.ctx.beginPath();
      this.ctx.moveTo(0, 0);
      this.ctx.lineTo(300, 150);
      this.ctx.stroke();
    }
  }, {
    key: 'start',
    value: function start() {
      this.render();
    }
  }, {
    key: 'resetScore',
    value: function resetScore() {
      this.score = 0;
    }
  }, {
    key: 'newGame',
    value: function newGame() {
      this.spawnSnake();
      this.spawnFood();
      this.resetScore();
      this.start();
    }
  }, {
    key: 'spawnSnake',
    value: function spawnSnake() {
      this.snake = new Snake(1, 1, 5, 1);
    }
  }, {
    key: 'spawnFood',
    value: function spawnFood() {
      var emptyCell = this.getEmptyCell();
    }
  }, {
    key: 'getEmptyCell',
    value: function getEmptyCell() {
      // By definition an empty square is a non-snake segment occupied cell.

    }
  }, {
    key: 'isEmptyCell',
    value: function isEmptyCell() {}
  }]);

  return SnakeGame;
})();

var Snake = (function () {
  function Snake(x1, y1, x2, y2) {
    _classCallCheck(this, Snake);

    this.start = [x1, y1, x2, y2];
    this.segments = [];
    this.createSegments(x1, y1, x2, y2);
    this.direction = this.computeDirection(x1, y1, x2, y2);
  }

  /********************************************************************
  * MAIN PROGRAM
  *********************************************************************/

  _createClass(Snake, [{
    key: 'createSegments',
    value: function createSegments(x1, y1, x2, y2) {
      for (var i = x1; i <= x2; i++) {
        console.log(i);
        for (var j = y1; j <= y2; j++) {
          debugger;
          this.segments.push([i, j]);
        }
      }
    }
  }, {
    key: 'computeDirection',
    value: function computeDirection(x1, y1, x2, y2) {}
  }]);

  return Snake;
})();

var game = new SnakeGame('#snake-game', { width: 40, length: 40 });
game.newGame();
