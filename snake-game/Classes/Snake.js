class Snake {
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
    this.partsOfBody.shift();
    this.partsOfBody.push(newHead);
  }
}
