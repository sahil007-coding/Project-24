
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;;

var engine, ground;
var dustbin1 , dustbin2, dustbin3, paper ;

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
    world = engine.world;


	ground = new Ground(600,670,1200,20);
	dustbin1=new Dustbin(750,650,40,160);
	dustbin2=new Dustbin(1110,650,40,160);
	dustbin3=new Dustbin(930,650,315,35);

	paper = new Paper(75,665,25,25);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
  
  Matter.Body.applyForce(paper.body,paper.body.position,{x:35,y:-35}) 
 
 
   }
  }


