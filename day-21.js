//https://www.codewars.com/kata/573fb9223f9793e485000453/train/javascript

let regex = /\d(?=(\d{3})+$)/g;
function addCommas(money, reg) {
  return money.replace(reg, x => x + ','); //like this
}

//https://www.codewars.com/kata/573d11c48b97c0ad970002d4/train/javascript
//const regex = ('^https?://.(?:w{3}.)?[a-zA-Z0-9_-]+.com|net|com.net');
//const regex = ("^(https?):\/\/[^\s$.?#].[^\s]*$\.(com|net)");
