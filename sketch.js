
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
	backImg = loadImage("sprites/sprite_0.png")
	boyImg = loadImage("sprites/boy.png")

}

function setup() {
	createCanvas(1600, 800);

	boySprite=createSprite(220, 610);
	boySprite.addImage(boyImg)
	boySprite.scale=0.16

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(800,792,1600,2)

	mango1 = new Mango(1530,300)
	mango2 = new Mango(1350,100)
	mango3 = new Mango(970,230)
	mango4 = new Mango(1020,380)
	mango5 = new Mango(920,310)
	mango6 = new Mango(1250,280)
	mango7 = new Mango(1200,100)
	mango8 = new Mango(1250,180)
	mango9 = new Mango(1100,270)
	mango10 = new Mango(1450,240)
	mango11 = new Mango(1350,300)
	mango12 = new Mango(1070,150)
	mango13 = new Mango(820,330)
	mango14 = new Mango(1140,350)

	stone = new Stone(130,515)

	hand = new Hand(stone.body,{x:131,y:516})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);  
  Engine.update(engine)

  background(backImg);

  textSize(40)
  fill("black")
  text("Press 'space' to get one more hit",50,40);
  
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();

  drawSprites();
  stone.display();
  hand.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);
  detectCollision(stone,mango12);
  detectCollision(stone,mango13);

 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    hand.fly()
}

function detectCollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
        console.log(lmango.r+lstone.r)
	console.log(distance)
	if(distance <= lmango.r + lstone.r){
		
		Matter.Body.setStatic(lmango.body,false);
  }
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:130,y:515});
		hand.attach(stone.body);
	}
}

