//https://www.codewars.com/kata/57238ceaef9008adc7000603/train/javascript

function colorOf(r, g, b) {
  let red = r.toString(16).padStart(2, 0),
    green = g.toString(16).padStart(2, 0),
    blue = b.toString(16).padStart(2, 0);
  return "#" + (red + green + blue);
  console.log([red, green, blue]);

  // return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  // return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
}

//https://www.codewars.com/kata/5722fd3ab7162a3a4500031f/train/javascript
function whatNumberIsIt(n) {
  //coding here
  if (n === 100) {
    return "Input number is 100";
  } else if (n == Infinity + 1) {
    return "Input number is Number.POSITIVE_INFINITY";
  } else if (n == -Number.MAX_VALUE * 2) {
    return "Input number is Number.NEGATIVE_INFINITY";
  } else if (n == 5e-324) {
    return "Input number is Number.MIN_VALUE";
  } else if (n === 1.7976931348623157e308) {
    return "Input number is Number.MAX_VALUE";
  } else if (n > 0) {
    return "Input number is " + n;
  } else {
    return "Input number is Number.NaN";
  }
}
