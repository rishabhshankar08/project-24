const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase;
var computer, computerBase;
var playerArcher, computerArcher;
var arrow;
var playerArrow, computerArrow;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
  playerArcher = new Playerarcher(345,player.body.position.y-30,120,120);
  playerArrow = new Playerarrow(playerArcher.body.position.x,playerArcher.body.position.y,30,10);
  //Create Player Archer Object

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerArcher = new ComputerArcher(
    width - 340,
    computerBase.body.position.y - 180,
    120,
    120
  );
  //Create an arrow Object
  
  
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerArcher.display();
  computerArcher.display()
  
  if(keyIsDown == "UP" && playerArcher.body.angle < 1.77 ){
    angleValue = 0.1
  }else{
    angleValue = -0.1
  }
  if(keyIsDown == "DOWN" && playerArcher.body.angle > 1.47){
    angleValue = -0.1
  }else{
    angleValue = 0.1
  }
  //Display arrow();
  playerArrow.display();

  function keyPressed(){
  if(keyCode === "space"){
    playerArrow.shoot();
  }

  }
}



