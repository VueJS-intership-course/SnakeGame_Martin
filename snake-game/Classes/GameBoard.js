import { Table } from './Table';
import { Snake } from './Snake';
import { randomInteger } from '../utils';
import { Position } from './Position';

export class GameBoard {
  table;
  snake;
  fruitPosition;
  // gameOver;

  constructor(height, width) {
    this.table = new Table(height, width);
    this.snake = new Snake(5);
    this.setFruit();
  }

  setFruit() {
    // while (true) {
    //   let x = randomInteger(0, this.table.rows - 1);
    //   let y = randomInteger(0, this.table.columns - 1);
    //   this.fruitPosition = new Position(x, y);

    //   for (let index = 0; index < this.snake.partsOfBody.length; index++) {
    //     if (
    //       this.snake.partsOfBody[index].x === x &&
    //       this.snake.partsOfBody[index].y === y
    //     ) {
    //       continue;
    //     }
    //   }
    //   return;
    // }

    do {
      let x = randomInteger(0, this.table.rows - 1);
      let y = randomInteger(0, this.table.columns - 1);
      this.fruitPosition = new Position(x, y);

      let isFruitCollisionWithSnake = false;
      for (let index = 0; index < this.snake.partsOfBody.length; index++) {
        if (
          this.snake.partsOfBody[index].x === x &&
          this.snake.partsOfBody[index].y === y
        ) {
          isFruitCollisionWithSnake = true;
          break;
        }
      }

      if (!isFruitCollisionWithSnake) {
        break;
      }
    } while (true);
  }

  handleEatingFruit() {
    const snakeHead = this.snake.snakeHead();
    let wrappedX;
    if (snakeHead.x < 0) {
      wrappedX = this.table.rows + snakeHead.x;
    } else {
      wrappedX = snakeHead.x % this.table.rows;
    }

    let wrappedY;
    if (snakeHead.y < 0) {
      wrappedY = this.table.columns + snakeHead.y;
    } else {
      wrappedY = snakeHead.y % this.table.columns;
    }

    if (
      (wrappedX === this.fruitPosition.x &&
        wrappedY === this.fruitPosition.y) ||
      (snakeHead.x === this.fruitPosition.x &&
        snakeHead.y === this.fruitPosition.y)
    ) {
      this.setFruit();
      this.snake.grow = true;
    }
  }

  gameLoop(direction) {
    this.snake.moveForward(direction);
    this.handleEatingFruit();

    //mirror move
    let head = this.snake.snakeHead();
    if (head.x < 0) {
      head.x = this.table.rows;
    } else if (head.x >= this.table.rows) {
      head.x = 0;
    }
    if (head.y < 0) {
      head.y = this.table.columns;
    } else if (head.y >= this.table.columns) {
      head.y = 0;
    }

    this.table.makeDefault();

    this.table.changeColor(this.fruitPosition.x, this.fruitPosition.y, 'red');
    // initialization the snake
    for (let i = 0; i < this.snake.partsOfBody.length; i++) {
      this.table.changeSnakeColor(
        this.snake.partsOfBody[i].x,
        this.snake.partsOfBody[i].y,
        'green'
      );
    }
  }
}
