const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;

var striker, slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";

var score=0; 



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    

    box1 = new Box(700,340,70,70);
    box2 = new Box(930,340,70,70);
    
    box3 = new Box(760,280,70,70);
    box4 = new Box(870,280,70,70);
    

    

    box5 = new Box(820,340,70,70);
    

    striker = new Striker(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(striker.body,{x:200, y:50});

    //console.log(bird);
}

function draw(){
    background(0)
    
    noStroke();
    textSize(35)
    fill("white")
    text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    box5.display();
    ground.display();
    

    box3.display();
    box4.display();
    

    
    

    striker.display();
    slingshot.display();
    
    
  
  
  
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(striker.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32&& bird.body.speed<1){
       bird.trajectory=[];
       Matter.Body.setPosition(bird.body,{x:200,y:50})
       slingshot.attach(bird.body);
    }
}

