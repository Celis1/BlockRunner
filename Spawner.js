//creating the spawner
function Spawner(player) {
  //variables
  var self = this;
  let blocks = [];
  this.counter = 1;
  this.player = player;
  const size = 50;
  let counter = 0;
  let spawnY;
  this.spawnBlock = function() {

    let spawnX = this.getRndX();
    let tempBlock = new enemyBlock(spawnX, 0-size, "red");
    blocks.push(tempBlock);
    counter++;//updating counter
    if (counter %3 ==0){
      spawnY = this.getRndY();
      tempBlock = new sideBlock(width,spawnY,"yellow");
      blocks.push(tempBlock);
    }
    else if (counter %4 == 0){
      spawnX = this.getRndX();
      tempBlock = new wallBlock(spawnX,0-size,"orange");
      blocks.push(tempBlock);
    }
    //console.log(counter);
  };

  this.getRndX = function() {
    let rndx = random(0, width - 50);
    return rndx;
  };
  this.getRndY = function() {
    let rndy = random(size, height );
    return rndy;
  };

  let blockIndex;
  this.checkCollision = function(block) {
    //checks if the block is within bounds
    if (block.y > height - size || block.x <0) {
      blockIndex = blocks.indexOf(block);
      blocks.splice(blockIndex, 1);
      //vconsole.log(blocks);
    }
    //checking collision between blocks
    if (block.x < this.player.x + this.player.size &&
      block.x + block.width > this.player.x &&
      block.y < this.player.y + this.player.size &&
      block.y + size > this.player.y) {
      alert("collisions was detected");
      blockIndex = blocks.indexOf(block);
      blocks.splice(blockIndex, 1);
      //restartGame(); //call to restart game if there is a collison between blocks
    }
  };

  this.update = function() {
    if (blocks.length != 0) {
      for (let i = 0; i < blocks.length; i++) {
        //console.log(block);
        blocks[i].move();
        blocks[i].display();

        this.checkCollision(blocks[i]);
      }
    } else {
      //console.log('wasnt zero');
    }
  };
  this.start = function() {
    window.setInterval(function(){
    /// call your function here
    //console.log(" tick");
    self.spawnBlock();
  }, 400)

  };


}
