
var monkey , monkey_running, groundSprite, gameState
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,300)  
  
monkey = createSprite(30,260,40,50)  
monkey.addAnimation("running",monkey_running)
monkey.scale = 0.1
groundSprite = createSprite(300,295,1200,10)
groundSprite.shapeColor = "lime"
FoodGroup = new Group()  
obstacleGroup = new Group()
score = 0   
gameState = "play"
}


function draw() {
background("cyan")

text("Score:"+score,50,20)  
  
if(gameState==="play"){  
score = score + Math.round(getFrameRate()/60);
  
monkey.velocityY = monkey.velocityY + 0.8
  
if(keyDown("space")&& monkey.y>250){
  monkey.velocityY = -10
}  
groundSprite.velocityX = -7
if(groundSprite.x<0){
  groundSprite.x = 300
}  
spawnBananas()
spawnObstacles()
   
if(obstacleGroup.isTouching(monkey)){
  gameState="end"
}  
}
monkey.collide(groundSprite)
drawSprites()  
}

function spawnBananas(){
 if(frameCount%60===0){
   banana = createSprite(600, Math.round(random(230,200)),20,20)
   banana.addImage(bananaImage)
   banana.scale = 0.09
   banana.velocityX = groundSprite.velocityX
   banana.lifetime = 200
   FoodGroup.add(banana)
 } 
}
function spawnObstacles(){
  if(frameCount%60===0){
    obstacle = createSprite(Math.round(random(300,600)),280,20,20)
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.09
    obstacle.velocityX = groundSprite.velocityX
    obstacleGroup.add(obstacle)
  }
}



