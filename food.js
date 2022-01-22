function Food(){
  this.width = 10;
  this.x = 0;
  this.y = 0;
  this.color = [20,80,20];
  this.superfoodpoint = 0;
  this.superfoodx = 0;
  this.superfoody = 0;
  this.superfoodcolor = [255,25,25];
  this.superfoodscore = 10;

this.setup = function(){
  this.x = Math.round(random((canvas.width-this.width) / this.width))*this.width;
  this.y = Math.round(random((canvas.height-this.width) / this.width))*this.width;
}

this.createsuperfood = function(){
  if (score == this.superfoodscore){
    this.superfoodscore = 0;
    timer = 5;
    superfoodvisible = 1;
    this.superfoodpoint = Math.round(random(1,5));
    this.superfoodx = Math.round(random((canvas.width-this.width) / this.width))*this.width;
    this.superfoody = Math.round(random((canvas.height-this.width) / this.width))*this.width;
  }
}
this.destroysuperfood = function(){
  superfoodvisible = 0;
  this.superfoodpoint = 0;
  this.superfoodx = -10;
  this.superfoody = -10;
  this.superfoodscore = score + 5;
  fill(this.superfoodcolor);
  rect(this.superfoodx, this.superfoody, this.width, this.width);
}
  this.draw = function(){
    noStroke();
    fill(this.color);
    rect(this.x,this.y, this.width, this.width);

    if (superfoodvisible){
      fill(this.superfoodcolor);
      rect(this.superfoodx, this.superfoody, this.width, this.width);
    }
  }
}
