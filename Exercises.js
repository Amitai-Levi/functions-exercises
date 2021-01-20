//Question 1
function myReverse(str) {
  let resolt = "";

  for (let i = str.length - 1; i >= 0; i--) {
    resolt += str[i];
  }

  return resolt;
}

//Question 2
function allCombinations(str) {
  let combinations = [];
  // your code here
  for (let i = 0; i < str.length; i++) {
    let comb = "";
    for (let x = i; x < str.length; x++) {
      comb += str[x];
      combinations.push(comb);
    }
  }
  //
  return combinations;
}
//Question 3
function allCaps(str) {
  // your code here
  let resolt = "";
  let wordStart = true;

  for (let i = 0; i < str.length; i++) {
    if (wordStart) {
      resolt += str[i].toUpperCase();
      wordStart = false;
    } else {
      resolt += str[i];
    }
    if (str[i] === " ") {
      wordStart = true;
    }
  }

  return resolt;
}
//Question 4
function myPower(x, n) {
  // your code here
  for (let i = 0; i < n; i++) {
    x *= x;
  }

  return x;
}

//Question 5
function getFirstNotRepeating(str) {
  // your code here
  let flag;

  for (let i = 0; i < str.length; i++) {
    flag = true;
    for (let x = 0; x < str.length; x++) {
      if (str[i] === str[x] && x !== i) {
        flag = false;
      }
    }
    if (flag) {
      return str[i];
    }
  }

  return "";
}

//Question 6 (Bonus)
function isPrefectNumber(num) {
  // your code here
  return "I'm not interested in the bonus question :(";
}

// *** Playground ***
// Feel free to run and test your code here on your own

// *** End of Playground ***

// Don't touch me :)
exports.myReverse = myReverse;
exports.allCombinations = allCombinations;
exports.allCaps = allCaps;
exports.myPower = myPower;
exports.getFirstNotRepeating = getFirstNotRepeating;
exports.isPrefectNumber = isPrefectNumber;
