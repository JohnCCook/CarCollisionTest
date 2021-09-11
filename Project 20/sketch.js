var wall, car;
var speed, weight;

function setup() {
  createCanvas(1600,400);
 wall = createSprite(1500, 200, 50, 200);
 wall.shapeColor = "white";

 speed = Math.round(random(40,100));
 weight = Math.round(random(500,1500));
 console.log(speed);
 console.log(weight);

 car = createSprite(100, 200, 40,25)
 car.velocityX = speed;
}

function draw() {
  background(80,80,80);  

  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX = 0 
    var deformation = 0.5 * weight * speed * speed/22509;
    if (deformation > 180){
      car.shapeColor = rgb(255,0,0)
    }
    if (deformation >= 100 && deformation <=180) {
      car.shapeColor = rgb(230,230,0)
    }
    if (deformation < 100) {
      car.shapeColor = rgb(0,255,0)
    }
    console.log(deformation);
  }
  drawSprites();
}