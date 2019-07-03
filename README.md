# snake-game

![Snake Game](https://user-images.githubusercontent.com/3826772/27411664-1a401f02-56bd-11e7-8179-1fc73464ad83.png)

## Website
https://codenameyau.github.io/snake-game/

## Implementation Details
I implemented the snake using an Array (Queue), where the first element represents
the head of the snake and the last element represents the tail. As the snake
moves, the tail is popped and the new cell position is appended to the front
of the segments as the new head. If the head of the snake collides with a food,
then tail is not popped. If the head collides with another snake segment, then
the game is over.

Collision detection is implemented via a matrix that keeps track of all cells
in the game. The snake segments and food are then drawn on the canvas. The
individual matrix cells are not rendered.

## Running Instructions

```bash
# Running game with Webpack.
npm install
npm start

# Running tests.
npm test
```

Then visit http://localhost:8080


## Tasks
These are the steps I took when creating this game.
```
[+] Setup Webpack for ES6
[+] Setup ES6 tests with Mocha and Chai
[+] Design and create the HTML / CSS game layout
[+] Design and create Game class
[+] Design and create Snake class
[+] Design and create Food class
[+] Implement and render snake
[+] Implement and render food
[+] Spawn randomly generated snake on canvas
[+] Spawn randomly generated food on canvas
[+] Implement collision detection matrix
[+] Handle user input
[+] Implement game status
[+] Implement score
[+] Implement start/pause/restart game
[+] Implement game loop and rendering animation frames
[+] Implement snake movement
[+] Implement snake and food collision events
[+] Fix bug with snake colliding with itself when moving backwards
[+] Implement wall collision
[+] Implement top 5 high scores
```

### Future Enhancements
```
[ ] Revisit collision detection algorithm with sparse matrix
[ ] Add animations
[ ] Add music and sound effects
[ ] Implement no walls option
[ ] Implement options UI
[ ] Multiplayer (separate repo)
```
