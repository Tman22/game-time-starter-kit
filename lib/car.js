var Frog = require('./frog');

function Car(options) {
  options = options || {};
  this.x = options.x;
  this.y = options.y;
  this.height = 45;
  this.width = 45;
}

var image = new Image();
image.src = "./images/car_left.png"

Car.prototype.draw = function(context) {
  context.drawImage(image, this.x, this.y, this.height, this.width);
  return this;
};

Car.prototype.move = function() {
  this.x--;
  return this;
};

Car.prototype.collision = function(frog) {
  // var tx = ((this.x + this.width / 2) - (frog.x+frog.width/2))
  // var ty = ((this.y + this.width / 2) - (frog.y+frog.width/2))
  // (absolute(T.x) > (currentSpr.width / 2) + (otherSpr.width / 2))
  if (this.x > frog.x && this.x < frog.x+frog.width && this.y > frog.y && this.y < frog.y+frog.height) {
    console.log(this.x, this.y, frog.x, frog.y);
    frog.y = 650;
    debugger
    return frog.x = 350;
  // } else if (Math.abs(tx) > (frog.width / 2) + (this.width / 2 ) && Math.abs(ty) > (frog.height / 2 ) + (this.height / 2)) {
  } else if (this.x+this.width > frog.x && this.x < frog.x && this.y+this.height > frog.y && this.y > frog.y ) {
    console.log('fuck');
    frog.y = 650;
    return frog.x = 350;
  }
};


module.exports = Car;
