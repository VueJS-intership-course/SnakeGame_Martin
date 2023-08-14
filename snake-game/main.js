import './styles/style.css'
import { GameBoard } from './Classes/GameBoard';
import { direction } from './utils/utils';

let gameBoard = new GameBoard(20, 20);
let div = document.getElementById('table');
gameBoard.table.initTableNode();
div.append(gameBoard.table.tableNode);

//! TODO -> requestAnimation
// window.setInterval(function () {
//   let setDirection = direction;

//   gameBoard.gameLoop(setDirection);

//   if (gameBoard.gameOver) {
//     alert('Game Over!');
//     div.removeChild(gameBoard.table.tableNode);
//     gameBoard = new GameBoard(20, 20);
//     gameBoard.table.initTableNode();
//     div.append(gameBoard.table.tableNode);
//     setDirection = 'right';
//   }
// }, 250);

let oldTimestamp = 0;

function updateGameLoop(timestamp) {
  if (!oldTimestamp) {
    oldTimestamp = timestamp;
  }
  let setDirection = direction;

  const time = timestamp - oldTimestamp;

  const frameRate = 1000 / gameBoard.snake.speed;

  if (time >= frameRate) {
    gameBoard.gameLoop(setDirection);

    if (gameBoard.gameOver) {
      alert('Game Over!');
      div.removeChild(gameBoard.table.tableNode);
      gameBoard = new GameBoard(20, 20);
      gameBoard.table.initTableNode();
      div.append(gameBoard.table.tableNode);
      setDirection = 'right';
    }

    oldTimestamp = timestamp;
  }

  requestAnimationFrame(updateGameLoop);
}

requestAnimationFrame(updateGameLoop);
