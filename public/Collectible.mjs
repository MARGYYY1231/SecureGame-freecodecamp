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
    img.onload = () => {
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
