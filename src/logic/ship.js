const ship = (length = 0) => {
  let len = length;
  if (len <= 2) len += 1;
  return {
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
  };
};

export { ship };
