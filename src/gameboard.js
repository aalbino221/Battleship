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
      if (!this.validateShip(ship, coords, axis)) throw TypeError('Invalid location');
      const x = coords[0];
      const y = coords[1];
      const temp = this.board[x][y];
      const position = [];
      const { length } = ship;
      temp.ship = true;
      position.push([x, y]);
      if (axis === 'yAxis') {
        for (let i = 1; i < length; i++) {
          this.board[x][y - i].ship = true;
          position.push([coords[0], coords[1] - i]);
        }
      } else if (axis === 'xAxis') {
        for (let i = 1; i < length; i++) {
          this.board[x + i][y].ship = true;
          position.push([x + i, y]);
        }
      }
      this.shipList.push({ ship, position });
    },

    validateShip(ship, coords, axis) {
      if (coords[0] > 9 || coords[0] < 0) return false;
      if (coords[1] > 9 || coords[1] < 0) return false;
      if (axis === 'yAxis') {
        const result = coords[1] - ship.length + 1;
        if (result < 0) return false;
      } else if (axis === 'xAxis') {
        const result = coords[0] - ship.length + 1;
        if (result > 9) return false;
      }
      return true;
    },

    receiveAttack(position) {
      // eslint-disable-next-line no-restricted-syntax
      for (const key of this.shipList) {
        // eslint-disable-next-line no-restricted-syntax
        for (const shipPosition of key.position) {
          if (shipPosition[0] === position[0] && shipPosition[1] === position[1]) {
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
        if (key.ship.isSunk === false) return false;
      }
      this.allSunk = true;
      return true;
    },
  }
);

export { gameboard };
