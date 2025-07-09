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
  rect(mLs, m, windowWidth * 0.47703906785, mLs / 1.024);
}

// Dimensions of the grey rectangle
let rectX = mLs;
let rectY = 24;
let rectW = windowWidth * 0.47703906785;
let rectH = mLs / 1.024;


// Check if mouse is over the grey rectangle
if (
  mouseX >= rectX &&
  mouseX <= rectX + rectW &&
  mouseY >= rectY &&
  mouseY <= rectY + rectH
) {

stroke(30, 30, 30);
noFill();  // No fill for curves

  let numCurves = 1;  // Adjust this number to change the number of curves drawn
  
  for (let i = 0; i < numCurves; i++) { // Number of random curves per frame
    beginShape();
    
    // Start from a random initial point
    let x = random(rectX, rectX + rectW);
    let y = random(rectY, rectY + rectH);
    curveVertex(x, y);
    
    // Generate jagged random points
    for (let j = 0; j < 14; j++) { // Increase the number of points for more jaggedness
      // Add large random offsets for jaggedness
      let xOffset = random(-80, 50); 
      let yOffset = random(-50, 50);
      
      x += xOffset;
      y += yOffset;

      // Constrain the point to stay inside the rectangle
      x = constrain(x + 3, rectX - 3, rectX + rectW + 3);
      y = constrain(y + 3, rectY - 3, rectY + rectH + 3);

curveVertex(x, y);
    }

    endShape();
  }

}

else {
}

}
