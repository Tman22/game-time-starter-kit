var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var Frog = require('./frog');
var Enemies = require('./enemies')

// ROWS will likely be taken out,
// just a good visual reference
var firstRow = new Row(500);
var secondRow = new Row(600);
var thirdRow = new Row(400);
var rows = [firstRow, secondRow, thirdRow];
var frog = new Frog();

function water() {
  context.fillStyle = "blue";
  context.fillRect(0 , 0, canvas.width, 350);
}

function grass() {
  context.fillStyle = "green";
  context.fillRect(0, 350, canvas.width, 50);
  context.fillRect(0, 0, canvas.width, 50)
  context.fillRect(0, 650, canvas.width, 50)
}

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  water();
  grass();

  frog.draw(context);
  Enemies(context, frog);

  rows.forEach(function(row) {
    row.draw();
  });
  requestAnimationFrame(gameLoop);
});

canvas.addEventListener('keyup', function (event) {
  var keyCode = event.keyCode;

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

function Row(height) {
  this.x = 0;
  this.y = height;
  this.width = 700;
  this.height = 5;
}

Row.prototype.draw = function() {
  context.fillStyle = "white"
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};
