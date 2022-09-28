/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */

const gameboard = () => (
  {
    board: [],
    shipList: [],
    missedShots: [],
    allSunk: false,

    newBoard() {
      this.board = new Array(10);
      for (let i = 0; i < 10; i++) {
        this.board[i] = new Array(10);
        for (let j = 0; j < 10; j++) {
          this.board[i][j] = { value: null, ship: null };
        }
      }
    },

    placeShip(ship, coords, axis = 'yAxis') {
      if (!this.validateShip(ship.length, coords, axis)) return 0;
      const x = coords[1];
      const y = coords[0];
      const temp = this.board[y][x];
      const position = [];
      const { length } = ship;
      temp.ship = true;
      position.push([y, x]);
      if (axis === 'yAxis') {
        for (let i = 1; i < length; i++) {
          this.board[y - i][x].ship = true;
          position.push([y - i, x]);
        }
      } else if (axis === 'xAxis') {
        for (let i = 1; i < length; i++) {
          this.board[y][x + i].ship = true;
          position.push([y, x + i]);
        }
      }
      this.shipList.push({ ship, position });
      return 1;
    },

    validateShip(length, coords, axis = 'yAxis') {
      const y = coords[0];
      const x = coords[1];
      if (coords[0] > 9 || coords[0] < 0) return false;
      if (coords[1] > 9 || coords[1] < 0) return false;

      if (axis === 'yAxis') {
        const result = y - length + 1;
        if (result < 0) return false;
      } else if (axis === 'xAxis') {
        const result = x + length - 1;
        if (result > 9) return false;
      }

      if (axis === 'yAxis') {
        for (let i = 0; i < length; i++) {
          const newY = y - i;
          if (this.board[newY][x].ship) return false;// SHIP ON POSITION
          if (x - 1 >= 0) { // IF IS NOT ON LEFT BORDER
            if (this.board[y][x - 1].ship) return false;// LEFT
            if (newY - 1 >= 0 && this.board[newY - 1][x - 1].ship) {
              // IF NOT UPPER BORDER -> LEFT-UP;
              return false;
            }
            if (newY + 1 <= 9 && this.board[newY + 1][x - 1].ship) {
              // IF NOT ON LOWERBORDER -> LEFT-DOWN
              return false;
            }
          }
          if (x + 1 <= 9) { // IF IS NOT ON RIGHT BORDER
            if (this.board[newY][x + 1].ship) return false; // RIGHT
            if (newY - 1 >= 0 && this.board[newY - 1][x + 1].ship) {
              // IF NOT ON UPPER BORDER -> RIGHT-UP
              return false;
            }
            if (newY + 1 <= 9 && this.board[newY + 1][x + 1].ship) {
              // IF NOT ON LOWERBORDER -> RIGHT-DOWN
              return false;
            }
          }
          if (i === 0) { // IF FIRST
            if (newY + 1 <= 9 && this.board[newY + 1][x].ship) {
              // IF NOT ON LOWER BORDER -> DOWN
              return false;
            }
          }
          if (i === length - 1) { // IF LAST ITERATION
            if (newY - 1 >= 0 && this.board[newY - 1][x].ship) {
              // IF NOT ON UPPER BORDER -> UP
              return false;
            }
          }
        }
      } else if (axis === 'xAxis') {
        for (let i = 0; i < length; i++) {
          const newX = x + i;
          if (this.board[y][newX].ship) return false;// SHIP ON POSITION
          if (y - 1 >= 0) { // IF IS NOT ON UPPER BORDER
            if (newX - 1 >= 0 && this.board[y - 1][newX - 1].ship) {
              // IF NOT ON LEFT BORDER -> LEFT-UP
              return false;
            }
            if (this.board[y - 1][newX].ship) return false;// UP
            if (newX + 1 <= 9 && this.board[y - 1][newX + 1].ship) {
              // IF NOT ON RIGHT BORDER -> RIGHT-UP
              return false;
            }
          }
          if (y + 1 <= 9) { // IF IS NOT ON LOWER BORDER
            if (this.board[y + 1][newX].ship) return false; // DOWN
            if (newX + 1 <= 9 && this.board[y + 1][newX + 1].ship) {
              // IF NOT ON RIGHT BORDER -> RIGHT-DOWN
              return false;
            }
            if (newX - 1 >= 0 && this.board[y + 1][newX - 1].ship) {
              // IF NOT ON LEFT BORDRDER -> LEFT-DOWN
              return false;
            }
          }
          if (i === 0) { // IF FIRST
            if (newX - 1 >= 0 && this.board[y][newX - 1].ship) {
              // IF NOT ON LEFT BORDER -> LEFT
              return false;
            }
          }
          if (i === length - 1) { // IF LAST ITERATION
            if (newX + 1 <= 9 && this.board[y][newX + 1].ship) {
              // IF NOT ON RIGHT BORDER -> RIGHT
              return false;
            }
          }
        }
      }
      return true;
    },

    receiveAttack(position) {
      // eslint-disable-next-line no-restricted-syntax
      this.board[position[0]][position[1]].value = 'miss';
      for (const key of this.shipList) {
        // eslint-disable-next-line no-restricted-syntax
        for (const shipPosition of key.position) {
          if (shipPosition[0] === position[0] && shipPosition[1] === position[1]) {
            this.board[position[0]][position[1]].value = 'hit';
            key.ship.hit(position);
            this.checkSunk();
            return;
          }
        }
      }
      this.checkSunk();
      this.missedShots.push(position);
    },

    checkSunk() {
      // eslint-disable-next-line no-restricted-syntax
      for (const key of this.shipList) {
        if (key.ship.isSunk === false) return;
      }
      this.allSunk = true;
    },
  });

export { gameboard };
