function Frog() {
  this.x = 350;
  this.y = 650;
  this.width = 50;
  this.height = 50;
  this.leftImage = './images/frogger_left.png';
  this.rightImage = '/images/frogger_right.png';
  this.downImage = '/images/frogger_down.png';
  this.upImage = './images/frogger.png';
  this.image = './images/frogger.png';
}

Frog.prototype.draw = function(context) {
  var image = new Image()
  image.src = this.image
  context.drawImage(image, this.x, this.y, this.width, this.height)
  return this;
};

Frog.prototype.moveUp = function() {
  this.y -= 50;
  if (this.y <= 0) {
    this.image = this.upImage
    return this.y = 0;
  }
  this.image = this.upImage
  return this;
};

Frog.prototype.moveDown = function() {
  this.y += 50;
  if (this.y >= 700) {
    this.image = this.downImage
    return this.y = 650;
  }
  this.image = this.downImage
  return this;
};

Frog.prototype.moveRight = function() {
  this.x += 50;
  if (this.x >= 700) {
    this.image = this.rightImage
    return this.x = 650;
  }
  this.image = this.rightImage
  return this;
};

Frog.prototype.moveLeft = function() {
  this.x -= 50;
  if (this.x <= 0) {
    this.image = this.leftImage
    return this.x = 0;
  }
  this.image = this.leftImage
  return this;
};


module.exports = Frog
