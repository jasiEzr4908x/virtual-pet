var  dog, happyDog, database, foodS, foodStock
var dogimage
function preload()
{
dogimage=loadImage("images/dogImg.png")
dogimage1=loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database()
  dog=createSprite(250,250)
  dog.addImage(dogimage)
dog.scale=0.3
  foodStock=database.ref('Food')
  foodStock.on("value",readstock)
  foods=null
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
 // dog.addImage("images/dogImg1.png")
}
  drawSprites();
  //add styles here

}

function readstock(data){
  foodS=data.val();
}
function writeStock(x){
x=x-1
database.ref('/').update({
  Food:x
})
}
