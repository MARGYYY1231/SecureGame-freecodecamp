class Collectible {
  constructor({x, y, value, id}) {
    this.x = x;
    this.y = y;
    this.value = value;
    this.id = id;
    
    if (typeof window !== "undefined" && typeof window.Image !== "undefined") {
      this.img = new window.Image();
      this.img.src = this.getImage();
    } else {
      // dummy object for Node.js tests
      this.img = { src: this.getImage() };
    }
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
    context.drawImage(this.img, this.x, this.y, 32, 32);
    // Draw a border (blue for visibility)
    context.strokeStyle = "blue";
    context.lineWidth = 2;
    context.strokeRect(this.x, this.y, 32, 32);
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
