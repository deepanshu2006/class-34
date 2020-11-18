const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20, ground;
var ball, rope

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
   ball= new Ball(200,200,100,100);
box1= new box(900,100,80,80);
box2= new box(900,100,80,80);
box3= new box(900,100,80,80);
box4= new box(900,100,80,80);
box5= new box(900,100,80,80);
box6= new box(900,100,80,80);
box7= new box(900,100,80,80);
box8= new box(900,100,80,80);
box9= new box(900,100,80,80);
box10= new box(900,100,80,80);
box11=new box(700,200,100,100);
box12=new box(700,200,100,100);
box13=new box(700,200,100,100);
box14=new box(700,200,100,100);
box15=new box(700,200,100,100);
box16=new box(700,200,100,100);
box17=new box(700,200,100,100);
box18=new box(700,200,100,100);
box19=new box(700,200,300,300);
box20=new box(700,200,300,300);
ground= new Ground(500,600,3000,40);
rope = new Rope(ball.body,{x:500,y:50});
}
function draw(){
background("pink");
Engine.update(engine);
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
ground.display();
rope.display();
ball.display();




}

function mouseDragged(){
Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});


}