
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var background,bgImg
var butterfly,butterflyImg
var girl,girlImg


function preload() {
  bgImg = loadImage("./assets/background.jpeg")
  butterflyImg = loadImage("./assets/butterfly.jpeg")
  girlImg = loadImage("./assets/girl.png")
}


function setup() {
  createCanvas(1300,800);

  engine = Engine.create();
  world = engine.world;

  girl = new Girl(width/2,700,width,height);
  

  
  
  


  imageMode(CENTER)
  
}


function draw() 
{
  background(51);

  image(bgImg,500,400,1700,800);
  Engine.update(engine);

  girl.display()

  



}


function keyPressed(){
  if (keyCode == 32){

    console.log("hi")

}
}

