var hero = new playerBlock(500, 300, "teal");
var enemy = new enemyBlock(1, 1, "red");
var spawn = new Spawner(hero);
var treat = new treatBlock(100,100,'yellow',hero);
//var sidebby = new sideBlock(200,200,"yellow");
//var wall = new wallBlock(200,200,"blue");
const fr = 60;
//calling the setup and draw functinos
function setup() {
  frameRate(fr); //limiting the fps to set value
  createCanvas(1000, 600); //creating the canvas
  //ID = window.setInterval(spawn.spawnBlock(),1000);
  spawn.start();
  //treat.spawn();
}

function draw() {
  background(0);

  spawn.update(); //updating the spawner

  hero.move(); //allowing the hero to move
  hero.display(); //displaying the hero
  treat.checkAlive();
  treat.display();





}

//checking for key press
function keyPressed() {
  switch (key.toLowerCase()) { //creating a switch statement for player controls and checking the key pressed
    case "w": //up case
    case "arrowup":
      hero.direction = 1;
      hero.changeDirection("up");
      console.log("move UP");
      break;

    case "s": //down case
    case "arrowdown":
      console.log("move DOWN");
      hero.changeDirection("down");
      break;

    case "a": //left case
    case "arrowleft":
      console.log("move LEFT");
      hero.changeDirection("left");
      break;

    case "d": //right case
    case "arrowright":
      console.log("move RIGHT");
      hero.changeDirection("right");
      break;

    default:
      console.log(key);
      spawn.spawnBlock();
  }
}
