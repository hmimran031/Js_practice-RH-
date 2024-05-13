// Define a variable
let num = 10;

// Check if the number is positive
if (num > 0) {
  console.log("Number is positive");
}
// Check if the number is negative
else if (num < 0) {
  console.log("Number is negative");
}
// If neither positive nor negative, it must be zero
else {
  console.log("Number is zero");
}

// Another example using multiple conditions
let temperature = 25;

// Check if the temperature is hot
if (temperature > 30) {
  console.log("It's hot outside!");
}
// Check if the temperature is moderate
else if (temperature >= 20 && temperature <= 30) {
  console.log("It's a pleasant day.");
}
// If neither hot nor moderate, it must be cold
else {
  console.log("It's cold outside.");
}

// Example with strings
let fruit = "apple";

// Check if the fruit is an apple
if (fruit === "apple") {
  console.log("It's an apple.");
}
// Check if the fruit is a banana
else if (fruit === "banana") {
  console.log("It's a banana.");
}
// If neither apple nor banana, just print the fruit name
else {
  console.log("It's some other fruit.");
}
