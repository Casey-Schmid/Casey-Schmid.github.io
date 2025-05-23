var img;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var img9;
var initials ='cls'; // my initials
var choice = '1'; // starting choice
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('star.png');  // star.png needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://casey-schmid.github.io/images/star.png');
  img2 = loadImage('https://casey-schmid.github.io/images/twohearts.png');
  img3 = loadImage('https://casey-schmid.github.io/images/diamond.png');
  img4 = loadImage('https://casey-schmid.github.io/images/cherryblossom.png');
  img5 = loadImage('https://casey-schmid.github.io/images/palette.png');
  img6 = loadImage('https://casey-schmid.github.io/images/snowflake.png');
  img7 = loadImage('https://casey-schmid.github.io/images/butterfly.png');
  img8 = loadImage('https://casey-schmid.github.io/images/dolphin.png');
  img9 = loadImage('https://casey-schmid.github.io/images/rainbow.png');
}

function setup() {
createCanvas(600, 600);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
    // Style the line.
    stroke(255);
    strokeWeight(300);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '2') { // second tool
    // Style the line.
    stroke(255, 0, 0);
    strokeWeight(200);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '3') { // third tool
    // Style the line.
    stroke(255, 140, 26);
    strokeWeight(150);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '4') { // fourth tool
    stroke(255, 255, 0);
    strokeWeight(150);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (key == '5') { // fifth tool
    stroke(0, 230, 0);
    strokeWeight(80);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '6') { // sixth tool
    stroke(92, 214, 214);
    strokeWeight(40);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '7') { // seventh tool
    stroke(0, 204, 255);
    strokeWeight(50);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '8') { // eigth tool
    stroke(0, 0, 255);
    strokeWeight(70);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '9') { // nine tool
    stroke(153, 0, 255);
    strokeWeight(50);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '0') { // tenth tool
    stroke(255, 0, 255);
    strokeWeight(60);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == 'a' || toolChoice == 'A') { // g places the image we pre-loaded
    image(img, mouseX, mouseY, 50, 50);
    
  } else if (toolChoice == 'b' || toolChoice == 'B') { // g places the image we pre-loaded
    image(img2, mouseX, mouseY, 50, 50);
    
  } else if (toolChoice == 'c' || toolChoice == 'C') { // g places the image we pre-loaded
    image(img3, mouseX, mouseY, 50, 50);
    
  } else if (toolChoice == 'd' || toolChoice == 'D') { // g places the image we pre-loaded
    image(img4, mouseX, mouseY, 50, 50);
    
  } else if (toolChoice == 'e' || toolChoice == 'E') { // g places the image we pre-loaded
    image(img5, mouseX, mouseY, 50, 50);
    
  } else if (toolChoice == 'f' || toolChoice == 'F') { // g places the image we pre-loaded
    image(img6, mouseX, mouseY, 50, 50);
    
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img7, mouseX, mouseY, 50, 50);
    
  } else if (toolChoice == 'h' || toolChoice == 'H') { // g places the image we pre-loaded
    image(img8, mouseX, mouseY, 50, 50);
    
  } else if (toolChoice == 'i' || toolChoice == 'I') { // g places the image we pre-loaded
    image(img9, mouseX, mouseY, 50, 50);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="j";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
