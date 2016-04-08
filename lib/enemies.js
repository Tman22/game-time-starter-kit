var Car = require('./car');

var secondTimer = 0;
var firstTimer = 0;
var thirdTimer = 0;
var fourthTimer = 0;
var firstCar = new Car({y: 606, x: 700});
var secondCar = new Car({y: 554, x: -40}, 'right');
var thirdCar = new Car({y: 406, x: 700});
var fourCar = new Car({y: 506, x: 700});
var carOne = [firstCar];
var carTwo = [secondCar];
var carThree = [thirdCar];
var carFour = [fourCar];

function Enemies(context, frog) {
  firstTimer++;

  row(context, frog);
  rowTwo(context, frog);
  rowThree(context, frog);
  rowFour(context, frog);
}


function makeRandoNum(){
  return Math.floor((Math.random() * 100) + 1);
}

function row(context, frog) {
  if (firstTimer % 170 === 0 && carOne.length < 4) {
    carOne.push(new Car({y: 606, x: 700}));
  }
  groupLeft(context, frog, carOne, 1);
}

function rowTwo(context, frog) {
  var num = Math.floor((Math.random() * 100) + 1);
  if (firstTimer % 150 === 0 && carTwo.length < 4 ) {
    carTwo.push(new Car({y: 554, x: -40}, 'right'));
  }
  groupRight(context, frog, carTwo, 2);
}

function rowThree(context, frog) {
  var num = Math.floor((Math.random() * 100) + 1);
  if (firstTimer % 180 === 0 && carThree.length < 4 ) {
carThree.push(new Car({y: 406, x: 700}));
  }
  groupLeft(context, frog, carThree, 1.5);
}

function rowFour(context, frog) {
  if (firstTimer % 180 === 0 && carFour.length < 4 ) {
    carFour.push(new Car({y: 506, x: 700}));
  }
  groupLeft(context, frog, carFour, 1);
}


function groupLeft(context, frog, array, speed) {
  array.forEach(function(car) {
    car.draw(context).moveLeft(speed).collision(frog);
    if (car.x < (-40)) {
      array.shift();
    }
  });
}

function groupRight(context, frog, array, speed) {
  array.forEach(function(car) {
    car.draw(context).moveRight(speed).collision(frog);
    if (car.x > (740)) {
      array.shift();
    }
  });
}
module.exports = Enemies;
