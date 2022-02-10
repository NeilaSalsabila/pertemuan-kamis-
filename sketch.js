let j;
function setup() {
  // put setup code here
  createCanvas(400,400);
  j = 0;
}

function draw() {
  // put drawing code here
  background(200);

  strokeWeight(2)
  point(200,200)
  line(0,0,50,100)
  fill(255, 0, 0)

  rect(150,20,20,100);
  strokeWeight(3)
  ellipse(150, 120, 20, 20)
  ellipse(200,120,20,50)

  strokeWeight(3)

  fill(12, 21, 200)
  triangle(20, 20, 20, 40,60, 20)
  
  fill(255,192,203)
  strokeWeight(3)
  arc(50,50,40,40,radians(0), radians(300))

  strokeCap(ROUND)
  beginShape();
  vertex(300,50)
  vertex(350,100)
  vertex(400,15)
  vertex(250,150)
  endShape(CLOSE);

for (var i=0; i<=400; i++){
  x = i
  y = 200 + 20*Math.sin(PI*j/20)
  point(x,y)
}  

var y = 200 + 20*Math.sin(PI*j/20)
j += 1
fill(240, 192, 35)
ellipse(200,y,50,50)
}
