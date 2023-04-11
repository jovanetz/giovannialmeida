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

}  

function draw() {

  background(255); 
  noFill(); 


  

  // Define margin
  var m = 93;

  // Define gutter
  var g = 85;

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

  // Define mouse horizontal mapping
  var mX = map  (mouseX,
  // Min/Max
  // Before
  0,                                      windowWidth, 
  // After   
  mLs,                                    mRs
  //
  );

  // Define mouse vertical mapping
  var mY = map  (mouseY,      
  // Min/Max
  // Before
  0,                                      windowHeight,
  // After      
  ((mLs / 2) - ((mLs / 2) * 0.865)),        mLs / 1.024
  //
  );

  


  noStroke();
  fill(10, 10, 10);
  rect(mX, 0, windowWidth, mY);

  // Draw mask
  fill(255);
  noStroke();
  rect(0, 0, windowWidth, m);
  rect(windowWidth - m, 0, m, windowHeight);

 
 
  // Translate mouse position to the range of 9-1 and 1-9
  mX = map(mX, mLs, mRs, 9, 1);
  mY = map(mY, ((mLs / 2) - ((mLs / 2) * 0.865)), mLs / 2, 1, 9)

  mX = round(mX, 2);
  mY = round(mY, 2);
}
