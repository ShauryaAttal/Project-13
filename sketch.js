var garden,rabbit;
var gardenImg,rabbitImg;
var apple;
var appleImg;
var leaf;
var leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;
  var rand = Math.round(random(1,3));
  console.log(rand);
  if (frameCount % 80 == 0) {
   if (rand == 1) {
      createApples();
   }
  else {
    createLeaves();
  }
}




drawSprites();
}

function createApples() {
  apple = createSprite (Math.round(random(50,350),40,10,10));
  apple.addImage(appleImg);
  apple.velocityY = 3;
  apple.scale = 0.075;
  apple.depth = rabbit.depth;
  rabbit.depth = rabbit.depth + 1;
}

function createLeaves() {
  leaf = createSprite (Math.round(random(50,350),40,10,10));
  leaf.addImage(leafImg);
  leaf.velocityY = 3;
  leaf.scale = 0.075;
  leaf.depth = rabbit.depth;
  rabbit.depth = rabbit.depth + 1;
}