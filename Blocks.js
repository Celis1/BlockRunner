//creating a dict of colors
const colors = {
  teal: [68, 216, 201],
  red: [255, 0, 0],
  green: [0, 255, 0],
  blue: [0, 0, 255],
  yellow:[255,255,0],
  orange:[255,150,0]

};

//creating the block object
function playerBlock(x, y, colorName) { //creating class variables
  this.x = x;
  this.y = y;
  const speed = 4;
  this.directionX = 0;
  this.directionY = 0;
  this.direction = 0;
  this.size = 35;

  this.mainColor = colors[colorName];
  //console.log(this.mainColor);//checking the color

  this.display = function() { //making the block appear over the background
    let c = color(this.mainColor);
    noStroke();
    fill(c);
    rect(this.x, this.y, this.size, this.size);

  };

  this.move = function() {
    this.x = this.x + this.directionX;
    this.y = this.y + this.directionY;
    //checking to see if its at an edge
    if (this.x <=0){
      this.x = 0;
    }else if (this.x >= width-this.size){
      this.x = width-this.size;
    }
    if (this.y <=0){
      this.y = 0;
    }else if (this.y >=height-this.size){
      this.y = height-this.size;
    }

    //console.log(this.directionX, this.directionY);

  };

  this.changeDirection = function(dir) {
    switch (dir) {
      case "up":
        this.directionX = 0;
        this.directionY = -speed;

        break;
      case "down":
        this.directionX = 0;
        this.directionY = speed;
        break;
      case "left":
        this.directionX = -speed;
        this.directionY = 0;
        break;
      case "right":
        this.directionX = speed;
        this.directionY = 0;
        break;
      default:
        //console.log(this.direction);
    }
  };
}

function enemyBlock(x, y, colorName, blockType) {
  this.x = x;
  this.y = y;
  this.width = 50;
  this.mainColor = colors[colorName];
  this.speed = 2;

  this.display = function() { //making the block appear over the background
    let c = color(this.mainColor);
    noStroke();
    fill(c);
    rect(this.x, this.y, 50, this.width);

  };

  this.move = function() {
    this.y = this.y + this.speed;
  };

}

function wallBlock(x,y,colorName){
  this.x = x;
  this.y = y;
  this.size = 50;
  this.width = this.size*4;
  this.mainColor = colors[colorName];
  this.speed = 1;


  this.display = function() { //making the block appear over the background
    let c = color(this.mainColor);
    noStroke();
    fill(c);
    rect(this.x, this.y, this.size*4, this.size);

  };

  this.move = function(){
    this.y += this.speed;
  };
}


function sideBlock(x,y,colorName){
  this.x = x;
  this.y = y;
  this.size = 50;
  this.width = 50;
  this.mainColor = colors[colorName];
  this.speed = 2;


  this.display = function() { //making the block appear over the background
    let c = color(this.mainColor);
    noStroke();
    fill(c);
    rect(this.x, this.y, this.size, this.size);

  };

  this.move = function(){
    this.x += -this.speed;
  };
}


function treatBlock(x,y,colorName,hero){
  this.x = x;
  this.y = y;
  this.alive = true;
  this.size = 20;
  this.width = 30;
  this.mainColor = colors[colorName];
  this.speed = 2;
  this.player = hero;
  let counter = 0;
  let score = document.getElementById("score");
  // this.spawn = function(){
  //   if (this.alive == false){
  //     this.x = random(0,width-50);
  //     this.y = random(size,height);
  //   }
  // };

  this.display = function() { //making the block appear over the background
    let c = color(this.mainColor);
    noStroke();
    fill(c);
    ellipse(this.x, this.y, this.size, this.width);
  };

  this.checkAlive = function(){
    if (this.x < this.player.x + this.player.size &&
      this.x + this.width > this.player.x &&
      this.y < this.player.y + this.player.size &&
      this.y + this.size > this.player.y) {
        console.log("treat was hit");
        this.x = random(0,width-50);
        this.y = random(this.size,height);
        counter++;
        score.innerHTML ="test: " + counter;

      }
  };
}
