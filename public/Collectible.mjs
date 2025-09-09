class Collectible {
  constructor({x, y, value, id}) {
    this.x = x;
    this.y = y;
    this.value = value;
    this.id = id;
  }

  getImage(){
    let val = "/assets/food/";
    switch(id){
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
    const img = new Image();
    img.src = this.getImage(); 
    console.log("x1:", this.x);
    console.log("y1:", this.y);
    img.onload = () => {
      console.log("Pancake image loaded:", img.width, img.height);
      context.drawImage(img, this.x, this.y);
    };
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
