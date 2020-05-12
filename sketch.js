// You could have multiple flags like: start, launch to indicate the state of the game.

//const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
// The above line creates different constant variables for Engine, World, Bodies etc.
var engine,world;
var ground,tanker,wheel,ball;

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
var canvas= createCanvas(600,400);
engine=Engine.create();
world=engine.world;
ground=new Ground(300,400,800,70);
tanker=new Tanker(110,320,-PI/9,30);
wheel=new Wheel(100,340);
ball=new Ball(200,100);
}

function draw() {
// Remember to update the Matter Engine and set the background.
background(255,255,255);
Engine.update(engine);
ground.display();
tanker.display();
wheel.display();
ball.display();
}


//function keyReleased() {
    // Call the shoot method for the cannon.
//}