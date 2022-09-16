const ship = (len = 0) => (
  {
    length: len,
    hitList: [],
    isSunk: false,
    hit(position) {
      this.hitList.push(position);
      this.sunk();
    },
    sunk() {
      if (this.hitList.length === this.length) this.isSunk = true;
    },
  });

export { ship };
