//https://www.codewars.com/kata/singleton-pattern/train/javascript

const Singleton = (function() {
  let instance;

  function create() {
    let obj1 = new Object();
    return obj1;
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = create();
      }
      return instance;
    }
  };
})();

let obj1 = Singleton.getInstance();
let obj2 = Singleton.getInstance();

return obj1 === obj2;
console.log(obj1 === obj2);
obj1.test = 1;
console.log(obj1.test);
obj2.test;
console.log(obj2.test);

//https://www.codewars.com/kata/53844152aa6fc137d8000589/train/javascript
function always(n) {
  return test(n);
}

function test(n) {
  return n;
}
