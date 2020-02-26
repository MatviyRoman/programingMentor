//https://www.codewars.com/kata/525a5b2185a9a4f5670006c1/train/javascript
const create = new MyObject();
const myObj = {
  __proto__: create
};

//https://www.codewars.com/kata/558cb3df5f511f40d500001d/train/javascript
// function nouveau(Constructor) {
//   let user = new Constructor('Guy');
//   console.log(user);
//   return user;
// }

function nouveau(Constructor) {
  let args = Array.call(this, ...arguments).slice(1);
  instance = Object.create(Constructor.prototype);
  if (
    (Constructor.apply(instance, args) !== null &&
      typeof Constructor.apply(instance, args) === 'object') ||
    (typeof Constructor.apply(instance, args) === 'function' &&
      Constructor.apply(instance, args))
  )
    return Constructor.apply(instance, args);
  else return instance;
}
