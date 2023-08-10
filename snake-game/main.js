import './style.css';
import { GameBoard } from './Classes/GameBoard';
import { direction } from './utils';

let gameBoard = new GameBoard(20, 20);
let div = document.getElementById('table');
gameBoard.table.initTableNode();
div.append(gameBoard.table.tableNode);
// gameBoard.gameLoop();

//! TODO -> requestAnimation
window.setInterval(function () {
  gameBoard.gameLoop(direction);
}, 250);