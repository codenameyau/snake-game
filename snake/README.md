# Snake

Author: Jorge Yau <codenameyau@gmail.com>

Hello! This is an implementation of Snake on a HTML canvas in ES6.

### Running the game

```bash
# Compiling ES6 with Babel CLI
npm install
babel public/scripts/snake.js -o public/scripts/snake-es5.js
babel public/scripts/snake.js -o public/scripts/snake-es5.js --watch

# Running game
npm install -g http-server
http-server -p 9090 -c-1
```

Then visit http://localhost:9090
