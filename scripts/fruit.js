const FOOD_SCORE = 5;

class Fruit extends GameObject {

  constructor(coordX,coordY) {
    super(coordX,coordY);
    //this.score = FOOD_SCORE;
  }

  show(){
      image(fruitImg, this.coordX, this.coordY); //Per mostrar-la, hem de posar la roca al preload.
    }

  showInstanceMode(p, img){
        p.image(img, this.coordX, this.coordY); //Per mostrar-la, hem de posar la roca al preload.
      }

  }
