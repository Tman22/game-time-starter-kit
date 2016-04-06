var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var Frog = require('./frog')
var Car = require('./car')

function Row(height) {
  this.x = 0;
  this.y = height;
  this.width = 700;
  this.height = 5;
}

Row.prototype.draw = function() {
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};

var firstRow = new Row(500);
var secondRow = new Row(600);
var thirdRow = new Row(400);
var rows = [firstRow, secondRow, thirdRow];
var car = new Car({y: 606, x: 700});

var frog = new Frog();


requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  frog.draw(context);
  car.draw(context).move();
  rows.forEach(function (row) {
    row.draw();
  });
  requestAnimationFrame(gameLoop);
});

canvas.addEventListener('keyup', function (event) {
  var keyCode = event.keyCode

  if (keyCode === 38){
    frog.moveUp();
  } else if (keyCode === 40){
    frog.moveDown();
  } else if (keyCode === 37){
    frog.moveLeft();
  } else if (keyCode === 39) {
    frog.moveRight();
  }
});
