import { Fruit } from "./Fruit";

export class Cherry extends Fruit {
    constructor(table, snake) {
        super(table, snake);
        this.color = 'red';
        this.score = 10;
    }
}