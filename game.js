var snake = new Snake();
var food = new Food();
var framerate = 10;
var level = 1;
var xp = 5;
var score = 0;
var oldframerate = 10
let timer = 5;
var superfoodvisible = 0;
function setup(){
  pixelDensity(1);
  var canvas = createCanvas(500, 500);
  canvas.parent('yagasnake');
  frameRate(framerate);
  food.setup();
}
function draw(){
  background(220);
  food.draw();
  snake.draw();
  if (superfoodvisible){
    if (frameCount % 30 == 0 && timer > 0) {
      timer --;
    }
    if (timer == 0) {
      food.destroysuperfood();
    }
  }

  if (snake.feed(food)){
    score++;
    food.color = [20+score,80+score,20+score];
    food.setup();
    food.createsuperfood();
    level++;
    if (level % xp){
      framerate++;
      frameRate(framerate);
    }

  }
  if (snake.dead()) {
    textSize(70);
    fill(0, 10, 10, 50);
    text("Skor : " + score, 20, 280);
    frameRate(0);
  }
  textSize(16);
  fill(0, 102, 153, 51);
  text("Skor : " + score, 400, 480);
}
function keyPressed() {
  if ((keyCode === LEFT_ARROW  || keyCode === 65) && snake.dirY !== 0 && snake.turned == 0) {
    snake.setX(-1);
    snake.setY(0);
  } else if ((keyCode === RIGHT_ARROW  || keyCode === 68) && snake.dirY !== 0 && snake.turned == 0) {
    snake.setX(1);
    snake.setY(0);
  } else if ((keyCode === UP_ARROW || keyCode === 87)&& snake.dirX !== 0 && snake.turned == 0) {
    snake.setX(0);
    snake.setY(-1);
  } else if ((keyCode === DOWN_ARROW || keyCode === 83)&& snake.dirX !== 0 && snake.turned == 0) {
    snake.setX(0);
    snake.setY(1);
  } else if (keyCode === 32) {
    snake.blow();
  } else if (keyCode === 80) {
    if (framerate > 10) {
      oldframerate = framerate;
      framerate = 0;
      frameRate(framerate);
    }else {
      framerate = oldframerate;
      frameRate(oldframerate);
    }
  } else if (keyCode === 82) {
    frameRate(10);
    framerate = 10;
    level = 1;
    xp = 3;
    score = 0;
    framerate = 10;
    snake.size = 1;
    snake.tail = [];
    food.setup();
    snake.setX(1);
    snake.setY(0);
    text("Skor : " + score, 20, 280);
  }

}
