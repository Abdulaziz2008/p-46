
var jungle,jungleimage
var moglirunning,mogli
var invisibleground



function preload() {
jungleimage=loadImage("jungle.jpg")
moglirunning=loadAnimation("mogli2.png","moglii.png")
appleimage=loadImage("apple.png")
bananaimage=loadImage("banana.png")
cactusimage=loadImage("cactus.png")
gemsimage=loadImage("gems.png")
rockimage=loadImage("rock.png")
snakeimage=loadImage("snake.png")
mangoimage=loadImage("mango.png")
}

function setup() {
  createCanvas(1200,600);
 jungle= createSprite(-60, 200, 50, 50);
  jungle.addImage(jungleimage)
  jungle.velocityX=-4
  mogli= createSprite(90,460)
  mogli.addAnimation("running",moglirunning)
  mogli.scale=0.6
  invisibleground=createSprite(-60,600,600,1)
  obstaclesGroup=new Group ();
  
}

function draw() {
  background(255,255,255);  
  if (jungle.x<0){
  jungle.x=1200
  }

if(keyDown("UP_ARROW")){
mogli.velocityY=-17
}
mogli.velocityY=mogli.velocityY+0.9
  spawnFruits();
  spawnObstacles();
  mogli.collide(invisibleground)
  drawSprites();
}
function spawnObstacles(){
if(frameCount %150===0){
obstacle=createSprite(1200,500)
obstacle.scale=0.5
obstacle.velocityX=-4
var rand = Math.round(random(1,3))
switch(rand){
  case 1:obstacle.addImage(cactusimage)
  break
  case 2:obstacle.addImage(snakeimage)
  break
  case 3:obstacle.addImage(rockimage)
  break
}
obstaclesGroup.add(obstacle)
}

}
function spawnFruits(){
if(frameCount %250===0){
fruit=createSprite(1200,100)
fruit.scale=0.5
fruit.velocityX=-5
fruit.y=Math.round(random(100,300))
var rand =Math.round(random(1,3))
switch(rand){
case 1:fruit.addImage(bananaimage)
break
case 2:fruit.addImage(appleimage)
break
case 3:fruit.addImage(mangoimage)
}
}




}
