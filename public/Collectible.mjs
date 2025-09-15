class Collectible {
  constructor({x, y, value, id}) {
    this.x = x;
    this.y = y;
    this.value = value;
    this.id = id;
    this.img = new Image();
    this.img.src = this.getImage();
  }

  getImage(){
    let val = "/assets/food/";
    switch(this.id){
      case 1:
        val+="FunfettiDonut.png";
        break;
      case 2:
        val+="RainbowCake.png";
        break;
      default:
        val+="Pancakes_Rainbow.png";
    }
    return val;
  }

  draw(context){
    console.log("collectible x: ", this.x);
    console.log("collectible y: ", this.y);
    context.drawImage(this.img, this.x, this.y, 32, 32);
  }
}

/*
  Note: Attempt to export this for use
  in server.js
*/
try {
  module.exports = Collectible;
} catch(e) {}

export default Collectible;
