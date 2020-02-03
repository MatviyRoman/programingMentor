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
