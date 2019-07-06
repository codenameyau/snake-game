import Snake from './Snake';
import Food from './Food';

export default class SnakeGame {

  constructor (canvasId = 'snake-game', options = {}) {
    this.entity = 'SnakeGame';

    // Canvas and rendering properties.
    this.canvas = document.querySelector(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.width = this._clamp(options.width || 40, 25, 100);
    this.height = this._clamp(options.height || 40, 25, 100);
    this.cellSize = Math.floor(this.canvas.width / this.width);
    this.cellPadded = this.cellSize - 2;
    this.speed = this._clamp(options.speed || 70, 10, 500);
    this.interval = null;

    // Define game internals and options.
    this.initLength = options.length || 8;
    this.cells = [];
    this.running = false;
    this.gameOver = false;

    this.gameInputs = new Set(
      ['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']
    );

    this.directionMap = {
      ArrowUp: 'up',
      ArrowDown: 'down',
      ArrowLeft: 'left',
      ArrowRight: 'right'
    };

    // Game entities and mechanics.
    this.player = options.player.substring(0, 12) || 'Play Tester';
    this.snake = null;
    this.food = null;
    this.score = 0;
    this.highScores = [];

    // Initialize internals.
    this.resetCanvas();
    this.resetCells();
    this.loadHighScores();
    this.initEventListeners();
  }

  resetCanvas () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  resetCells () {
    // Potentially re-visit with sparse matrix.
    this.cells = [];
    for (let i = 0; i < this.width; i++) {
      this.cells.push([]);
      for (let j = 0; j < this.height; j++) {
        this.cells[i].push(null);
      }
    }
  }

  initEventListeners () {
    const handleInputs = (event) => {
      if (!this.gameInputs.has(event.code)) { return; }

      event.stopPropagation();
      event.preventDefault();

      if (this.gameOver && event.code === 'Space') {
        return this.newGame();
      } else if (event.code === 'Space') {
        return this.toggleRunning();
      }

      // Ignore all other inputs if the game is not running.
      if (!this.running) { return; }

      const newDirection = this.directionMap[event.code];

      // Prevent the snake from moving backwards and colliding with itself.
      const movingBackwards = (
        this.snake.direction === 'left' && newDirection === 'right' ||
        this.snake.direction === 'right' && newDirection === 'left' ||
        this.snake.direction === 'up' && newDirection === 'down' ||
        this.snake.direction === 'down' && newDirection === 'up'
      );

      if (!movingBackwards) {
        this.snake.setDirection(newDirection);
      }
    };

    document.addEventListener('keydown', handleInputs, false);
  }

  newGame () {
    this.gameOver = false;
    this.running = false;
    this.clearInterval();
    this.resetCells();
    this.resetScore();
    this.spawnSnake();
    this.spawnFood();
    this.renderStatus();
    this.renderHighScores();
    this.renderAnimation();
  }

  renderAnimation () {
    this.resetCanvas();
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

  renderScore () {
    const scoreElement = document.body.querySelector('.scoreboard--score');
    scoreElement.innerHTML = this.score;
  }

  renderStatus () {
    const statusElement = document.body.querySelector('.snake-game--status');
    statusElement.innerHTML = this.gameOver ? 'Game Over'
      : this.running ? 'Playing' : 'Paused';
  }

  renderHighScores () {
    const highScoresContainer = document.body.querySelector('.highscores');
    highScoresContainer.innerHTML = '';

    this.highScores.forEach((highscore) => {
      let date = new Date(highscore.timestamp);
      let newScoreElement = document.createElement('div');
      newScoreElement.className = 'highscore';
      newScoreElement.innerHTML = `
        <span class="highscore-player" title="${date.toLocaleString()}">
          ${highscore.player}
        </span>
        <span class="highscore-placeholder">. . .</span>
        <span class="highscore-value">${highscore.value}</span>
      `;

      highScoresContainer.appendChild(newScoreElement);
    });
  }

  endGame () {
    this.gameOver = true;
    this.running = false;
    this.clearInterval();
    this.renderStatus();
    this.saveHighScore();
  }

  _sortScores (scoreA, scoreB) {
    return scoreA.value > scoreB.value ? -1 : scoreA.value < scoreB.value ? 1 : 0;
  }

  loadHighScores () {
    let highScores = localStorage.getItem('snake-highscores');
    if (highScores) {
      this.highScores = JSON.parse(highScores).sort(this._sortScores);
    }
  }

  saveHighScore () {
    if (this.score < 1) { return; }

    const score = {
      timestamp: Date.now(),
      value: this.score,
      player: this.player
    };

    this.highScores.push(score);
    this.highScores = this.highScores.sort(this._sortScores).slice(0, 8);
    localStorage.setItem('snake-highscores', JSON.stringify(this.highScores));
    this.renderHighScores();
  }

  toggleRunning () {
    if (this.gameOver) { return; }

    this.running = !this.running;
    this.renderStatus();
    if (this.running) {
      this.interval = window.setInterval(this.update.bind(this), this.speed);
    } else if (!this.running) {
      this.clearInterval();
    }
  }

  clearInterval () {
    if (this.interval) {
      window.clearInterval(this.interval);
      this.interval = null;
    }
  }

  resetScore () {
    this.score = 0;
    this.renderScore();
  }

  update () {
    if (this.gameOver) {
      return;
    }

    // Move snake along direction.
    const head = this.snake.segments[0];
    const direction = this.snake.direction;
    let newHead = head.slice();

    switch (direction) {
      case 'left': --newHead[0]; break;
      case 'right': ++newHead[0]; break;
      case 'up': --newHead[1]; break;
      case 'down': ++newHead[1]; break;
    }

    const collidedWithWall = (
      newHead[0] < 0 || newHead[0] >= this.width ||
      newHead[1] < 0 || newHead[1] >= this.height
    );

    if (collidedWithWall) {
      return this.endGame();
    }

    const headCell = this.cells[newHead[0]][newHead[1]];
    const hasCollision = headCell !== null;

    if (hasCollision) {
      if (!headCell) { // collision with unknown entity (possible bug?)
        return this.endGame();
      }

      else if (headCell.entity === 'Snake') {
        return this.endGame();
      }

      else if (headCell.entity === 'Food') {
        this.score += this.food.value;
        this.cells[newHead[0]][newHead[1]] = this.snake;
        this.snake.moveAndGrow(newHead[0], newHead[1]);
        delete this.food;
        this.spawnFood();
        this.renderScore();
      }
    }

    else {
      const tail = this.snake.segments[this.snake.segments.length - 1];
      this.cells[newHead[0]][newHead[1]] = this.snake;
      this.cells[tail[0]][tail[1]] = null;
      this.snake.move(newHead[0], newHead[1]);
    }

    this.renderAnimation();
  }

  spawnSnake () {
    const randomDirection = this._getRandomNumber(0, 4);
    const length = this.initLength;
    const minX = this.initLength + 2;
    const maxX = this.width - this.initLength - 2;
    const minY = this.initLength + 2;
    const maxY = this.height - this.initLength - 2;
    const head = this.getRandomEmptyCell(minX, maxX, minY, maxY);

    // Compute the segments of the snake based on it's head and length.
    switch (randomDirection) {
      case 0: // head facing left
        this.snake = new Snake(head[0], head[1], head[0] + length, head[1]);
        break;
      case 1: // head facing right
        this.snake = new Snake(head[0] + length, head[1], head[0], head[1]);
        break;
      case 2: // head facing up
        this.snake = new Snake(head[0], head[1] + length, head[0], head[1]);
        break;
      case 3: // head facing down
        this.snake = new Snake(head[0], head[1], head[0], head[1] + length);
        break;
      default: // random test position
        this.snake = new Snake(6, 2, 1, 2);
    }

    // For each of the snake's segments, mark cell with a reference to snake.
    this.snake.segments.forEach((segment) => {
      this.cells[segment[0]][segment[1]] = this.snake;
    });
  }

  spawnFood () {
    const emptyCell = this.getRandomEmptyCell();
    this.food = new Food(emptyCell[0], emptyCell[1]);
    this.cells[emptyCell[0]][emptyCell[1]] = this.food;
  }

  isEmptyCell (x, y) {
    return this.cells[x][y] === null;
  }

  getRandomEmptyCell (minX = 0, maxX = this.width - 1, minY = 0, maxY = this.height - 1) {
    let randomX = this._getRandomNumber(minX, maxX);
    let randomY = this._getRandomNumber(minY, maxY);
    while (!this.isEmptyCell(randomX, randomY)) {
      randomX = this._getRandomNumber(minX, maxX);
      randomY = this._getRandomNumber(minY, maxY);
    }
    return [randomX, randomY];
  }

  _getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  _clamp (num, min, max) {
    return Math.max(min, Math.min(num, max));
  }
}
