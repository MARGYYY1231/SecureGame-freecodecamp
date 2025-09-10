class Player {
  constructor({x, y, score, id}) {
    this.x = x;
    this.y = y;
    this.score = score;
    this.id = id;
    this.width = 32;
    this.height = 32;
    this.frameX = 0;
    this.frameY = 0;
    this.animation = 0.1;
    this.currentAnimation = "IDLE";
  }

  movePlayer(dir, speed) {
    this.currentAnimation = dir.toUpperCase;
    switch(this.currentAnimation){
      case "LEFT":
        this.x -= speed;
        break;
      case "RIGHT":
        this.x += speed;
        break;
      case "UP":
        this.y -= speed;
        break;
      case "DOWN":
        this.y += speed;
        break;
      default:
        this.currentAnimation = "IDLE";
    }
  }

  collision(item) {

  }

  calculateRank(arr) {

  }
}

export default Player;
