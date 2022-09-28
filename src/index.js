import './style.css';
import { drawBoard, selectShips } from './dom';
import { gameLoop } from './gameLoop';

let game;

const init = () => {
  game = gameLoop;
  game.buildBoards();
  game.populateBoardsAI();
  drawBoard(game);
  selectShips(game, 5, 1);
};

init();
