const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var maxdrops = 100;
var dp = []
function preload(){
    
}

function setup(){
    var canvas = createCanvas(700,700);
   engine = Engine.create();
    world = engine.world;

  drop = new Drop(350,200,5)

 Engine.run(engine);   
}

function draw(){
    background(200)
    Engine.update(engine)

    for(var i=0; i<maxdrops; i++){
        dp.push(new Drop(random(0,400),random(0,400)))
    }

    drop.display()
    
}   

