var fixedRect, movingRect;
var r1, r2 , r3 , r4

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect= createSprite(100,100,50,80);
  fixedRect.shapeColor=("red")
  movingRect.shapeColor=("red")
  r1 = createSprite(100,100,50,50)
  r2= createSprite(200 ,100,50,50)
  r3= createSprite(300,100,50,50)
  r4= createSprite(400,100,50,50)
  r1.shapeColor="red"
  r2.shapeColor="red"
  r3.shapeColor="red"
  r4.shapeColor="red"
}

function draw() {
  background(255,255,255);
  movingRect.x= mouseX;
  movingRect.y = mouseY;

  //m-400 < 25+25
  //m-400 < 50
  //450-400 < 50
  //449-400 < 50
  //49<50
  
  //m=450
  console.log(movingRect.x-fixedRect.x)

  if(isTouching(movingRect,r1)){
    movingRect.shapeColor="cyan"
    r1.shapeColor="cyan"
  }
  else{
    movingRect.shapeColor="red"
    r1.shapeColor="red"
  }
  
 

  drawSprites();
}

