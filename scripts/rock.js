class Rock extends GameObject {
  constructor(x,y) {
    super();
    show(){
      preload img = loadImage();
      image(rockImg, this.cordX, this.cordY);
    }

  }
}
