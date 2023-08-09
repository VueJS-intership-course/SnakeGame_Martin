import { Table } from './Table';
import { Snake } from './Snake';
import { direction } from '../main';

export class GameBoard {
  table;
  snake;
  // fruitPosition;
  // gameOver;

  constructor(height, width) {
    this.table = new Table(height, width);
    this.snake = new Snake();
  }
  
  gameLoop() {
    this.table.makeDefault();

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
