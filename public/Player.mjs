class Player {
  constructor({x, y, score, id}) {
    this.x = x;
    this.y = y;
    this.score = score;
    this.id = id;
    
    this.frame = 0;
    this.frameCounter = 0;
    this.frameSpeed = 8;
    this.isMoving = false;
    this.direction = "D";
    this.speed = 2;

    this.width = 64;
    this.height = 64;
    this.frameX = 0;
    this.frameY = 0;

    this.movesheet = null;
    this.idlesheet = null;

    this.idleFrames = 6;
    this.moveFrames = 8;

    this.sheet = new Image();
    this.sheet.src = "/assets/characters/Slime1_Idle_full.png";
    this.sheetLoaded = false;
    this.sheet.onload = () => {
      this.sheetLoaded = true;
    }
  }

  setSheets(moveSheet, idleSheet){
    this.movesheet = moveSheet;
    this.idlesheet = idleSheet;
  }

  update(keys){
    this.moving = false;
    if(keys["w"]){
      console.log("w");
      this.movePlayer("U", this.speed);
      this.isMoving = true;
    }
    if(keys["s"]){
      console.log("s");
      this.movePlayer("D", this.speed);
      this.isMoving = true;
    }
    if(keys["a"]){
      console.log("a");
      this.movePlayer("L", this.speed);
      this.isMoving = true;
    }
    if(keys["d"]){
      console.log("d");
      this.movePlayer("R", this.speed);
      this.isMoving = true;
    }
  }


  movePlayer(dir, speed) {
    switch(dir.toUpperCase()){
      case "U":
        this.y -= speed;
        this.frameY = 1;
        break;
      case "D":
        this.y += speed;
        this.frameY = 0;
        break
      case "L":
        this.x -= speed;
        this.frameY = 2;
        break;
      case "R":
        this.x += speed;
        this.frameY = 3;
        break;
    }

    // animate regardless of state
    this.frameTimer++;
    if (this.frameTimer >= this.frameInterval) {
      const maxFrames = this.moving ? this.moveFrames : this.idleFrames;
      this.currentFrame = (this.currentFrame + 1) % maxFrames;
      this.frameTimer = 0;
    }
  }

  draw(context){
    //let sheet = this.isMoving ? this.movesheet : this.idlesheet;
    console.log("x: ", this.x);
    console.log("y: ", this.y);
    context.drawImage(this.sheet, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height);
  }

  collision(item) {

  }

  calculateRank(arr) {

  }
}

export default Player;
