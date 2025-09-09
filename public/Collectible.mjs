class Collectible {
  constructor({x, y, value, id}) {
    this.x = x;
    this.y = y;
    this.value = value;
    this.id = id;
  }

  draw(context){
    const img = new Image();
    img.src = "/assets/food/Pancakes_Rainbow.png"; 
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
