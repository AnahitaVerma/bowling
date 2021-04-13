
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bground,backgroundimg
var pin1
var  bowlingball 
var gameState = "PLAY"

function preload()
{
 backgroundimg = loadImage("images/bowling track.jpg")
}

function setup() {

	createCanvas(1279, 609);


	engine = Engine.create();
	world = engine.world;

  //ground1 = new gd(620,80,300,200)

  var options = {
    isStatic :true ,
    fiction: 1.0
  } 
  ground1 = Bodies.rectangle(660,110,170,3,options);
   World.add(world,ground1); 
   
   var option1 = {
    isStatic :true ,
    fiction: 1.0
  } 
  ground2 = Bodies.rectangle(660,130,100,3,option1);
   World.add(world,ground2); 
   
   var option2 = {
    isStatic :true ,
    fiction: 1.0
  } 
  ground3 = Bodies.rectangle(660,150,80,3,option2);
   World.add(world,ground3); 

   var option3 = {
    isStatic :true ,
    fiction: 1.0
  } 
  ground4 = Bodies.rectangle(660,170,50,3,option3);
   World.add(world,ground3); 
   

  bowlingball = new ball(650,500,30)
 
	
pin1 = new Pins(600,80,30,60)
pin2 = new Pins(637,80,30,60)
pin3 = new Pins(678,80,30,60)
pin4 = new Pins(720,80,30,60)
pin5 = new Pins(620,100,30,60)
pin6 = new Pins(659,100,30,60)
pin7 = new Pins(699,100,30,60)
pin8 = new Pins(640,120,30,60)
pin9 = new Pins(680,120,30,60)
pin10 = new Pins(660,140,30,60)

Slingshot1 = new Slingshot(bowlingball.body,{x:650, y:500})


	Engine.run(engine);
  
}


function draw() {

  background(backgroundimg)

  
  
  bowlingball.display() 

  pin1.display()
  pin2.display()
  pin3.display()
  pin4.display()
  pin5.display()
  pin6.display()
  pin7.display()
  pin8.display()
  pin9.display()
  pin10.display()
  
 Slingshot1.display()
 
 //ground1.display()
  drawSprites();
 

 rectMode(CENTER) 

  rect(ground1.position.x,ground1.position.y,170,3) 
  rectMode(CENTER) 

  rect(ground2.position.x,ground2.position.y,100,3) 
  rectMode(CENTER) 

  rect(ground3.position.x,ground3.position.y,80,3) 

  
  rectMode(CENTER) 

  rect(ground4.position.x,ground4.position.y,50,3) 


}

function keyPressed(){

  if(keyCode === UP_ARROW){

    Matter.body.applyForce(bowlingball.body, bowlingball.body.position, {x: -100, y:-100})
  }
}

function mouseDragged(){
  if(gameState === "PLAY")
  {
    Matter.Body.setPosition(bowlingball.body, {x: mouseX , y: mouseY});
    //  Matter.body.applyForce(bowlingball.body, bowlingball.body.position, {x: -100, y:-100})
  }
}


function mouseReleased(){
  Slingshot1.fly();
  gameState = "released"
 Matter.body.setStatic(pin1,false)
}

