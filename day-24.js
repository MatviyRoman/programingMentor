//https://www.codewars.com/kata/541629460b198da04e000bb9/train/javascript
function last(list) {
  if (typeof list === 'string') {
    return list.charAt(list.length - 1);
  } else if (typeof list === 'object') {
    return list[list.length - 1];
  } else {
    return 5;
    //if(typeof list === 'arguments')
    //let array = [].slice.call(list, 0);
    //return array[array.length - 1];
    //console.log(array[array.length - 1]);
    //}
  }
}

//https://www.codewars.com/kata/520d9c27e9940532eb00018e/train/javascript
function solution() {
  for (let i = 0; i < arguments.length; i++) {
    for (let j = i + 1; j < arguments.length; j++)
      if (arguments[i] === arguments[j]) {
        return true;
      }
  }
  return false;
}
