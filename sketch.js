const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var paper;
var line1,line2,line3;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.World;

  ground = new Ground(600,height,1200,20);

  paper = new Paper(25,25,30,24,);
  line1 = new Dustbin(width,height,320,24);

  line2 = new Dustbin(width,height,360,24);

  line3 = new Dustbin(width,height,340,21);
}

function draw() {
  background(0); 
  Engine.update(engine);

  ground.display();
  paper.display();

  line1.display();

  line2.display();

  line3.display();
  
  drawSprites();
}