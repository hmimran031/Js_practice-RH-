// For loop
var i;
for (i = 0; i < 10; i = i + 1) {
  console.log(i);
}

// While Loop /
var i = 0;
while (i < 5) {
  console.log(i);
  i = i + 1;
}

// Do While Loop
var i = 0;
do {
  console.log(i);
  if (i === 1) {
    break;
  }
  i = i + 1;
} while (i < 5);

// Example of a for loop to print numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Example of a while loop to print numbers from 1 to 5
let j = 1;
while (j <= 5) {
  console.log(j);
  j++;
}

// Example of a do-while loop to print numbers from 1 to 5
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 5);
