class Rock extends GameObject {

  constructor(coordX,coordY) {
    super(coordX,coordY);
  }

  show(){
      image(rockImg, this.coordX, this.coordY); //Per mostrar-la, hem de posar la roca al preload.
    }

  showInstanceMode(p, img){
        p.image(img, this.coordX, this.coordY); //Per mostrar-la, hem de posar la roca al preload.
      }

  }
