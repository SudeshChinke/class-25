const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world, canvas;
var bg;
var bird;
var pig1,pig2;
var box1,box2,box3,box4,box5;
var log1,log2,log3,log4;

function preload(){
    bg = loadImage("sprites/bg.png")
}

function setup(){
    canvas = createCanvas(1400,600);
    engine = Engine.create();
    world = engine.world;

    bird = new Bird(150,200);
    ground = new Ground(700,590,1400,20);

    box1 = new Box(850,550,50,50);
    box2 = new Box(1050,550,50,50);
    box3 = new Box(850,500,50,50);
    box4 = new Box(1050,500,50,50);
    box5 = new Box(950,450,50,50);


    pig1 = new Pig(950,550);
    pig2 = new Pig(950,500);

    log1 = new Log(950,530,260,PI/2);
    log2 = new Log(950,480,260,PI/2);
    log3 = new Log(925,450,100,PI/5);
    log4 = new Log(975,450,100,-PI/5);

}

function draw(){
    background(bg);
    Engine.update(engine);

    bird.display();
    ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    pig1.display();
    pig2.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();

}