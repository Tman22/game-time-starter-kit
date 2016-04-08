var Car = require('./car');

var time = 0;
var timer = 0;
var secondCar = new Car({y: 554, x: -40}, 'right');
var firstCar = new Car({y: 606, x: 700});
var carOne = [firstCar];
var carTwo = [secondCar];

function Enemies(context, frog) {
  time++;
  timer++;
  row(context, frog, {y: 606, x: 700});
  rowTwo(context, frog);
}


function row(context, frog, cordin) {
  var num = Math.floor((Math.random() * 1000) + 1);
  if (timer > 120 && num > 950 && carOne.length < 4) {
    timer = 0;
    return carOne.push(new Car(cordin));
  }
  groupOne(context, frog);
}

function rowTwo(context, frog) {
  var num = Math.floor((Math.random() * 1000) + 1);
  if (time > 120 && num > 500 && carTwo.length < 4 ) {
    time = 0;
    return carTwo.push(new Car({y: 554, x: -40}, 'right'));
  }
  groupTwo(context, frog);
}

function groupOne(context, frog, array) {
  carOne.forEach(function(car) {
    car.draw(context).moveLeft().collision(frog);
    if (car.x < (-40)) {
      return carOne.shift();
    }
  });
}

function groupTwo(context, frog) {
  carTwo.forEach(function(car) {
    car.draw(context).moveRight().collision(frog);
    if (car.x > (740)) {
      return carTwo.shift();
    }
  });
}
module.exports = Enemies;
