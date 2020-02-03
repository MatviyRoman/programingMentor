//https://www.codewars.com/kata/571f832f07363d295d001ba8/train/javascript
function trueOrFalse(val) {
  if (val == false || val == undefined || val == null) return "false";
  else return "true";
}

//https://www.codewars.com/kata/572059afc2f4612825000d8a/train/javascript
function howManydays(month) {
  var days;
  switch (month) {
    case 1:
      days = 31;
      break;
    case 2:
      days = 28;
      break;
    case 3:
      days = 31;
      break;
    case 4:
      days = 30;
      break;
    default:
      days = 31;
  }
  return days;
}

//www.codewars.com/kata/57202aefe8d6c514300001fd/train/javascript
var price;

function saleHotdogs(n) {
  if (n < 5) {
    price = n * 100;
  } else if (n >= 5 && n < 10) {
    price = n * 95;
  } else if (n >= 10) {
    price = n * 90;
  }
  return price;
}

// var price;
// function saleHotdogs(n) {
//   if (n < 5) {
//     price = 100;
//   } else if (n >= 5 || n < 10) {
//     price = 95;
//   } else if (n >= 10) {
//     price = 90;
//   }
//   return price;
// }
