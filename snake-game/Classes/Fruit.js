class Fruit {
    setFruit() {
        while (true) {
          let x = randomInteger(0, this.table.rows - 1);
          let y = randomInteger(0, this.table.columns - 1);
          this.fruitPosition = new Position(x, y);
    
          for (let index = 0; index < this.snake.partsOfBody.length; index++) {
            if (
              this.snake.partsOfBody[index].x === x &&
              this.snake.partsOfBody[index].y === y
            ) {
              continue;
            }
          }
          return;
        }
      }
}