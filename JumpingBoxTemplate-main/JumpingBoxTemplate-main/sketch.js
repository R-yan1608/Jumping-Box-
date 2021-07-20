var canvas;
var music;
var ball;
var box1;
var box2,box3,box4;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    ball=createSprite(750,100,40,40);
    ball.shapeColor="white";
    ball.setVelocity(4,9);
    
    box1=createSprite(0,580,360,40);
    box1.shapeColor="red";

    box2=createSprite(295,580,200,40);
    box2.shapeColor="green";

    box3=createSprite(515,580,200,40);
    box3.shapeColor="black";
    
    box4=createSprite(740,580,220,40);
    box4.shapeColor="blue";

}

function draw() {
    background(rgb(169,169,169));

    
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    
    if(ball.isTouching(box1)&& ball.bounceOff(box1)){

        ball.shapeColor="red";
        music.play();
    }
    
    if(ball.isTouching(box2)&& ball.bounceOff(box2)){

        ball.shapeColor="green";
        
    }

    if(ball.isTouching(box3)&& ball.bounceOff(box3)){

        ball.shapeColor="black";
        ball.setVelocity(0,0);
    }

    if(ball.isTouching(box4)&& ball.bounceOff(box4)){

        ball.shapeColor="blue";
        
    }
    


    drawSprites();

}
