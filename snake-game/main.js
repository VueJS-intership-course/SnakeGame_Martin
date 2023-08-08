import './style.css';

class Table {
  tableNode;

  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
  }

  initTableNode() {
    this.tableNode = document.createElement('table');
    for (let i = 0; i < this.rows; i++) {
      let tr = document.createElement('tr');
      for (let j = 0; j < this.columns; j++) {
        let td = document.createElement('td');
        tr.appendChild(td);
      }
      this.tableNode.appendChild(tr);
    }
  }

  changeSnakeColor(x, y, color) {
    if (x >= 0 && x < this.rows && y >= 0 && y < this.columns) {
      this.tableNode.rows[x].cells[y].style.background = color;
    }
  }
}

class Snake {
  partsOfBody;
  currentDirection;

  constructor() {
    let position1 = new Position(1, 1);
    let position2 = new Position(1, 2);
    let position3 = new Position(1, 3);
    let position4 = new Position(1, 4);
    let position5 = new Position(1, 5);
    this.partsOfBody = [position1, position2, position3, position4, position5];
    this.currentDirection = 'right';
  }

  moveForward(direction) {
    let head = this.partsOfBody[this.partsOfBody.length - 1];
    let newHead;

    if (
      (this.currentDirection === 'right' && direction !== 'left') ||
      (this.currentDirection === 'left' && direction !== 'right') ||
      (this.currentDirection ==='up' && direction !== 'down') ||
      (this.currentDirection === 'down' && direction !== 'up')
    ) {
      this.currentDirection = direction;
    }

    if (this.currentDirection === 'left') {
      newHead = new Position(head.x, head.y - 1);
    } else if (this.currentDirection === 'up') {
      newHead = new Position(head.x - 1, head.y);
    } else if (this.currentDirection === 'right') {
      newHead = new Position(head.x, head.y + 1);
    } else if (this.currentDirection === 'down') {
      newHead = new Position(head.x + 1, head.y);
    }

    this.partsOfBody.push(newHead);
  }
}

class Position {
  x;
  y;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class GameBoard {
  table;
  snake;
  // fruitPosition;
  // gameOver;

  constructor(height, width) {
    this.table = new Table(height, width);
    this.snake = new Snake();
  }

  gameLoop() {
    // initialization the snake
    for (let i = 0; i < this.snake.partsOfBody.length; i++) {
      this.table.changeSnakeColor(
        this.snake.partsOfBody[i].x,
        this.snake.partsOfBody[i].y,
        'green'
      );
    }
    this.snake.moveForward(direction);
  }
}

let gameBoard = new GameBoard(20, 20);
let div = document.getElementById('table');
gameBoard.table.initTableNode();
div.append(gameBoard.table.tableNode);
gameBoard.gameLoop();

// window.setInterval(function () {
//   gameBoard.gameLoop();
// }, 250);

let direction = 'right';
document.addEventListener('keydown', function (event) {
  if (event.key == 'ArrowLeft') {
    direction = 'left';
  } else if (event.key == 'ArrowUp') {
    direction = 'up';
  } else if (event.key == 'ArrowRight') {
    direction = 'right';
  } else if (event.key == 'ArrowDown') {
    direction = 'down';
  }
});

//I was here from moveSnake branch

// Another comment for testing 