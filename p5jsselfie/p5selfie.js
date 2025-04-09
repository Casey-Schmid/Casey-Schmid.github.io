function setup() {
createCanvas(600, 600);
}
function draw() {
background(0, 0, 128); // Dark blue color

//background highlight 1
noStroke();
fill (0, 0, 255) // Royal Blue color
ellipse(300, 300, 500, 500);

//background highlight 2
noStroke();
fill (0, 102, 255) // Light blue color
ellipse(300, 300, 400, 400);

//background highlight 3
noStroke();
fill (51, 153, 255) // Lighter blue color
ellipse(300, 300, 300, 300);

//background highlight 4
noStroke();
fill (102, 204, 255) // Lightist blue color
ellipse(300, 300, 200, 200);

//hair
fill(102, 51, 0) // Dark Brown color
ellipse(300, 280, 270, 400); // Dark Brown color

//neck
fill(255, 230, 204); // Peach color
rect(270, 257, 60, 140); // Peach color

//head
fill(255, 230, 204); // Peach color
ellipse(300, 210, 200, 200); // Peach color

//left eye
fill(250) // White
ellipse(250, 200, 50, 40); // White

//left iris
fill(102, 51, 0) // Dark Brown color
ellipse(250, 200, 25, 25); // Dark Brown color

//left pupil
fill(0, 0, 0) // Black color
ellipse(250, 200, 15, 15); // Black color

//left pupil highlight
fill(250) // White color
ellipse(245, 195, 5, 5); // White color

//right eye
fill(250) // White color
ellipse(350, 200, 50, 40); // White color

//right iris
fill(102, 51, 0) // Dark Brown color
ellipse(350, 200, 25, 25); // Dark Brown color

//right pupil
fill(0, 0, 0) // Black color
ellipse(350, 200, 15, 15); // Black color

//right pupil highlight
fill(250) // White color
ellipse(345, 195, 5, 5); // White color

//left cheek
fill(255, 102, 204) // Pink color
ellipse(355, 245, 40, 30); // Pink color

//right cheek
fill(255, 102, 204) // Pink color
ellipse(245, 245, 40, 30); // Pink color

//lips
fill(255, 102, 153) // Coral color
ellipse(300, 270, 50, 10); // Coral color

//left bicep
fill(51, 204, 204); // Turqoise color
ellipse(210, 450, 100, 200); // Turqoise color

//left tricep
fill(51, 204, 204); // Turqoise color
ellipse(210, 510, 100, 200); // Turqoise color

//right bicep
fill(51, 204, 204); // Turqoise color
ellipse(390, 450, 100, 200); // Turqoise color

//right tricep
fill(51, 204, 204); // Turqoise color
ellipse(390, 510, 100, 200); // Turqoise color

//hat rim
fill(51, 204, 255) // Sky blue color
ellipse(300, 130, 250, 90); // Sky blue color

//hat top
fill(51, 204, 255) // Sky blue color
ellipse(300, 90, 150, 90); // Sky blue color

//coat body
fill(51, 204, 204); // Turqoise color
ellipse(300, 465, 200, 300); // Turqoise color

//rainbow design 1
fill(255, 0, 0); // Red color
ellipse(300, 465, 150, 200); // Red color

//rainbow design 2
fill(255, 102, 0); // Orange color
ellipse(300, 465, 130, 180); // Orange color

//rainbow design 3
fill(255, 255, 0); // Yellow color
ellipse(300, 465, 110, 160); // Yellow color

//rainbow design 4
fill(0, 204, 0); // Green color
ellipse(300, 465, 90, 140); // Green color

//rainbow design 5
fill(0, 205, 255); // Blue color
ellipse(300, 465, 70, 120); // Blue color

//rainbow design 6
fill(51, 51, 255); // Indigo color
ellipse(300, 465, 50, 100); // Indigo color

//rainbow design 7
fill(153, 51, 255); // Violet color
ellipse(300, 465, 30, 80); // Violet color

}
