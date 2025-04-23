// Catch the Seven Chakras!

var ballx = 300;
var bally = 300;
var ballSize = 60;
var score = 0;
var img1, img2, img3, img4, img5, img6, img7;
var gameState = "start";

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize (25);
} // end of set up

function preload() {
  img1 = loadImage('https://casey-schmid.github.io/images/root.png');
  img2 = loadImage('https://casey-schmid.github.io/images/sacral.png');
  img3 = loadImage('https://casey-schmid.github.io/images/solarplexus.png');
  img4 = loadImage('https://casey-schmid.github.io/images/heart.png');
  img5 = loadImage('https://casey-schmid.github.io/images/throat.png');
  img6 = loadImage('https://casey-schmid.github.io/images/thirdeye.png');
  img7 = loadImage('https://casey-schmid.github.io/images/crown.png');
}

function draw() {
  if(gameState == "L1"){
    levelOne();
  }
  if(gameState == "L2"){
    levelTwo();
  }
  if(gameState == "L3"){
    levelThree();
  }
  if(gameState == "L4"){
    levelFour();
  }
  if(gameState == "L5"){
    levelFive();
  }
  if(gameState == "L6"){
    levelSix();
  }
  if(gameState == "L7"){
    levelSeven();
  }
  if(gameState == "win"){
    win();
  }

text(("Score: " + score), width/2, 60);
} // end of draw

function levelOne(){
  background (0, 153, 51);
  text("Level 1: The Root", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if(score>=7){
    gameState = "L2";
  }
  nline(ballx+20, bally+20, mouseX, mouseY);
  image(img1, ballx, bally);
  //line(ballx, bally, mouseX, mouseY);
  
} // end of level 1
  
function levelTwo(){
  background (0, 153, 204);
  text("Level 2: The Sacral", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  
  if(score>=14){
    gameState = "L3";
  }
  
  nline(ballx+20, bally+20, mouseX, mouseY);
  image(img2, ballx, bally);
  //line(ballx, bally, mouseX, mouseY);
  
} // end of level 2

function levelThree(){
  background (255, 71, 26);
  text("Level 3: The Solar Plexus", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  
  if(score>=21){
    gameState = "L4";
  }
  
  nline(ballx+20, bally+20, mouseX, mouseY);
  image(img3, ballx, bally);
  //line(ballx, bally, mouseX, mouseY);
  
} // end of level 3

function levelFour(){
  background (204, 204, 255);
  text("Level 4: The Heart", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  
  if(score>=28){
    gameState = "L5";
  }
  
  nline(ballx+20, bally+20, mouseX, mouseY);
  image(img4, ballx, bally);
  //line(ballx, bally, mouseX, mouseY);
  
} // end of level 4

function levelFive(){
  background (217, 217, 217);
  text("Level 5: The Throat", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  
  if(score>=35){
    gameState = "L6";
  }
  
  nline(ballx+20, bally+20, mouseX, mouseY);
  image(img5, ballx, bally);
  //line(ballx, bally, mouseX, mouseY);
  
} // end of level 5

function levelSix(){
  background (153, 153, 255);
  text("Level 6: The Third Eye", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  
  if(score>=42){
    gameState = "L7";
  }
  
  nline(ballx+20, bally+20, mouseX, mouseY);
  image(img6, ballx, bally);
  //line(ballx, bally, mouseX, mouseY);
  
} // end of level 6

function levelSeven(){
  background (204, 255, 255);
  text("Level 7: The Crown", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  
  if(score>=70){
    gameState = "win";
  }
  
  nline(ballx+20, bally+20, mouseX, mouseY);
  image(img7, ballx, bally);
  //line(ballx, bally, mouseX, mouseY);
  
} // end of level 7
