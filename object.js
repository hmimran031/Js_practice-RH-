//
var myPc = {
  brand: "HP",
  screen: "16'5",
  islaptop: "true",
  ram: "8gb",
  disk: "500gb",
  isSSD: "true",
  processor: "core i-5",
};
console.log(myPc);

//
var myPc = {
  brand: "HP",
  screen: "16'5",
  islaptop: "true",
  ram: "8gb",
  disk: "500gb",
  isSSD: "true",
  processor: "core i-5",
};
console.log(myPc["isSSD"]);

//
var myPc = {
  brand: "HP",
  screen: "16'5",
  islaptop: "true",
  ram: "8gb",
  disk: "500gb",
  isSSD: "true",
  processor: "core i-5",
};
console.log(myPc.brand);

// For In Loop use in Objecty

var Person = {
  name: "Jack",
  age: 30,
  city: "London",
  height: "5'6",
};

for (var item in Person) {
  console.log(Person[item]);
}
