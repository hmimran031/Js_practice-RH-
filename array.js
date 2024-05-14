//
var city = ["Dhaka", "Barishal", "khulna", "Rangpur"];

console.log(city);
console.log(city[1]);

// For Loop use in array

var city = ["Dhaka", "Barishal", "khulna", "Rangpur", "Savar"];

var i;
for (i = 0; i < city.length; i = i + 1) {
  console.log(city[i]);
}

// For In Loop use in array
var city = ["Dhaka", "Barishal", "khulna", "Rangpur", "Savar", "Bandorban"];

for (var item in city) {
  console.log(city[item]);
}

/* ********************************************************************** */
// Concat Array (jog kora)

var num1 = ["A", "B", "C", "D"];
var num2 = ["E", "F", "G", "H"];
var num3 = num1.concat(num2);
console.log(num3);

// [(Array Form Method) :-> akta string ke array te convert kore]

var Titel = "Learn With Rabbil"; /*This is String */
var TitelArray = Array.from(Titel); /* Converting */
console.log(TitelArray); /* This is Array*/
console.log(TitelArray[16]); /* This is Array index*/

/* ******************************************************************** */
// Array Filter

var numberArray = [
  5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
  100,
];

var value = numberArray.filter(function (item) {
  return item > 50;
});
console.log(value);

// or

var numberArray = [
  5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
  100,
];

var value = numberArray.filter(function (item) {
  return item < 50;
});
console.log(value);

/* ******************************************************************** */
// Array Find Method

var numberArray = [
  5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
  100,
];

var result = numberArray.find(function (value) {
  return value < 6;
});
console.log(result);

// Array  FInd Index Method
var numberArray = [
  5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
  100,
];

var result = numberArray.findIndex(function (value) {
  return value > 95;
});
console.log(result);

/* ******************************************************************** */
// Array For Each Method
var numberArray = [
  5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
  100,
];

numberArray.forEach(function (item) {
  console.log(item);
});

/* ******************************************************************** */
// Array Includes Method (khuje ber kora)

var numberArray = [
  5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
  100,
];

var result = numberArray.includes(70);
console.log(result);

// Array Includes Method  (khuje ber kora)

var numberArray = [
  5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
  100,
];

var result = numberArray.indexOf(85);
console.log(result);

/* ******************************************************************** */
// Array Reverse Method
var numberArray = [
  5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
  100,
];

var result = numberArray.reverse();
console.log(result);

// Array Push Method
var numberArray = [
  5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
  100,
];

numberArray.push(101, 102);
console.log(numberArray);

// Array Pop Method
var numberArray = [
  5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
  100,
];

numberArray.pop();
numberArray.pop();

console.log(numberArray);

/* ******************************************************************** */
// Array Sort Method
var numberArray = [95, 10, 15, 45, 50, 30, 55, 53, 60, 25, 65];

numberArray.sort();
console.log(numberArray);

// Array Sort With Reverse Method
var numberArray = [95, 10, 15, 45, 50, 30, 55, 53, 60, 25, 65];

numberArray.sort().reverse();
console.log(numberArray);

// Array slice Method
var numberArray = [
  5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
  100,
];
var result = numberArray.slice(0, 18);
console.log(result);

/* ******************************************************************** */
// Array splice Method (Remove )

/* index, removeCount, item */
var numberArray = [
  5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
  100,
];

numberArray.splice(1, 2);
console.log(numberArray);

// Array splice Method (Add )

/* index, removeCount, item */
var numberArray = [
  5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
  100,
];

numberArray.splice(20, 0, 2);
console.log(numberArray);
