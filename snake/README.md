# Snake

Author: Jorge Yau <codenameyau@gmail.com>

Hello! This is my implementation of Snake on a HTML canvas in ES6.
You can move with the arrow keys and press space to start.

### Instructions

```bash
# Running game with Webpack.
npm install
npm start

# Running tests.
npm test
```

Then visit http://localhost:8080

### Implementation
I implemented the snake using an Array (Queue), where the first element represents
the head of the snake and the last element represents the tail. As the snake
moves, the tail is popped and the new cell position is appended to the front
of the segments as the new head. If the head of the snake collides with a food,
then tail is not popped. If the head collides with another snake segment, then
the game is over.

### Tasks
These are the steps I took when creating this game.
- Setup Webpack for ES6
- Setup ES6 tests with Mocha and Chai
- Design and create the HTML / CSS game layout
- Design and create Game class
- Design and create Snake class
- Design and create Food class
- Implement Spawn snake and create segments
- Render randomly generated snake on canvas
- Render randomly generated food on canvas
- Handle user input
- Implement start/pause/restart game
- Implement game loop and rendering animation frames
- Implement snake movement
- Implement collision and events
- Implement score calculator
- Implement top 5 high scores
- Implement music and sound effects
- Implement no walls option
