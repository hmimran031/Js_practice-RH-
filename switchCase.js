// switch
var marks = 33;
switch (true) {
  case marks <= 100 && marks >= 80:
    console.log("A+ grade");
    break;

  case marks < 88 && marks >= 70:
    console.log("A grade");
    break;

  case marks < 70 && marks >= 60:
    console.log("A- grade");
    break;

  case marks < 60 && marks >= 50:
    console.log("B grade");
    break;

  case marks < 50 && marks >= 40:
    console.log("C grade");
    break;

  case marks < 40 && marks >= 33:
    console.log("D grade");
    break;

  default:
    console.log("You are Fail");
}
