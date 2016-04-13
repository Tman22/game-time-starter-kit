var Car = require('./car');

var timer = 0;

var firstCar = new Car({y: 606, x: 700});
var secondCar = new Car({y: 554, x: -40, image: 'right'});
var thirdCar = new Car({y: 406, x: 700});
var fourCar = new Car({y: 506, x: 700});
var arrayOne = [firstCar];
var arrayTwo = [secondCar];
var arrayThree = [thirdCar];
var arrayFour = [fourCar];
var rowOne = new Row(1, {y: 606, x: 700}, arrayOne, 180);
var rowTwo = new Row(1, {y: 554, x: -40, image: 'right'}, arrayTwo, 180);
// var rowThree = new Row(1, {y: 606, x: 700}, arrayOne, 180);

function Enemies(context, frog) {
  timer++;
  rowOne.update(context, frog, timer);
  rowTwo.update(context, frog, timer);
}


function makeRandoNum(){
  return Math.floor((Math.random() * 100) + 1);
}

function Row(speed, cord, array, difference) {
  this.speed = speed;
  this.carArray = array;
  this.difference = difference;
  this.cord = cord;
}

Row.prototype.update = function(context, frog, timer) {
  if (timer % this.difference === 0 && this.carArray.length < 4) {
    this.carArray.push(new Car(this.cord));
  };
  let array = this.carArray
  if (this.cord.image === 'right') {
    groupRight(context, frog, array, this.speed)
  } else {
    groupLeft(context, frog, array, this.speed)
  };
};

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
