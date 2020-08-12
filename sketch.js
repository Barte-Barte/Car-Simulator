

var car,wall;
var speed,weight;






function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,height/2)
  wall.shapeColor=(80,80,80)
  speed=random(55,90);
  weight=random(400,1500); 
  



}

function draw() {
  background(255,255,255);
  car.velocityX=speed;
  if(car.collide(wall)){

   deformation(); 

  }








  drawSprites();
}


function deformation(){

  var sm=(0.5*weight*speed*speed)/22500 
  
  if(sm<100){

   car.shapeColor="green";
    
  }

  else if(100<sm && sm<180){

    car.shapeColor="yellow"

  }

   else
   {
     car.shapeColor="red"
   }


}



