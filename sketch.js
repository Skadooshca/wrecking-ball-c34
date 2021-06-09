const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint

function setup() {
  createCanvas(1200,800);
engine=Engine.create()
world=engine.world
ground= new Ground(600,height,1200,20)
ball=new Ball(200,600,60) 
rope=new Rope(ball.body,{x:200,y:200})
box1=new Box(500,100,70,70)
box2=new Box(500,200,70,70)
box3=new Box(500,300,70,70)
box4=new Box(500,400,70,70)
box5=new Box(500,500,70,70)
box6=new Box(500,600,70,70)
box7=new Box(500,700,70,70)
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  ground.display()
  ball.display()
  rope.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
}
function keyPressed(){
  if(keyCode===32){
Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-90})
  }
}