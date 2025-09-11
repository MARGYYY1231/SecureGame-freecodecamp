class Player {
  constructor({x, y, score, id}) {
    this.x = x;
    this.y = y;
    this.score = score;
    this.id = id;
    this.width = 64;
    this.height = 64;
    this.frameX = 0;
    this.frameY = 0;
    this.speed = 2;
    this.moving = false;

    this.idleSheet = this.setIdleSheet();
    this.moveSheet = this.setMoveSheet();

    this.idleFrames = 6;
    this.moveFrames = 8;
  }

  setIdleSheet(){
    const idleSheet = new Image();
    let src = "/assets/characters/";
    let sheet = (this.id == 1)  ? "Slime1_Idle_full.png" : "Slime2_Idle_full.png";
    idleSheet.src = (src+sheet);
    return idleSheet;
  }

  setMoveSheet(){
    const moveSheet = new Image();
    let src = "/assets/characters/";
    let sheet = (this.id == 1)  ? "Slime1_Walk_body.png" : "Slime2_Walk_body.png";
    moveSheet.src = (src+sheet);
    return moveSheet;
  }

  update(keys){
    this.moving = false;
    if(keys["w"]){
      this.movePlayer("U", this.speed);
      this.moving = true;
    }
    if(keys["s"]){
      this.movePlayer("D", this.speed);
      this.moving = true;
    }
    if(keys["a"]){
      this.movePlayer("L", this.speed);
      this.moving = true;
    }
    if(keys["d"]){
      this.movePlayer("R", this.speed);
      this.moving = true;
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
  }

  draw(context){
    const sheet = this.moving ? this.moveSheet : this.idleSheet;
    context.drawImage(sheet, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height);
  }

  collision(item) {

  }

  calculateRank(arr) {

  }
}

export default Player;
