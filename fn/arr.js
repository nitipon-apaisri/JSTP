//containElement
let arr = [1, 7, 1, 0, 5];
let element = 9;

let containsElement = (arr, element) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return true;
    } else {
      return false;
    }
  }
};
console.log(containsElement(arr, element));

//indexOfElemt

let arr = [1, 7, 1, 0, 5];
let element = 1;

let containsElement = (arr, element) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return 0;
    } else {
      return -1;
    }
  }
};
console.log(containsElement(arr, element));

//min

let arr = [100, 2, 5, 6];
let smallest = arr[0];
let min = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
};
console.log(min(arr));

//max

let arr = [100, 2, 5, 6];
let largest = arr[0];
let min = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
};
console.log(min(arr));

//sum
let arr = [1, 2, 3, 5];
let sum = (arr) => {
  let output = 0;
  for (let i = 0; i < arr.length; i++) {
    output += arr[i];
  }
  return output;
};
console.log(sum(arr));

//mean

let arr = [4, 4, 10];
let mean = (arr) => {
  let output = 0;
  for (let i = 0; i < arr.length; i++) {
    output += arr[i];
  }
  return output / arr.length;
};
console.log(mean(arr));

//reverse

let arr = [1, 2, 3, 4, 5];
let reverse = (arr) => {
  let output = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    output.push(arr[i]);
  }
  return output;
};

console.log(reverse(arr));

//filter

let arr = [1, 7, 1, 0, 5];
let element = 1;

let containsElement = (arr, element) => {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      output.push(arr[i]);
    }
  }

  return output;
};
console.log(containsElement(arr, element));

//exclude

let arr = [1, 2, 4, 5, 2];
let element = 2;
let exclude = (arr) => {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== element) {
      output.push(arr[i]);
    }
  }
  return output;
};

console.log(exclude(arr, element));

// uniqe

let arr = [1, 3, 4, 4, 5];

let uniqe = (arr) => {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] !== arr[i]) {
      output.push(arr[i]);
    }
  }
  return output;
};

console.log(uniqe(arr));

//split

let str = "Kalle,Olof,Gösta";
let split = (str) => {
  let output = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ",") {
      output += str[i];
    } else {
      output += ",";
    }
  }
  return output;
};

console.log(split(str));

//join

let str = ["Kalle", "Olof", "Gösta"];
let split = (str) => {
  let output = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ",") {
      output = output + str[i] + ",";
    }
  }
  return output;
};

console.log(split(str));
