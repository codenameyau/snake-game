import SnakeGame from './scripts/SnakeGame';

const game = new SnakeGame('#snake-game', {
  player: 'Play Tester',
  width: 40, // change canvas width to be a multiple
  height: 40, // change canvas height to be a multiple
  speed: 60 // lower is faster
});

game.newGame();
