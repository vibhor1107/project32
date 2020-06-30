const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var score=0;
var engine, world;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world; 
 
   ground1 = new Ground(400,200,200,20)
   ground2= new Ground(400,400,800,40)
   box1 = new Box(400,160,20,20)
  box2 = new Box(420,160,20,20)
  box3 = new Box(440,160,20,20)
  box4= new Box(380,160,20,20)
  box5 = new Box(360,160,20,20)
  box6=new Box(380,140,20,20)
  box7= new Box(400,140,20,20)
  box8= new Box(420,140,20,20)
  box9 = new Box(400,140,20,20)

polygon=new Pologon(50,200,40,6);
  slingShot = new SlingShot(polygon.body,{x:100,y:200})
}

function draw() {
  if(backgroundImg)
        background(backgroundImg);
  Engine.update(engine);
  text("SCORE:"+score,700,40)
  ground1.display();
  ground2.display();
  box1.display();
  box1.score();

  box2.display();
  box2.score();

  box3.display();
  box3.score();

  box4.display();
  box4.score();

  box5.display();
  box5.score();

  box6.display();
  box6.score();

  box7.display();
  box7.score();

  box8.display();
  box8.score();

  box9.display();
  box9.score();

  polygon.display();
  slingShot.display();
  drawSprites();
}

function mouseDragged(){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});  
}


function mouseReleased(){
    slingShot.fly();
}
function keyPressed(){
  if (keyCode==32)
{
    slingShot.attach(polygon.body)
}}


async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=19){
      bg.shapeColor="blue";
  }
  else{
      bg.schapeColor="black";
  }

  backgroundImg = loadImage(bg);
 // console.log(backgroundImg);
}