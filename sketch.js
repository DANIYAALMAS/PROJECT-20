var bg,sleep, brush, gym, eat, bath, move;
var astro;

function preload(){
  bg= loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
  eat = loadAnimation("images/eat1.png","images/eat2.png");
  bath = loadAnimation("images/bath1.png","images/bath2.png");
 move = loadAnimation("images/move1.png");
}

function setup() {
  createCanvas(600, 500);
  
  astro = createSprite(300,230);
  astro .addAnimation("sleeping", sleep);
 astro .scale = 0.1;
  
}

function draw() {
  background(bg);
  drawSprites();

  textSize(20);
  fill("white")
  text("Instructions:",20, 35);
  textSize(15);
  text("Up Arrow = Brushing",20, 55);
  text("Down Arrow = Gymming",20, 70);
  text("Left Arrow = Eating",20, 85);
  text("Right Arrow = Bathing",20, 100);
  text("m key = Moving",20, 115);
  
  edges=createEdgeSprites();
  astro.bounceOff(edges);
  
  if(keyDown("UP_ARROW")){
    astro .addAnimation("brushing", brush);
   astro.changeAnimation("brushing");
   astro.y = 350;
   astro.velocityX = 0;
   astro.velocityY = 0;
  }
  
  if(keyDown("DOWN_ARROW")){
    astro.addAnimation("gymming", gym);
   astro .changeAnimation("gymming");
   astro .y = 350;
   astro .velocityX = 0;
  astro.velocityY = 0;
  }
  
  if(keyDown("LEFT_ARROW")){
    astro.addAnimation("eating", eat);
    astro.changeAnimation("eating");
    astro.x = 150;
    astro.y = 350;
    astro.velocityX = 0.5;
    astro.velocityY = 0.5;
  }
  
  if(keyDown("RIGHT_ARROW")){
    astro.addAnimation("bathing", bath);
    astro.changeAnimation("bathing");
    astro.x = 300;
    astro.velocityX = 0;
    astro.velocityY = 0;
  }

  if(keyDown("m")){
    astro.addAnimation("moving", move);
    astro.changeAnimation("moving");
    astro.velocityX = 1;
    astro.velocityY = 1;
  }

}
