var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var Frog = require('./frog');
var Car = require('./car');

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
var firstCar = new Car({y: 606, x: 700});
var secondCar = new Car({y: 554, x: -40}, 'right');
var frog = new Frog();
var carOne = [firstCar];
var carTwo = [secondCar];
var timer = 0;
var timerTwo = 0;

function rowOne() {
  var num = Math.floor((Math.random() * 1000) + 1);
  if (timer > 120 && num > 950 && carOne.length < 4) {
    timer = 0;
    return carOne.push(new Car({y: 606, x: 700}));
  }
}

function rowTwo() {
  var num = Math.floor((Math.random() * 1000) + 1);
  if (timerTwo > 120 && num > 500 && carTwo.length < 4 ) {
    timerTwo = 0;
    return carTwo.push(new Car({y: 554, x: -40}, 'right'));
  }
}

// var cx = document.querySelector('canvas').getContext('2d')
// cx.fillRect(0, 0,canvas.width, 400);
// cx.setAttribute('fill', 'red');
// // cd.lineWidth = 5;


requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  frog.draw(context);
  timer++;
  timerTwo++;
  rowOne();
  rowTwo();
  carOne.forEach(function(car) {
    car.draw(context).moveLeft().collision(frog);
    if (car.x < (-40)) {
      return carOne.shift();
    }
  });

  carTwo.forEach(function(car) {
    car.draw(context).moveRight().collision(frog);
    if (car.x > (740)) {
      return carTwo.shift();
    }
  });

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
