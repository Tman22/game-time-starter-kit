function Car(options) {
  options = options || {};
  this.x = options.x;
  this.y = options.y;
  this.height = 40;
  this.width = 40;
}

Car.prototype.draw = function(context) {
  context.fillRect(this.x, this.y, this.height, this.width);
  return this;
};

Car.prototype.move = function() {
  this.x--;
  return this;
}


module.exports = Car;
