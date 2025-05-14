function setup() {
createCanvas(1200, 800);
}
function draw() {
background(0, 0, 51); // first layer of night sky

//Sky

//background highlight 1
noStroke();
fill (0, 0, 102) // second layer of night sky
rect(0, 100, 1200, 700);

//background highlight 2
noStroke();
fill (0, 0, 153) // third layer of night sky
rect(0, 190, 1200, 700);

//background highlight 3
noStroke();
fill (0, 0, 255) // fourth layer of sunrise
rect(0, 250, 1200, 700);

//background highlight 4
noStroke();
fill (0, 102, 255) // fifth layer of sunrise
rect(0, 300, 1200, 700);

// Moon

//Moon 1
noStroke();
fill (204, 204, 204) // first layer of sun
ellipse(600, 200, 150, 150);

//Moon 2
noStroke();
fill (230, 230, 230) // Second layer of sun
ellipse(600, 200, 125, 125);

//Moon 3
noStroke();
fill (255, 255, 255) // Third layer of sun
ellipse(600, 200, 100, 100);

//Ocean

//Ocean
noStroke();
fill (0, 0, 102) // Ocean base color
rect(0, 360, 1200, 700);

//Ocean Reflection Layer 1

//Ocean Reflection Layer 1 A
noStroke();
fill (0, 0, 153) // Ocean Reflection layer 1
ellipse(600, 396, 400, 70);

//Ocean Reflection Layer 1 B
noStroke();
fill (0, 0, 153) // Ocean Reflection layer 1
ellipse(600, 430, 600, 80);

//Ocean Reflection Layer 1 C
noStroke();
fill (0, 0, 153) // Ocean Reflection layer 1
ellipse(600, 470, 400, 70);

//Ocean Reflection Layer 2

//Ocean Reflection Layer 2 A
noStroke();
fill (0, 0, 255) // Ocean Reflection layer 1
ellipse(600, 396, 350, 50);

//Ocean Reflection Layer 2 B
noStroke();
fill (0, 0, 255) // Ocean Reflection layer 1
ellipse(600, 430, 550, 60);

//Ocean Reflection Layer 2 C
noStroke();
fill (0, 0, 255) // Ocean Reflection layer 1
ellipse(600, 470, 350, 50);

//Ocean Reflection Layer 3

//Ocean Reflection Layer 3 A
noStroke();
fill (0, 102, 255) // Ocean Reflection layer 1
ellipse(600, 396, 300, 40);

//Ocean Reflection Layer 3 B
noStroke();
fill (0, 102, 255) // Ocean Reflection layer 1
ellipse(600, 430, 500, 50);

//Ocean Reflection Layer 3 C
noStroke();
fill (0, 102, 255) // Ocean Reflection layer 1
ellipse(600, 470, 300, 40);

//Ocean Reflection Layer 4

//Ocean Reflection Layer 4 A
noStroke();
fill (51, 204, 255) // Ocean Reflection layer 1
ellipse(600, 396, 200, 30);

//Ocean Reflection Layer 4 B
noStroke();
fill (51, 204, 255) // Ocean Reflection layer 1
ellipse(600, 430, 400, 40);

//Ocean Reflection Layer 4 C
noStroke();
fill (51, 204, 255) // Ocean Reflection layer 1
ellipse(600, 470, 200, 30);

//Ocean Reflection Layer 5

//Ocean Reflection Layer 5 A
noStroke();
fill (255, 255, 255) // Ocean Reflection layer 1
ellipse(600, 396, 130, 25);

//Ocean Reflection Layer 5 B
noStroke();
fill (255, 255, 255) // Ocean Reflection layer 1
ellipse(600, 430, 330, 25);

//Ocean Reflection Layer 5 C
noStroke();
fill (255, 255, 255) // Ocean Reflection layer 1
ellipse(600, 470, 130, 25);

//Beach

//Beach sand 
noStroke();
fill (204, 136, 0) // Beach base color
rect(0, 550, 1200, 700);

//Ocean Waves Layer 1

//Ocean Waves Layer 1 A
noStroke();
fill (102, 153, 255) // Ocean Waves Layer 1
ellipse(600, 570, 500, 100);

//Ocean Waves Layer 1 B
noStroke();
fill (102, 153, 255) // Ocean Waves Layer 1
ellipse(200, 570, 500, 80);

//Ocean Waves Layer 1 C
noStroke();
fill (102, 153, 255) // Ocean Waves Layer 1
ellipse(1000, 570, 500, 70);

//Ocean Waves Layer 2

//Ocean Waves Layer 2 A
noStroke();
fill (51, 51, 255) // Ocean Waves Layer 2
ellipse(600, 555, 500, 100);

//Ocean Waves Layer 2 B
noStroke();
fill (51, 51, 255) // Ocean Waves Layer 2
ellipse(200, 555, 500, 80);

//Ocean Waves Layer 2 C
noStroke();
fill (51, 51, 255) // Ocean Waves Layer 2
ellipse(1000, 555, 500, 80);

//Ocean Waves Layer 3

//Ocean Waves Layer 3 A
noStroke();
fill (0, 0, 204) // Ocean Waves Layer 3
ellipse(600, 560, 500, 60);

//Ocean Waves Layer 3 B
noStroke();
fill (0, 0, 204) // Ocean Waves Layer 3
ellipse(200, 545, 500, 70);

//Ocean Waves Layer 3 C
noStroke();
fill (0, 0, 204) // Ocean Waves Layer 3
ellipse(1000, 545, 500, 70);

//Ocean Waves Layer 4

//Ocean Waves Layer 4 A
noStroke();
fill (0, 0, 102) // Ocean Waves Layer 4
ellipse(600, 540, 500, 70);

//Ocean Waves Layer 4 B
noStroke();
fill (0, 0, 102) // Ocean Waves Layer 4
ellipse(200, 540, 500, 60);

//Ocean Waves Layer 4 C
noStroke();
fill (0, 0, 102) // Ocean Waves Layer 4
ellipse(1000, 540, 500, 60);

//Beach Shadows

//Beach Shadows 1
noStroke();
fill (153, 102, 0) // Beach shade color 1
ellipse(600, 690, 1400, 100);

//Beach Shadows 2
noStroke();
fill (128, 85, 0) // Beach shade color 2
ellipse(600, 740, 1400, 150);

//Beach Shadows 3
noStroke();
fill (102, 68, 0) // Beach shade color 3
ellipse(600, 780, 1400, 170);

//Stars

// Star 1
noStroke();
fill (255, 255, 255) // Star 1
ellipse(900, 50, 5, 5);

// Star 2
noStroke();
fill (255, 255, 255) // Star 2
ellipse(450, 150, 5, 5);

// Star 3
noStroke();
fill (255, 255, 255) // Star 3
ellipse(320, 100, 5, 5);

// Star 4
noStroke();
fill (255, 255, 255) // Star 4
ellipse(500, 300, 5, 5);

// Star 5
noStroke();
fill (255, 255, 255) // Star 5
ellipse(1000, 250, 5, 5);

// Star 6
noStroke();
fill (255, 255, 255) // Star 6
ellipse(100, 240, 5, 5);

// Star 7
noStroke();
fill (255, 255, 255) // Star 7
ellipse(50, 340, 5, 5);

// Star 8
noStroke();
fill (255, 255, 255) // Star 8
ellipse(30, 30, 5, 5);

// Star 9
noStroke();
fill (255, 255, 255) // Star 9
ellipse(1050, 25, 5, 5);

// Star 10
noStroke();
fill (255, 255, 255) // Star 10
ellipse(950, 75, 5, 5);

// Star 11
noStroke();
fill (255, 255, 255) // Star 11
ellipse(800, 70, 5, 5);

// Star 12
noStroke();
fill (255, 255, 255) // Star 12
ellipse(600, 60, 5, 5);

// Star 12
noStroke();
fill (255, 255, 255) // Star 12
ellipse(300, 200, 5, 5);

// Star 13
noStroke();
fill (255, 255, 255) // Star 13
ellipse(270, 140, 5, 5);

// Star 14
noStroke();
fill (255, 255, 255) // Star 14
ellipse(970, 150, 5, 5);

// Star 15
noStroke();
fill (255, 255, 255) // Star 15
ellipse(800, 320, 5, 5);

// Star 16
noStroke();
fill (255, 255, 255) // Star 16
ellipse(430, 30, 5, 5);

// Star 17
noStroke();
fill (255, 255, 255) // Star 17
ellipse(550, 100, 5, 5);

// Star 18
noStroke();
fill (255, 255, 255) // Star 18
ellipse(700, 90, 5, 5);

// Star 19
noStroke();
fill (255, 255, 255) // Star 19
ellipse(200, 310, 5, 5);

// Star 20
noStroke();
fill (255, 255, 255) // Star 20
ellipse(950, 340, 5, 5);

// Star 21
noStroke();
fill (255, 255, 255) // Star 21
ellipse(140, 130, 5, 5);

// Star 22
noStroke();
fill (255, 255, 255) // Star 22
ellipse(900, 220, 5, 5);

// Star 22
noStroke();
fill (255, 255, 255) // Star 22
ellipse(400, 270, 5, 5);

// Star 22
noStroke();
fill (255, 255, 255) // Star 22
ellipse(790, 180, 5, 5);

// Star 23
noStroke();
fill (255, 255, 255) // Star 23
ellipse(690, 280, 5, 5);

// Star 24
noStroke();
fill (255, 255, 255) // Star 24
ellipse(1100, 290, 5, 5);

// Star 25
noStroke();
fill (255, 255, 255) // Star 25
ellipse(1080, 170, 5, 5);

// Star 26
noStroke();
fill (255, 255, 255) // Star 26
ellipse(170, 70, 5, 5);

// Star 27
noStroke();
fill (255, 255, 255) // Star 27
ellipse(60, 160, 5, 5);

// Star 28
noStroke();
fill (255, 255, 255) // Star 28
ellipse(1150, 120, 5, 5);

// Star 29
noStroke();
fill (255, 255, 255) // Star 29
ellipse(600, 330, 5, 5);

// Star 30
noStroke();
fill (255, 255, 255) // Star 30
ellipse(255, 45, 5, 5);

// People

//Person 1 Body
noStroke();
fill (0, 0, 0) // Person 1 Body
rect(590, 610, 40, 80);

//Person 1 leg 1
noStroke();
fill (0, 0, 0) // Person 1 leg 1
rect(590, 630, 10, 80);

//Person 1 leg 2
noStroke();
fill (0, 0, 0) // Person 1 leg 2
rect(620, 630, 10, 80);

//Person 1 arm 1
noStroke();
fill (0, 0, 0) // Person 1 arm 1
rect(625, 610, 10, 50);

//Person 1 arm 2
noStroke();
fill (0, 0, 0) // Person 1 arm 2
rect(585, 610, 10, 50);

//Person 1 Head
noStroke();
fill (0, 0, 0) // Person 1 arm 2
ellipse(610, 590, 45, 45);

//Person 2 Body
noStroke();
fill (0, 0, 0) // Person 1 Body
rect(490, 610, 40, 80);

//Person 2 leg 1
noStroke();
fill (0, 0, 0) // Person 1 leg 1
rect(490, 630, 10, 80);

//Person 2 leg 2
noStroke();
fill (0, 0, 0) // Person 1 leg 2
rect(520, 630, 10, 80);

//Person 2 arm 1
noStroke();
fill (0, 0, 0) // Person 1 arm 1
rect(530, 610, 10, 50);

//Person 2 arm 2
noStroke();
fill (0, 0, 0) // Person 1 arm 2
rect(480, 610, 10, 50);

//Person 2 Head
noStroke();
fill (0, 0, 0) // Person 1 arm 2
ellipse(510, 590, 45, 45);

//Person 3 Body
noStroke();
fill (0, 0, 0) // Person 1 Body
rect(730, 640, 40, 80);

//Person 3 leg 1
noStroke();
fill (0, 0, 0) // Person 1 leg 1
rect(730, 670, 10, 80);

//Person 3 leg 2
noStroke();
fill (0, 0, 0) // Person 1 leg 2
rect(760, 670, 10, 80);

//Person 3 arm 1
noStroke();
fill (0, 0, 0) // Person 1 arm 1
rect(720, 640, 10, 50);

//Person 3 arm 2
noStroke();
fill (0, 0, 0) // Person 1 arm 2
rect(770, 640, 10, 50);

//Person 3 Head
noStroke();
fill (0, 0, 0) // Person 1 arm 2
ellipse(750, 620, 45, 45);




}
