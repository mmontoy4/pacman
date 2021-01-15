function Food(x,y){
  this.x=x;
  this.y=y;

  this.show = function(){

    image(foodImage, this.x, this.y);

  }

}
