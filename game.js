var mappa;
var columns;
var rows;

class Game {
  constructor() {
      this.rowsGame = 4;
      this.columnsGame = 4;
      this.sizeImage = 32;
      this.time = 60;
      mappa [
        [1,0,0,1];
        [1,1,1,1];
        [0,0,0,1];
        [1,0,0,1];
      ]

  }
}

class GameObject {
  constructor(x,y) {
    this.coordenadaY = y;
    this.coordenadaX = x;
  }
}
