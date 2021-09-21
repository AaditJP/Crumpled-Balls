
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball 
var ground1
var leftWall
var rightWall

function preload()
{
	
}



function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

	ground1=new ground(400,650,800,20);
	var ball_options={
		restitution:0.3,
		friction:0,
		density:1.2
}     
     

	
   leftWall = new ground(500,610,20,100);
   rightWall = new ground(650,610,20,100);


	//Create the Bodies Here.
	ball = Bodies.circle(200,200,20,ball_options)
	World.add(world,ball);

ellipseMode(RADIUS);
	
  
}


function draw() {
  
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  ellipse(ball.position.x,ball.position.y,20,20);
  ground1.display();

leftWall.display()
rightWall.display();
 
}

function keyPressed(){

if(keyCode === UP_ARROW){

 Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})

}

}



