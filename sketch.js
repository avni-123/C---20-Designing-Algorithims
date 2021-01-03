var movingObject;

var restingObject;

function setup() {
  createCanvas(800,400);
  
  movingObject = createSprite(200, 150, 50, 100);
  movingObject.debug = true;

  restingObject = createSprite(200, 200, 50, 150);
  restingObject.debug = true;
}

function draw() {

  console.log(movingObject.x - restingObject.x);

  background(rgb(20, 200, 100));  

  movingObject.x = World.mouseX;
  movingObject.y = World.mouseY;

 if(movingObject.x - restingObject.x < movingObject.width / 2 + restingObject.width / 2
  && restingObject.x - movingObject.x < restingObject.width / 2 + movingObject.width / 2
  && movingObject.y - restingObject.y < movingObject.height / 2 + restingObject.height / 2
  && restingObject.y - movingObject.y < restingObject.height / 2 + movingObject.height / 2){
    movingObject.shapeColor = "red";
    restingObject.shapeColor = "blue";
 }

 else{
   movingObject.shapeColor = "purple";
   restingObject.shapeColor = "purple";
 }

  drawSprites();
}