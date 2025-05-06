function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  if(windowHeight > windowWidth){
    factor = windowHeight;
    factdiv = 1080;
  }else{
    factor = windowWidth;
    factdiv = 1920;
  }
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  frameRate(1);

}  

function draw() {
if (windowWidth > 1000) {
  background(255); 
  noFill(); 


  

  // Define margin
  var m = 24;

  // Define gutter
  var g = 20;

  // Define variable columns
  var c = (windowWidth - ((7 * g) + (2 * m))) / 8;

  // Define variable rows
  var r = (windowHeight - (2 * m)) / 4;

  
  // Define minimum horizontal space between left margin and rectangle
  var mLs 
  = (4 * c) + (4 * g) + m;

  // Define minimum horizontal space between right margin and rectangle
  var mRs 
  = (windowWidth - m) - ((windowWidth - ((4 * c) + (4 * g)) - m))*0.1

  // Static rectangle 
  noStroke();
  fill(243);
  rect(mLs, 0, windowWidth, mLs / 1.024);

  // Draw mask
  fill(255);
  noStroke();
  rect(0, 0, windowWidth, m);
  rect(windowWidth - m, 0, m, windowHeight);
}
else {

}

// Dimensions of the grey rectangle
let rectX = mLs;
let rectY = 0;
let rectW = windowWidth - mLs;
let rectH = mLs / 1.024;

// Check if mouse is over the grey rectangle
if (
  mouseX >= rectX &&
  mouseX <= rectX + rectW &&
  mouseY >= rectY &&
  mouseY <= rectY + rectH
) {
  stroke(0);
  noFill();  // No fill for curves
  
  let numCurves = 1;  // Adjust this number to change the number of curves drawn
  
  for (let i = 0; i < numCurves; i++) { // Number of random curves per frame
    beginShape();
    
    // Start from a random initial point
    let x = random(rectX, rectX + rectW);
    let y = random(rectY, rectY + rectH);
    curveVertex(x, y);
    
    // Generate jagged random points
    for (let j = 0; j < 10; j++) { // Increase the number of points for more jaggedness
      // Add large random offsets for jaggedness
      let xOffset = random(-50, 50); 
      let yOffset = random(-50, 50);
      x += xOffset;  // Apply the random offset to the current x position
      y += yOffset;  // Apply the random offset to the current y position
      curveVertex(x, y);
    }

    endShape();
  }
}

}
