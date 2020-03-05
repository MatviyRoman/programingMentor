// https://www.codewars.com/kata/5c743cec901022438549964a

function createIterator(array) {
  var nextIndex = 0;

  return {
    next: function() {
      return nextIndex < array.length
        ? { value: array[nextIndex++], done: false }
        : { done: true };
    }
  };
}

const it = createIterator('array');
it.next().value;
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().done); // true

// const createIterator = (array) => {
// console.log(createIterator.next().value);};
//const firstItem = iterator.next();

// const arr = ['a', 'B', 'see'];
//   describe('the iterator', function() {
//     it('an array has an iterator, which is a function', function() {
//       const iterator = arr[Symbol.iterator];
//       const theType = typeof iterator;
//       const expected = 'function';
//       assert.equal(theType, expected);
//     });

// const createIterator = array[Symbol.iterator];
// const theType = typeof iterator;
// const expected = 'function';
