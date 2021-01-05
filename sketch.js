

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;


function preload(){
  bg=loadImage("sprites/bg.jpg");
}

function setup() {
	createCanvas(1200,500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    box1 = new Box(1000,470,200,30);
    box2 = new Box(910,400,20,140);
    box3 = new Box(1060,400,20,140);

    ball1 = new Ball(210,470,20);

    dustbin1 = new Dustbin();

    gd1 = new Ground();

    sling = new Launcher(ball1.body,{x:200,y:200})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
  Engine.update(engine);

  

  box1.display();
  box2.display();
  box3.display();

  ball1.display();

  dustbin1.display();

  gd1.display();

  sling.display();

  drawSprites();
 
}


function mouseDragged(){
  Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
  
}


function mouseReleased(){
  sling.throw();
 // Matter.Body.applyForce(ball1.body,ball1.body.position,{x:1000,y:-4000})

}

