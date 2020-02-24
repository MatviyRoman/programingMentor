//https://www.codewars.com/kata/525a5b2185a9a4f5670006c1/train/javascript
const create = new MyObject();
const myObj = {
  __proto__: create
};

//https://www.codewars.com/kata/558cb3df5f511f40d500001d/train/javascript
function nouveau(Constructor) {
  // Don't forget, unnamed arguments after Constructor may be passed in!
  let user = new Constructor('Guy');
  console.log(user);
  return user;
}
