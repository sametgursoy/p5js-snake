function Snake(){
  this.size = 1;
  this.x = 0;
  this.y = 0;
  this.speed = 1;
  this.width = 10;
  this.dirX = 1;
  this.dirY = 0;
  this.tail = [];
  this.point = 0;
  this.turned = 0;
  this.blowed = 0;


  this.draw = function(){
    if (this.size === this.tail.length) {
      for (var i = 0; i < this.tail.length-1; i++) {
        this.tail[i] = this.tail[i+1];
      }
    }
    this.tail[this.size - 1] = createVector(this.x, this.y);

    fill(0,0,100);
    noStroke();
    for (var i = 0; i < this.tail.length-1; i++) {
      noStroke();
      fill(level,i,framerate);
      rect(this.tail[i].x, this.tail[i].y, this.width, this.width);
    }
    rect(this.x, this.y, this.width, this.width);
    this.move();
  }
  this.move = function(){
    var x = ((this.speed*this.width)*this.dirX) + this.x;
    var y = ((this.speed*this.width)*this.dirY) + this.y;
    this.x = x % canvas.width;
    this.y = y % canvas.height;
    if (this.x < 0) this.x = canvas.width-this.width;
    if (this.y < 0) this.y = canvas.height-this.width;
    if (this.turned == 1) {
      this.turned = 0;
    };
  }
  this.setX = function(dirX){
    if (this.dirX * dirX !== 0 ) return;
      this.dirX = dirX;
      this.turned = 1;
  }
  this.setY = function(dirY){
    if (this.dirY * dirY !== 0) return;
      this.dirY = dirY;
      this.turned = 1;
  }
  this.feed = function(food){
    var result = (this.x === food.x && this.y === food.y);
    if (result) {
      this.blowed = 0;
      this.grow(0);
      return result;
    }
    var result = (this.x === food.superfoodx && this.y === food.superfoody);
    if (result) {
      this.blowed = 0;
      this.grow(food.superfoodpoint);
      food.destroysuperfood();
      return result;
    }
    return result;
  }
  this.setturned = function(){
    //this.turned = 1;
  }
  this.grow = function(size){
    this.size++;
    score = score+size;
  }
  this.blow = function() {
    if (this.blowed === 1) return;
    this.blowed = 1;
    score = score - 1;
    this.shrink();
  }
  this.shrink = function(){
    this.size = this.size -1;
  }
  this.reset = function(){
    size = 1;
    tail = [];
    framerate = 10;
    level = 1;
    xp = 3;
  }
  this.dead = function(){
    for (var i = 0; i < this.tail.length-1; i++) {
      if (this.tail[i].x === this.x && this.tail[i].y === this.y) return true;
    }
    return false;
  }
  this.reset = function(){
    this.x = 0;
    this.y = 0;
    this.size = 1;
    this.tail = [];
  }
}
