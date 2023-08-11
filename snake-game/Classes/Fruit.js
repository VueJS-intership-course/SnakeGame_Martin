import { randomInteger } from "../utils";
import { Position } from "./Position";

export class Fruit {
  constructor(table, snake, color, score) {
    this.table = table;
    this.snake = snake;
    this.position;
    this.color = color;
    this.score = score;
    this.generateValidPosition();
  }

  generateValidPosition() {
    let x = randomInteger(0, this.table.rows - 1);
    let y = randomInteger(0, this.table.columns - 1);
    this.position = new Position(x, y);

    if (this.checkCollisionWithSnake()) {
      this.generateValidPosition();
    }
  }

  checkCollisionWithSnake() {
    for (let index = 0; index < this.snake.partsOfBody.length; index++) {
      if (
        this.snake.partsOfBody[index].x === this.position.x &&
        this.snake.partsOfBody[index].y === this.position.y
      ) {
        return true;
      }
    }
    return false;
  }

  updatePosition() {
    this.generateValidPosition();
  }
}