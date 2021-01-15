const ROWS = 4;
const COLUMNS = 4;
const IMAGE_SIZE = 32;
const HEIGHT_TEXT = 64;
const SPEED = 1.0;
const MAX_LIVES = 5;

class Game {
  constructor() {
      this.rowsGame = ROWS;
      this.columnsGame = COLUMNS;
      this.sizeImage = IMAGE_SIZE;
      //this.time = 60;
      this.mapa = [
        [1,0,0,1],
        [1,1,1,1],
        [0,0,0,1],
        [1,0,0,1],
      ];

  }
  /*
  constructor(nrow,ncolumn, arraymap) {
      this.rowsGame = nrow;
      this.columnsGame = ncolumn;
      this.sizeImage = SIZE_IMAGE;
      //this.time = 60;
      this.mapa = arraymap;      ]

  }
  */
}

//var myGame = new Game();
