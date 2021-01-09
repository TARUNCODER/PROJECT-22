var starshiny, fairyImg, bg;
var fairy , fairyVoice;
var star, starshape;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starshiny = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starshiny);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starshape = Bodies.circle(650 , 30 , fairy.x ,{restitution:0.5, isStatic:true});
	World.add(world, starshape);
	
	Engine.run(engine);


}


function draw() {
  background(bg);

  star.x= starshape.position.x 
  star.y= starshape.position.y 


	//if(star.x)

  if(star.y > 470 && starshape.position.y > 471 ){
	  	Matter.Body.setStatic(starshape,true);
		star.y = random(50, 400);
		star.x = random(50, 750);
		starshape.position.y = star. y + 1;
		starshape.position.x = star. x + 1;
  }
  

	console.log(star.x+'~~~~'+star.y);

  drawSprites();

}

function keyPressed() {

	if(keyCode === RIGHT_ARROW){
           fairy.x = fairy.x + 20;
	}
	
        if(keyCode === LEFT_ARROW){
           fairy.x = fairy.x - 20;
	}

	if (keyCode === DOWN_ARROW) {
		if(Matter.Body.setStatic(starshape,false)){
			Matter.Body.setStatic(starshape,true);
			star.y = random(50, 400);
			star.x = random(50, 750);
			starshape.position.y = star. y + 1;
			starshape.position.x = star. x + 1;
Matter.Body.setStatic(starshape,true);		} 
		else{
			//Matter.Body.setStatic(starshape,false);
		}
		fall();
	}
}

function fall(){

	star.position.x = fairy.x - 25;
	star.position.y = fairy.y - 35;
}