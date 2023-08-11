import { Table } from './Table';
import { Snake } from './Snake';
import { Fruit } from './Fruit';

export class GameBoard {
  table;
  snake;
  fruit;
  gameOver;

  constructor(height, width) {
    this.table = new Table(height, width);
    this.snake = new Snake(5);
    this.fruit = new Fruit(this.table, this.snake);
    this.gameOver = false;
  }

  handleEatingFruit() {
    const snakeHead = this.snake.snakeHead();
    const fruitPosition = this.fruit.position;

    const wrappedSnakeHeadX = (snakeHead.x + this.table.rows) % this.table.rows;
    const wrappedSnakeHeadY =
      (snakeHead.y + this.table.columns) % this.table.columns;

    if (
      (wrappedSnakeHeadX === fruitPosition.x &&
        wrappedSnakeHeadY === fruitPosition.y) ||
      (snakeHead.x === fruitPosition.x && snakeHead.y === fruitPosition.y)
    ) {
      this.fruit.updatePosition();
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

    // check snake collision
    let partsOfBody = 0;
    for (let i = 0; i < this.snake.partsOfBody.length; i++) {
      if (
        head.x == this.snake.partsOfBody[i].x &&
        head.y == this.snake.partsOfBody[i].y
      ) {
        partsOfBody += 1;
      }
      if (partsOfBody > 1) {
        this.gameOver = true;
        break;
      }
    }

    this.table.makeDefault();

    this.table.changeColor(this.fruit.position.x, this.fruit.position.y, 'red');
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
