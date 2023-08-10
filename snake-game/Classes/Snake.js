import { Position } from './Position';

export class Snake {
  constructor(segments) {
    this.partsOfBody = [];
    for (let index = 1; index <= segments; index++) {
      this.partsOfBody.push(new Position(1, index));
    }
    this.currentDirection = 'right';
    this.grow = false;
  }

  moveForward(direction) {
    let head = this.partsOfBody[this.partsOfBody.length - 1];
    let newHead;

    if (
      (this.currentDirection === 'right' && direction !== 'left') ||
      (this.currentDirection === 'left' && direction !== 'right') ||
      (this.currentDirection === 'up' && direction !== 'down') ||
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

    if (this.grow) {
      this.grow = false;
    } else {
      this.partsOfBody.shift();
    }

    this.partsOfBody.push(newHead);
  }

  snakeHead() {
    return this.partsOfBody[this.partsOfBody.length - 1];
  }
}
