class Player {
  constructor({x, y, score, id}) {
    this.x = x;
    this.y = y;
    this.score = score;
    this.id = id;
    this.speed = 1;
    this.sheet = this.getSheet();

    this.frameX = 0;
    this.frameY = 0;
    this.width = 64;
    this.height = 64;
    this.scale = 2;

    this.count = 0;
  }

  getSheet(){
   if (typeof window !== "undefined" && typeof window.Image !== "undefined") {
      const sheet = new window.Image();
      sheet.src = (this.id === 1) ? "assets/characters/Slime1_Idle_full.png" : "assets/characters/Slime2_Idle_full.png";
      return sheet;
    }
    return { src: "", width: this.width, height: this.height };
  }

  update(keys){
    if(keys["w"]){
      console.log("w");
      this.movePlayer("up", this.speed);
    }
    if(keys["s"]){
      console.log("s");
      this.movePlayer("down", this.speed);
    }
    if(keys["a"]){
      console.log("a");
      this.movePlayer("left", this.speed);
    }
    if(keys["d"]){
      console.log("d");
      this.movePlayer("right", this.speed);
    }
  }


  movePlayer(dir, speed) {
    switch(dir.toLowerCase()){
      case "up":
        this.y -= speed;
        this.frameY = 1;
        break;
      case "down":
        this.y += speed;
        this.frameY = 0;
        break
      case "left":
        this.x -= speed;
        this.frameY = 2;
        break;
      case "right":
        this.x += speed;
        this.frameY = 3;
        break;
    }    
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

    context.strokeStyle = "red";
    context.lineWidth = 2;
    context.strokeRect(
      this.x + this.width / 4,
      this.y + this.height / 4,
      this.width / 2,
      this.height / 2
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
    const playerCenterX = this.x + (this.width * this.scale) / 2;
    const playerCenterY = this.y + (this.height * this.scale) / 2;

    const itemCenterX = item.x + 16; // 32 / 2
    const itemCenterY = item.y + 16; // 32 / 2

    const dx = playerCenterX - itemCenterX;
    const dy = playerCenterY - itemCenterY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if(distance < 16){
      this.score+=item.value;
      console.log("score: " + this.score);
      return true;
    }
    return false;
  }

  calculateRank(arr) {

  }
}

export default Player;
