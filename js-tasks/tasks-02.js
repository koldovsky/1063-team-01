// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string) {
  return string.split(" ");
}

// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}

// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
var min = function (list) {
  list.sort(function (a, b) {
    return a - b;
  });
  return list[0];
};

var max = function (list) {
  list.sort(function (a, b) {
    return b - a;
  });
  return list[0];
};

// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
  if (toReturn === "value") {
    return Math.min(...arr);
  } else if (toReturn === "index") {
    return arr.indexOf(Math.min(...arr));
  }
}

// advanced tasks
// https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
function warnTheSheep(queue) {
  for (let i = queue.length - 1; i >= 0; i--) {
    if (queue[i] === "wolf") {
      const numberOfSheep = queue.length - 1 - i;
      if (numberOfSheep === 0) {
        return "Pls go away and stop eating my sheep";
      } else {
        return ("Oi! Sheep number " + numberOfSheep + "! You are about to be eaten by a wolf!");
      }
    }
  }
}

// https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript
function maps(x) {
  const doubledArray = [];
  for (let i = 0; i < x.length; i++) {
    doubledArray.push(x[i] * 2);
  }
  return doubledArray;
}

// https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
function firstNonConsecutive(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + 1) {
      return arr[i];
    }
  }
  return null;
}
