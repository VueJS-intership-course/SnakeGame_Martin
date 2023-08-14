import { Table } from './Table';
import { Snake } from './Snake';
import { Cherry } from './Cherry';
import { Banana } from './Banana';

export class GameBoard {
  table;
  snake;
  fruit;
  gameOver;

  constructor(height, width) {
    this.table = new Table(height, width);
    this.snake = new Snake(5, 1.5);
    this.fruit = new Cherry(this.table, this.snake);
    this.gameOver = false;
    this.score = 0;
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
      this.snake.grow = true;
      this.score += this.fruit.score;
      const randomFruit = Math.random() < 0.8 ? Cherry : Banana;
      this.fruit = new randomFruit(this.table, this.snake);
      this.fruit.updatePosition();

      const scoreBoard = document.getElementById('score');
      scoreBoard.textContent = this.score;
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
        this.score = 0;
        const scoreBoard = document.getElementById('score');
        scoreBoard.textContent = this.score;
        break;
      }
    }

    this.table.makeDefault();

    this.table.changeFruitColor(
      this.fruit.position.x,
      this.fruit.position.y,
      this.fruit.color
    );
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
