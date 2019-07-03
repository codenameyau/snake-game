import SnakeGame from './scripts/SnakeGame';

const game = new SnakeGame('#snake-game', {
  player: 'Play Tester',
  width: 30, // change canvas width to be a multiple
  height: 30, // change canvas height to be a multiple
  speed: 60 // lower is faster
});

game.newGame();
