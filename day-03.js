//https://www.codewars.com/kata/571f832f07363d295d001ba8/train/javascript
function trueOrFalse(val) {
  if (a > b) return false;
  else if (a === b) return false;
  else if (a < b) return true;
  else if (!a == b) return true;
  else if (b > c) return true;
  else if (b === c) return false;
  else if (b < c) return false;
  else if (!b == c) return true;
  else if (a === c) return true;
  else if (!a == c) return false;
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

var price;

//www.codewars.com/kata/57202aefe8d6c514300001fd/train/javascript
https: function saleHotdogs(n) {
  if (n < 5) {
    price = 100;
  } else if (n >= 5 || n < 10) {
    price = 95;
  } else if (n >= 10) {
    price = 90;
  }
  return price;
}

//https://www.codewars.com/kata/571f832f07363d295d001ba8/train/javascript
function trueOrFalse(val) {
  if (val > 1) return false;
  // else if (val === ) return true;
  //   else if ( a === b )    return false;
  //   else if ( a < b ) return true;
  //   else if ( !a == b ) return true;
  //   else if ( b > c ) return true;
  //   else if ( b === c ) return false;
  //   else if ( b < c ) return false;
  //   else if ( !b == c ) return true;
  //   else if ( a === c ) return true;
  //   else if ( !a == c ) return false;
}
