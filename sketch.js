const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.MouseConstraint;

var ball;
var roof, rope;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth / 2,windowHeight /1.5);
  engine = Engine.create();
	world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt)
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse : canvasmouse
  }
  mConstraint = MouseConstraint.create(engine.options)
  World.add(world,mConstraint)

  

	

function draw() {
  rectMode(CENTER);
  background("lightgrey");

  function mouseDragged(){
    Matter.Body.setPosition(pendulum1.Body,{x:mouseX,y:mouseY})
  }
  
  drawSprites();
 
}
}
