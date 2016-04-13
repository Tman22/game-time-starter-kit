var Frog = require('./frog');

function Car(options) {
  options = options || {};
  this.x = options.x;
  this.y = options.y;
  this.height = 45;
  this.width = 45;
  if (options.image === 'right') {
    return this.image = "./images/car_right.png";
  } else {
    return this.image = "./images/car_left.png";
  }
}

Car.prototype.draw = function(context) {
  var image = new Image();
  image.src = this.image;
  context.drawImage(image, this.x, this.y, this.height, this.width);
  return this;
};

Car.prototype.moveLeft = function(speed) {
  this.x -= speed;
  return this;
};

Car.prototype.moveRight = function(speed) {
  this.x += speed ;
  return this;
};

Car.prototype.collision = function(frog) {
  var one = (frog.x < this.x && this.x < frog.x+frog.width && this.y > frog.y && this.y < frog.y+frog.height)
  var two = (frog.x < this.x + this.width && this.x + this.width < frog.x + frog.width && this.y > frog.y && this.y < frog.y+frog.height)

  if (one || two) {
    console.log(this.x, this.y, frog.x, frog.y);
    frog.y = 650;
    return frog.x = 350;
  }
};


module.exports = Car;
