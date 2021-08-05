const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1,stand2,ground;
var slingshot;
var ball,polygon;

function setup() {
  var canvas = createCanvas(900, 400);
  engine = Engine.create();
    world = engine.world;
  
    ground = new Ground();
    stand1 = new Ground(380,300,270,10);
    stand2 = new Ground(700,200,200,10);

    box1 = new Box(280,275,30,40);
    box2 = new Box(310,275,30,40);
    box3 = new Box(340,275,30,40);
    box4 = new Box(370,275,30,40);
    box5 = new Box(400,275,30,40);
    box6 = new Box(430,275,30,40);
    box7 = new Box(460,275,30,40);

    box8 = new Box(310,235,30,40);
    box9 = new Box(340,235,30,40);
    box10 = new Box(370,235,30,40);
    box11 = new Box(400,235,30,40);
    box12 = new Box(430,235,30,40);

    box13 = new Box(340,195,30,40);
    box14 = new Box(370,195,30,40);
    box15 = new Box(400,195,30,40);

    box16 = new Box(370,155,30,40);

    boxes1 = new Box(640,175,30,40);
    boxes2 = new Box(670,175,30,40);
    boxes3 = new Box(700,175,30,40);
    boxes4 = new Box(730,175,30,40);
    boxes5 = new Box(760,175,30,40);

    boxes6 = new Box(670,135,30,40);
    boxes7 = new Box(700,135,30,40);
    boxes8 = new Box(730,135,30,40);

    boxes9 = new Box(700,95,30,40);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingshot = new SlingShot(this.polygon,{x:100, y:200});
   
  
}

function draw() {
  background("black");  
  text(mouseX+ ',' +mouseY,20,50);
  Engine.update(engine);

  strokeWeight(2);
  stroke(15);

  stand1.display();
  stand2.display();

  stroke(15);
  fill("light blue");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  stroke(15);
  fill("pink");
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  stroke(15);
  fill("blue");
  box13.display();
  box14.display();
  box15.display();

  stroke(15);
  fill("grey");
  box16.display();

  stroke(15);
  fill("blue");

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}