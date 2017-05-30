import SnakeGame from './scripts/SnakeGame';

const game = new SnakeGame('#snake-game', {
  width: 40,
  height: 40,
  speed: 60
});

game.newGame();
