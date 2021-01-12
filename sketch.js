// namespacing
const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

// variables for Engine and World
var myEngine, myWorld;

// variables for body
var ball, ground;

function setup() {
  createCanvas(600, 600);

  //creating Engine
  myEngine = Engine.create();

  //creating World using Engine
  myWorld = myEngine.world;

  var ballOptions = {
    //how much it can bouce, its value
    restitution: 1.5,
  };
  // invisible ball creating by using matter.js
  ball = Bodies.circle(300, 100, 50, ballOptions);

  var groundOptions = {
    // so that it can not fall
    isStatic: true,
  };
  // invisible ground creating by using matter.js
  ground = Bodies.rectangle(300, 580, 600, 10, groundOptions);

  //adding the ball and ground in World
  World.add(myWorld, ball);
  World.add(myWorld, ground);
}

function draw() {
  background(0);

  // Updating the Engine // --- this is Important --- \\
  Engine.update(myEngine);

  // changing the mode of rect in center
  rectMode(CENTER);
  // changing the mode of ellipse in radius
  ellipseMode(RADIUS);
  // variable for position of ball and adding position
  var pos = ball.position;
  ellipse(pos.x, pos.y, 50, 50);

  rect(300, 580, 600, 10);
}
