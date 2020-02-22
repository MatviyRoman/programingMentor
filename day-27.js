//https://www.codewars.com/kata/shifty-closures/train/javascript

let greet_abe = function() {
  let name = 'Abe';
  return 'Hello, ' + name + '!';
  console.log(name);
};

let greet_ben = function() {
  let name = 'Ben';
  return 'Hello, ' + name + '!';
};

greet_abe();
greet_ben();

console.log(greet_abe());
console.log(greet_ben());

//https://www.codewars.com/kata/56b71b1dbd06e6d88100092a/train/javascript
function buildFun(n) {
  let res = [];

  for (let i = 0; i < n; i++) {
    res.push(function() {
      console.log(i);
      return i;
    });
  }
  return res;
  console.log(res);
}
