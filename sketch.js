var box1 , box2,box3 , box4 , box5 , mr1 , mr2;

function setup() {
  createCanvas(800,400);
   box1 = createSprite(100, 100, 50, 50);
   box1.shapeColor = "green";
   box2 = createSprite(600,400,100,20);
   box2.shapeColor = "blue";
   box3 = createSprite(200,100,50,50);
   box3.shapeColor = "black";
   box4 = createSprite(300,100,50,50);
   box4.shapeColor = "yellow";
   box5 = createSprite(400,100,50,50);
   box5.shapeColor = "purple";
   mr1 = createSprite(200,200,50,50);
   mr1.shapeColor = "pink";
   //mr1.velocityX = 2;
   mr2 = createSprite(500,200,50,50);
   mr2.shapeColor = "brown";
   mr2.velocityX = -2;
   box1.debug = true;
   box2.debug = true;

}

function draw() {
  background(255,255,255);  
  box2.y = World.mouseY;
  box2.x = World.mouseX;
  
  // if (box1.y - box2.y <= box1.height / 2 + box2.height/2 && box2.y - box1.y <= box1.height / 2 + box2.height/2 && box1.x - box2.x <= box1.width / 2 + box2.width/2  && box2.x - box1.x <= box1.width / 2 + box2.width/2){
  //   box2.y =200;
  //   box2.x = 200;
  // }else{
  //   box2.y = World.mouseY;
  //   box2.x = World.mouseX;
  // } 
  if (isTouching(box4,box2)){
    box3.shapeColor = "red";
  }
  else {
    box3.shapeColor = "yellow";

  }
  // bounce(mr1,mr2);
  bounceOff(mr1,mr2);
  
  drawSprites();
}
