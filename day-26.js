//https://www.codewars.com/kata/559f3e20f4f29869cf0000ea/train/javascript
let OrderPeople = function(people) {
  return people.sort((a, b) => {
    if (a.age < b.age) return -1;
    if (a.age > b.age) return 1;
    return 0;
  });
};

//https://www.codewars.com/kata/5388a9d60b24c52f4c000b5f/train/javascript
Function.prototype.bind = function(ctx) {
  return function(...ctx) {
    return func.call(this, ...ctx);
  };
};
