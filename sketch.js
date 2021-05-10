
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var Ball;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
  Ball= new ball(300,650,50)
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
 
  groundObject.display();
  dustbinObj.display();
  Ball.display();
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.applyForce(Ball.body,Ball.body.position,{x:150,y:-150})

	}
}
