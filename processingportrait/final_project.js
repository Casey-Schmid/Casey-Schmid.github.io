function setup() {
createCanvas(1200, 800);
}
function draw() {
background(0, 102, 255); // first layer of sunrise

//Sky

//background highlight 1
noStroke();
fill (0, 153, 255) // second layer of sunrise
rect(0, 100, 1200, 700);

//background highlight 2
noStroke();
fill (0, 204, 255) // third layer of sunrise
rect(0, 190, 1200, 700);

//background highlight 3
noStroke();
fill (0, 255, 255) // fourth layer of sunrise
rect(0, 250, 1200, 700);

//background highlight 4
noStroke();
fill (153, 255, 235) // fifth layer of sunrise
rect(0, 300, 1200, 700);

//background highlight 5
noStroke();
fill (255, 255, 179) // Sixth layer of sunrise
rect(0, 330, 1200, 700);

// Sun

//Sun 1
noStroke();
fill (255, 255, 0) // first layer of sun
ellipse(600, 200, 150, 150);

//Sun 2
noStroke();
fill (255, 255, 153) // Second layer of sun
ellipse(600, 200, 125, 125);

//Sun 3
noStroke();
fill (255, 255, 204) // Third layer of sun
ellipse(600, 200, 100, 100);

//Ocean

//Ocean
noStroke();
fill (0, 0, 255) // Ocean base color
rect(0, 360, 1200, 700);

//Ocean Reflection Layer 1

//Ocean Reflection Layer 1 A
noStroke();
fill (0, 102, 255) // Ocean Reflection layer 1
ellipse(600, 396, 400, 70);

//Ocean Reflection Layer 1 B
noStroke();
fill (0, 102, 255) // Ocean Reflection layer 1
ellipse(600, 430, 600, 80);

//Ocean Reflection Layer 1 C
noStroke();
fill (0, 102, 255) // Ocean Reflection layer 1
ellipse(600, 470, 400, 70);

//Ocean Reflection Layer 2

//Ocean Reflection Layer 2 A
noStroke();
fill (0, 153, 255) // Ocean Reflection layer 1
ellipse(600, 396, 350, 50);

//Ocean Reflection Layer 2 B
noStroke();
fill (0, 153, 255) // Ocean Reflection layer 1
ellipse(600, 430, 550, 60);

//Ocean Reflection Layer 2 C
noStroke();
fill (0, 153, 255) // Ocean Reflection layer 1
ellipse(600, 470, 350, 50);

//Ocean Reflection Layer 3

//Ocean Reflection Layer 3 A
noStroke();
fill (0, 204, 255) // Ocean Reflection layer 1
ellipse(600, 396, 300, 40);

//Ocean Reflection Layer 3 B
noStroke();
fill (0, 204, 255) // Ocean Reflection layer 1
ellipse(600, 430, 500, 50);

//Ocean Reflection Layer 3 C
noStroke();
fill (0, 204, 255) // Ocean Reflection layer 1
ellipse(600, 470, 300, 40);

//Ocean Reflection Layer 4

//Ocean Reflection Layer 4 A
noStroke();
fill (0, 255, 255) // Ocean Reflection layer 1
ellipse(600, 396, 200, 30);

//Ocean Reflection Layer 4 B
noStroke();
fill (0, 255, 255) // Ocean Reflection layer 1
ellipse(600, 430, 400, 40);

//Ocean Reflection Layer 4 C
noStroke();
fill (0, 255, 255) // Ocean Reflection layer 1
ellipse(600, 470, 200, 30);

//Ocean Reflection Layer 5

//Ocean Reflection Layer 5 A
noStroke();
fill (255, 255, 153) // Ocean Reflection layer 1
ellipse(600, 396, 130, 25);

//Ocean Reflection Layer 5 B
noStroke();
fill (255, 255, 153) // Ocean Reflection layer 1
ellipse(600, 430, 330, 25);

//Ocean Reflection Layer 5 C
noStroke();
fill (255, 255, 153) // Ocean Reflection layer 1
ellipse(600, 470, 130, 25);

//Beach

//Beach sand 
noStroke();
fill (255, 230, 204) // Beach base color
rect(0, 550, 1200, 700);

//Ocean Waves Layer 1

//Ocean Waves Layer 1 A
noStroke();
fill (230, 242, 255) // Ocean Waves Layer 1
ellipse(600, 570, 500, 80);

//Ocean Waves Layer 1 B
noStroke();
fill (230, 242, 255) // Ocean Waves Layer 1
ellipse(200, 570, 500, 80);

//Ocean Waves Layer 1 C
noStroke();
fill (230, 242, 255) // Ocean Waves Layer 1
ellipse(1000, 570, 500, 80);

//Ocean Waves Layer 2

//Ocean Waves Layer 2 A
noStroke();
fill (51, 153, 255) // Ocean Waves Layer 2
ellipse(600, 555, 500, 80);

//Ocean Waves Layer 2 B
noStroke();
fill (51, 153, 255) // Ocean Waves Layer 2
ellipse(200, 555, 500, 80);

//Ocean Waves Layer 2 C
noStroke();
fill (51, 153, 255) // Ocean Waves Layer 2
ellipse(1000, 555, 500, 80);

//Ocean Waves Layer 3

//Ocean Waves Layer 3 A
noStroke();
fill (0, 102, 255) // Ocean Waves Layer 3
ellipse(600, 545, 500, 70);

//Ocean Waves Layer 3 B
noStroke();
fill (0, 102, 255) // Ocean Waves Layer 3
ellipse(200, 545, 500, 70);

//Ocean Waves Layer 3 C
noStroke();
fill (0, 102, 255) // Ocean Waves Layer 3
ellipse(1000, 545, 500, 70);

//Ocean Waves Layer 4

//Ocean Waves Layer 4 A
noStroke();
fill (0, 0, 255) // Ocean Waves Layer 4
ellipse(600, 540, 500, 60);

//Ocean Waves Layer 4 B
noStroke();
fill (0, 0, 255) // Ocean Waves Layer 4
ellipse(200, 540, 500, 60);

//Ocean Waves Layer 4 C
noStroke();
fill (0, 0, 255) // Ocean Waves Layer 4
ellipse(1000, 540, 500, 60);

//Beach Shadows

//Beach Shadows 1
noStroke();
fill (255, 204, 153) // Beach shade color 1
ellipse(600, 690, 1400, 100);

//Beach Shadows 2
noStroke();
fill (235, 170, 106) // Beach shade color 2
ellipse(600, 740, 1400, 150);

//Beach Shadows 3
noStroke();
fill (204, 146, 90) // Beach shade color 3
ellipse(600, 780, 1400, 170);

//Boat 1

//Boat 1 in Water A
noStroke();
fill (0, 102, 255) // Boat water line A
ellipse(198, 390, 150, 35);

//Boat 1 in Water B
noStroke();
fill (51, 153, 255) // Boat water line B
ellipse(198, 390, 120, 25);

//Boat 1 in Water C
noStroke();
fill (230, 242, 255) // Boat water line C
ellipse(198, 390, 90, 15);

//Boat 1 Hut
noStroke();
fill (204, 204, 204) // Boat Hut color
rect(170, 340, 60, 30);

//Boat 1 Haul
noStroke();
fill (166, 166, 166) // Boat Haul color
arc(200, 370, 100, 50, 0, PI, CHORD);

//Boat 1

//Boat 2 in Water A
noStroke();
fill (0, 102, 255) // Boat water line A
ellipse(1050, 435, 200, 35);

//Boat 2 in Water B
noStroke();
fill (51, 153, 255) // Boat water line B
ellipse(1050, 435, 180, 25);

//Boat 2 in Water C
noStroke();
fill (230, 242, 255) // Boat water line C
ellipse(1050, 435, 150, 15);

//Boat 2 Hut
noStroke();
fill (204, 102, 0) // Boat Hut color
rect(1005, 380, 90, 40);

//Boat 2 Haul
noStroke();
fill (153, 77, 0) // Boat Hail color
arc(1050, 415, 150, 50, 0, PI, CHORD);

}
