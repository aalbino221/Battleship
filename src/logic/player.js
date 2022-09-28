/* eslint-disable prefer-const */
/* eslint-disable no-restricted-syntax */
const player = {
  player1: {
    gameboard: {},
    shotsFired: [],
    attack: (position) => {
      for (let key of player.player1.shotsFired) {
        if (key[0] === position[0] && key[1] === position[1]) return false;
      }
      player.player2.gameboard.receiveAttack(position);
      player.player1.shotsFired.push(position);
      return true;
    },
  },
  player2: {
    gameboard: {},
    shotsFired: [],
    AI: () => {
      const a = Math.floor(Math.random() * 10);
      const b = Math.floor(Math.random() * 10);
      const attackSucess = player.player2.attack([a, b]);
      if (!attackSucess) player.player2.AI();
    },
    attack: (position) => {
      for (let key of player.player2.shotsFired) {
        if (key[0] === position[0] && key[1] === position[1]) return false;
      }
      player.player1.gameboard.receiveAttack(position);
      player.player2.shotsFired.push(position);
      return true;
    },
  },
};

export { player };
