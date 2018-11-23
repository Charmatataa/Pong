let bX, bY;
let dirX, dirY;
let speed = 5;

let paddleWidth = 8;

var hit = false;
let randInt = [-speed,speed];

function setup() {
  createCanvas(windowWidth, windowHeight);
  bX = width/2;
  bY = height/2;

  dirX = random(randInt);
  dirY = random(randInt);
}

function moveBall(){
	bX += dirX;
  bY += dirY;
}

function gameOver(){
	fill(255,0,0);
	textSize(60);
	textAlign(CENTER);
	text("Game Over", width/2, height/2);
	textSize(20);
	text("Refresh the page to continue", width/2, height/2 + 60)
}

function draw() {
  background(0);

  //Ball
	fill(255);
  moveBall();
  ellipse(bX, bY, 20);

  //Left paddle
  rect(5, constrain(mouseY,0,height -50), paddleWidth, 50);

	//Check if ball collides with paddle, true if yes
	hit = collideRectCircle(5, constrain(mouseY,0,height -50), paddleWidth, 50,bX, bY, 20);

  //Wall bounce logic
  if(bX >= width){ //Right wall
  	dirX = -speed;
	}else if (hit){ //Left wall
  	dirX = speed;
  }else if(bX <= 0){
		gameOver();
	}
  if(bY >= height){ //Lower wall
  	dirY = -speed;
  } else if(bY <= 0){ //Upper wall
  	dirY = speed;
  }
}
