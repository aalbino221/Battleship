/* eslint-disable no-restricted-syntax */
const drawBoard = (game) => {
  const boards = document.querySelectorAll('.board');
  const board1 = boards[0];
  const board2 = boards[1];
  board1.innerHTML = '';
  board2.innerHTML = '';
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const square = document.createElement('div');
      square.classList.add('square');
      if (game.players.player1.gameboard.board[i][j].ship === true) square.dataset.ship = true;
      if (game.players.player1.gameboard.board[i][j].value === 'miss') square.dataset.value = 'miss';
      if (game.players.player1.gameboard.board[i][j].value === 'hit') square.dataset.value = 'hit';
      board1.append(square);
    }
  }

  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const square = document.createElement('div');
      square.classList.add('square');
      if (game.players.player2.gameboard.board[i][j].value === 'miss') square.dataset.value = 'miss';
      if (game.players.player2.gameboard.board[i][j].value === 'hit') square.dataset.value = 'hit';
      square.addEventListener('click', () => {
        if (game.players.player2.gameboard.board[i][j].value != null) return;
        game.gameAttack([i, j]);
      });
      board2.append(square);
    }
  }
};

const rotateShip = () => {
  const btn = document.querySelector('#rotation');
  if (btn.dataset.axis === 'yAxis') btn.dataset.axis = 'xAxis';
  else btn.dataset.axis = 'yAxis';
};

const shipNames = (length) => {
  const name = document.querySelector('#ship');
  switch (length) {
    case 1:
      name.textContent = 'Carrier';
      break;
    case 2:
      name.textContent = 'Battleship';
      break;
    case 3:
      name.textContent = 'Destroyer';
      break;
    case 4:
      name.textContent = 'Submarine';
      break;
    default:
      name.textContent = 'Patrol Boat';
      break;
  }
};

const mouseOver = (length, axis) => {
  const squares = document.querySelectorAll('.select-board .square');
  for (let i = 0; i < squares.length; i += 1) {
    if (axis === 'xAxis') {
      squares[i].addEventListener('mouseover', () => {
        for (let j = 0; j < length; j += 1) {
          if (i < 10 && i + j > 9) break;
          if (Number(String(i)[1]) > Number(String(i + j)[1])) break;
          if (length <= 2) squares[i + j + 1].style.backgroundColor = 'green';
          else squares[i + j].style.backgroundColor = 'green';
        }
      });
      squares[i].addEventListener('mouseout', () => {
        for (let j = 0; j < length; j += 1) {
          if (i + j >= 100) break;
          if (length <= 2) squares[i + j + 1].style.backgroundColor = '';
          else squares[i + j].style.backgroundColor = '';
        }
      });
    }
    if (axis === 'yAxis') {
      squares[i].addEventListener('mouseover', () => {
        for (let j = length - 1; j >= 0; j -= 1) {
          if (String(i).length === 1) {
            squares[i].style.backgroundColor = 'green';
            break;
          }
          let num = String(i);
          num = Number(String(Number(num[0]) - j).concat(num.slice(1)));
          if (length <= 2) num -= 10;
          if (num >= 0) squares[num].style.backgroundColor = 'green';
        }
      });
      squares[i].addEventListener('mouseout', () => {
        for (let j = length - 1; j >= 0; j -= 1) {
          if (String(i).length === 1) {
            squares[i].style.backgroundColor = '';
            break;
          }
          let num = String(i);
          num = Number(String(Number(num[0]) - j).concat(num.slice(1)));
          if (length <= 2) num -= 10;
          if (num >= 0) squares[num].style.backgroundColor = '';
        }
      });
    }
  }
};

const selectShips = (game, length, nam) => {
  const board = document.querySelector('.select-board');
  board.innerHTML = '';
  const { axis } = document.querySelector('#rotation').dataset;
  const btn = document.querySelector('#rotation');
  btn.addEventListener('click', () => {
    rotateShip();
    btn.replaceWith(btn.cloneNode(true));
    selectShips(game, length, nam);
  });
  if (length === 0) {
    document.querySelector('.block').style.display = 'none';
    drawBoard(game);
    return;
  }
  shipNames(nam);
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const square = document.createElement('div');
      square.classList.add('square');
      board.append(square);
      if (game.players.player1.gameboard.board[i][j].ship === true) square.dataset.ship = true;
      square.addEventListener('click', () => {
        let size = length;
        if (size <= 2) size += 1;
        if (!game.players.player1.gameboard.validateShip(size, [i, j], axis)) return;
        game.populateBoards(length, [i, j], axis);
        board.innerHTML = '';
        btn.replaceWith(btn.cloneNode(true));
        selectShips(game, length - 1, nam + 1);
      });
    }
  }
  mouseOver(length, axis);
};

const restartGame = () => {
  const btn = document.querySelector('#restart');
  const screen = document.querySelector('.winner');
  const block = document.querySelector('.block');
  block.style.display = 'none';
  btn.addEventListener('click', () => {
    btn.replaceWith(btn.cloneNode(true));
    block.style.display = 'block';
    screen.style.display = 'none';
  });
};

const winScreen = (win) => {
  const screen = document.querySelector('.winner');
  const text = document.querySelector('#message');
  if (win === 1) {
    text.textContent = 'You won';
    screen.style.display = 'block';
    return;
  }
  text.textContent = 'You lost';
  screen.style.display = 'block';
};

const restartRotate = () => {
  const btn = document.querySelector('#rotation');
  btn.replaceWith(btn.cloneNode(true));
};

export {
  drawBoard, selectShips, mouseOver, restartGame, winScreen, restartRotate,
};
