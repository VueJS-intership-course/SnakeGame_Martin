import { Fruit } from "./Fruit";

export class Banana extends Fruit {
    constructor(table, snake) {
        super(table, snake);
        this.color = 'yellow';
        this.score = 50;
    }
}