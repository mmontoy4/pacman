const ROWS = 4;
const COLUMNS = 4;
const SIZE_IMAGE = 32;
class Game {
  constructor() {
      this.rowsGame = ROWS;
      this.columnsGame = COLUMNS;
      this.sizeImage = SIZE_IMAGE;
      //this.time = 60;
      this.mapa = [
        [1,0,0,1];
        [1,1,1,1];
        [0,0,0,1];
        [1,0,0,1];
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
