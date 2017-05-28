'use strict';

/********************************************************************
* SNAKE GAME CLASS
*********************************************************************/

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var SnakeGame = (function () {
  function SnakeGame(canvasId) {
    _classCallCheck(this, SnakeGame);

    this.canvas = document.getElementById('snake-game');
    this.ctx = this.canvas.getContext('2d');
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
  }]);

  return SnakeGame;
})();

var Snake = function Snake() {
  _classCallCheck(this, Snake);
}

/********************************************************************
* MAIN PROGRAM
*********************************************************************/
;

var game = new SnakeGame();
game.render();
