var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  
  fixedRect.velocityY = +5;
  rect1 = createSprite(300,50, 10,30)
  rect1.velocityX = -3
  rect1.shapeColor = "pink";
  rect1.debug = true;
  rect2 = createSprite(200,70,30,10)
  rect2.velocityX = 3
  rect2.shapeColor = "purple";
  rect2.debug = true;
}

function draw() {
  background(0,0,0);  

  Bounceoff(movingRect, fixedRect);
  Bounceoff(rect1, rect2);
  
  drawSprites();
}
