//variables for loading pikachu images
var pikachu;

function preload(){
  pikachu = loadImage("pika.jpg");
}

function setup(){
  createCanvas(600,500);
}


function draw(){
  background(255);
  imageMode(CORNER);
  image(pikachu, 0, 0, 600, 500);

  pikachu.loadPixels();
  //going through every pixel of pikachu
  for (var y = 0; y<pikachu.height; y++){
    for (var x = 0; x<pikachu.width; x++){
      var p = (y*pikachu.width + x) *4;
      //change the R pixel to random value
      pikachu.pixels[p] = random(255);


    }
  }

  pikachu.updatePixels();

}
