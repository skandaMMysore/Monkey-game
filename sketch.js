
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  foodGroup = new Group();
  obstacleGroup = new Group();
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);

  
}


function draw() {
  background("white");
  var survivalTime = 0;
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+ score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("SurvivalTime: "+survivalTime,100,50);
  
  ground.x = ground.width/2;
  food();
  obstacles();
  
  if(keyDown("space")){
    monkey.velocityY = -2;
    
   
  }
  if(keyDown("b")){
    monkey.y = monkey.y+7;
  }
  monkey.collide(ground);
  
  
   
  
 
 drawSprites();  
}
function food(){
  if(frameCount % 80 === 0){
  var banana = createSprite(200,200,20,20);
  banana.addImage(bananaImage);
  banana.y = Math.round(random(120,200));
    banana.scale = 0.1;
    
    banana.lifetime = 200;
    
  banana.velocityX = -2;
  foodGroup.add(banana);
  }
}
function obstacles(){
  if(frameCount % 300 === 0){
    var obstacle = createSprite(200,320,2,2);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -2;
    
    obstacle.scale = 0.1;
    
    obstacle.lifetime = 400;
    obstacleGroup.add(obstacle);
  }
}







