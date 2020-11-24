const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var score = 0;

var groundv,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,p,shot;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

groundv = new Ground(600,300,150,10);

b1 = new Box(540,295,30,30);
b2 = new Box(570,295,30,30);
b3 = new Box(600,295,30,30);
b4 = new Box(630,295,30,30);
b5 = new Box(660,295,30,30);

b6 = new Box(555,275,30,30);
b7 = new Box(585,275,30,30);
b8 = new Box(615,275,30,30);
b9 = new Box(645,275,30,30);

b10 = new Box(570,255,30,30);
b11 = new Box(600,255,30,30);
b12 = new Box(630,255,30,30);

b13 = new Box(585,230,30,30);
b14 = new Box(615,230,30,30);

b15 = new Box(600,215,30,30);

p = new Box(200,200,40,40);

shot = new Rope(p.body,{x:100 ,y:200 })

  //createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");  
 
  
Engine.run(engine);

text("SCORE :"+ score,700,40);

groundv.display();
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();
b9.display();
b10.display();
b11.display();
b12.display();
b13.display();
b14.display();
b15.display();
p.display();

b1.score();
b1.score();
b1.score();
b1.score();
b1.score();
b1.score();
b1.score();
b1.score();
b1.score();
b1.score();
b1.score();
b1.score();
b1.score();
b1.score();
b1.score();

  drawSprites();
}

function mouseDragged(){
	Matter.Body.setPosition(p.body,{x:mouseX,y:mouseY})
	
	}
	
	function mouseReleased(){
		shot.fly();
	}
	

function keyPressed(){
if(keyCode === 32){
Matter.Body.setPosition(p.body,{x : 200,y : 200}); 
shot.attach(p.body);
}

}

