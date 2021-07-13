var path;
var a,b,c,d,e,f;
var runner;
var wall1;
var wall2;

function preload(){
//loading images
  
  a=loadImage("bomb.png");
  b=loadImage("coin.png");
  c=loadImage("energyDrink.png");
   e=loadImage("path.png")
  f=loadAnimation("Runner-1.png","Runner-2.png");
}
function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(e);
  path.velocityY=4;
  path.scale=1.5;
  runner=createSprite(200,330);
  runner.addAnimation("runnung",f);
  runner.scale=0.1;
  wall1=createSprite(0,200,4,400);
  wall2=createSprite(400,200,4,400);
}


function draw() {
drawSprites();
path.velocityY=4;
path.scale=1.2;
if(path.y>400){
  path.y=height/2}
 // runner.velocityX=mouseX;
  wall2.visible=false;
  wall1.visible=false;
  runner.collide(wall2);
  runner.collide(wall1);
  if(keyWentDown("right")){
    runner.velocityX=2;
  }
  if(keyWentUp("right")){
    runner.velocityX=0
  }
  if(keyWentDown("left")){
    runner.velocityX=-2;
  }
  if(keyWentUp("left")){
    runner.velocityX=0
  }
  runner.x = World.mouseX;
  //runner.collide(js)




  
  
  
  
}
