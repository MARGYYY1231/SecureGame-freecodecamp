class Player {
  constructor({x, y, score, id}) {
    this.x = x;
    this.y = y;
    this.score = score;
    this.id = id;
    this.speed = 2;
    this.sheet = this.getSheet();

    this.frameX = 0;
    this.frameY = 0;
    this.width = 64;
    this.height = 64;
    this.scale = 1;

    this.count = 0;
  }

  getSheet(){
    const sheet = new Image();
    sheet.src = "assets/characters/Slime1_Idle_full.png";
    return sheet;
  }

  update(keys){
    if(keys["w"]){
      console.log("w");
      this.movePlayer("U", this.speed);
    }
    if(keys["s"]){
      console.log("s");
      this.movePlayer("D", this.speed);
    }
    if(keys["a"]){
      console.log("a");
      this.movePlayer("L", this.speed);
    }
    if(keys["d"]){
      console.log("d");
      this.movePlayer("R", this.speed);
    }
  }


  movePlayer(dir, speed) {
    // switch(dir.toUpperCase()){
    //   case "U":
    //     this.y -= speed;
    //     this.frameY = 1;
    //     break;
    //   case "D":
    //     this.y += speed;
    //     this.frameY = 0;
    //     break
    //   case "L":
    //     this.x -= speed;
    //     this.frameY = 2;
    //     break;
    //   case "R":
    //     this.x += speed;
    //     this.frameY = 3;
    //     break;
    // }

    
  }

  draw(context){
    context.drawImage(
      this.sheet, 
      this.frameX * this.width, 
      this.frameY * this.height, 
      this.width, 
      this.height, 
      this.x, 
      this.y, 
      this.width * this.scale, 
      this.height * this.scale
    );

    this.count++;
    if(this.count > 5){
      this.frameX++;
      this.count = 0;
    }

    if(this.frameX > 5){
      this.frameX = 0;
    }
  }

  collision(item) {

  }

  calculateRank(arr) {

  }
}

export default Player;
