// https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

// https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
function circleCircumference(circle) {
  const circumference = 2 * Math.PI * circle.radius;
  return parseFloat(circumference.toFixed(6));
}

// https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
function giveMeFive(obj) {
  const lengthIsFive = [];
  for (let key in obj) {
    if (key.length == 5) {
      lengthIsFive.push(key);
    }
    if (obj[key].length == 5) {
      lengthIsFive.push(obj[key]);
    } 
  }
  return lengthIsFive;
}

// advanced tasks
// https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript
function buildFun(n) {
  const res = [];

  for (let i = 0; i < n; i++) {
    res.push(function returnI() {
      return i;
    });
  }
  return res;
}

// https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript
