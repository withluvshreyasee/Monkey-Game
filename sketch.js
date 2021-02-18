var survivalTime= 0, score= 0;
var monkey , monkey_running;
var ground;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var PLAY = 0;
var END = 1;
var gameState = PLAY;

function preload(){
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
  //Monkey
  monkey= createSprite(80,315, 20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale= 0.1;
  
  //Ground
  ground= createSprite(400,350,900,10);
  ground.velocityX= -4;
  ground.x= ground.width/2;
  console.log(ground.x);

  bananaGroup= new Group();
  obstacleGroup= new Group();
}

function draw() {
  background(255);
  stroke("white");
  textSize(20);
  fill("white");
  text("SURVIVAL TIME: "+score, 470, 20);
  
  if (ground.x<0){
     ground.x = ground.width/2;
  }
  
    if(keyDown("space")) {
      monkey.velocityY = -12; 
    }
  
    monkey.velocityY = monkey.velocityY + 0.8;
    monkey.collide(ground);
    bananas();
    obstacles();
    drawSprites(); 
}

function bananas(){
  if (frameCount%80 === 0){
    
    banana = createSprite(620,120, 50, 50 )
    banana.addImage("bananaImage", bananaImage);
    banana.scale = 0.1;
    banana.velocityX =-(4+score/100);           
    banana.lifetime = 220;
    bananaGroup.add(banana);
  }
}

function obstacles(){
  if (frameCount%150 == 0){
    obstacle = createSprite(620,320,50,50);
    obstacle.addImage("obstacleImage", obstacleImage);
    obstacle.setCollider("circle", 0, 0, 180);
    obstacle.scale = 0.13;
    obstacle.velocityX = -(4+score/100);
    obstacle.lifetime = 220;
    obstacleGroup.add(obstacle);
    }
}