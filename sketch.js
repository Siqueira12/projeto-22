const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var canvas;
var arco, Base, arqueiro;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
var options={
  isStatic:true
}
Base = Bodies.rectangle(200,350,180,150,options)
 World.add(world,Base)
  
 arqueiro = Bodies.rectangle(250,200,50,180,options)
 World.add(world,arqueiro)



}

function draw() {
  background(backgroundImg);

  //exibir a imagem do jogador usando a função image()
image(baseimage,Base.position.x,Base.position.y,180,150)

  //exibir a imagem da base do jogador usando a função image()
image(playerimage,arqueiro.position.x,arqueiro.position.y,50,180)

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}
