var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

function Frog() {
  // position = position || {};
  this.x = 200;
  this.y = 150;
  this.width = 20;
  this.height = 20;
}

Frog.prototype.draw = function() {
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};

Frog.prototype.moveUp = function() {
  this.y -= 50;
  if (this.y <= 0) {
    return this.y = 0;
  }
  return this;
};

Frog.prototype.moveDown = function() {
  this.y += 50;
  if (this.y >= 400) {
    return this.y = 380;
  }
  return this;
};

Frog.prototype.moveRight = function() {
  this.x += 20;
  if (this.x >= 400) {
    return this.x = 380;
  }
  return this;
};

Frog.prototype.moveLeft = function() {
  this.x -= 20;
  if (this.x <= 0) {
    return this.x = 0;
  }
  return this;
};

function Row(height) {
  this.x = 0;
  this.y = height;
  this.width = 400;
  this.height = 5;
}

Row.prototype.draw = function() {
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};

var firstRow = new Row(300);
var secondRow = new Row(200);
var thirdRow = new Row(100);
var rows = [firstRow, secondRow];

var frog = new Frog();


requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  frog.draw();
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
