// http://tddbin.com/#?kata=es6/language/generator/creation
// 49: Generator - creation
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Generators can be created in multiple ways', function() {
  it('the most common way is by adding `*` after `function`', function() {
    function* g() {}
    assertIsGenerator(g());
  });
  it('as a function expression, by adding a `*` after `function`', function() {
    let g = function*() {};
    assertIsGenerator(g());
  });
  it('inside an object by prefixing the function name with `*`', function() {
    let obj = {
      *g() {}
    };
    assertIsGenerator(obj.g());
  });
  it('computed generator names, are just prefixed with a `*`', function() {
    const generatorName = 'g';
    let obj = {
      *[generatorName]() {}
    };
    assertIsGenerator(obj.g());
  });
  it('inside a class the same way', function() {
    const generatorName = 'g';
    class Klazz {
      *[generatorName]() {}
    }
    assertIsGenerator(new Klazz().g());
  });

  function assertIsGenerator(gen) {
    const toStringed = '' + gen;
    assert.equal(toStringed, '[object Generator]');
  }
});

// http://tddbin.com/#?kata=es6/language/generator/iterator

// 50: Generator - iterator
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Generators returns an iterable object', function() {
  function* generatorFunction() {
    yield 1;
    yield 2;
  }
  let generator;
  beforeEach(() => {
    generator = generatorFunction();
  });
  it('a generator returns an object', function() {
    const typeOfTheGenerator = 'object';
    assert.equal(typeof generator, typeOfTheGenerator);
  });
  it('a generator object has a key `Symbol.iterator`', function() {
    const key = Symbol.iterator;
    assert.equal(key in generator, true);
  });
  it('the `Symbol.iterator` is a function', function() {
    const theType = typeof generator[Symbol.iterator];
    assert.equal(theType, 'function');
  });
  it('can be looped with `for-of`, which expects an iterable', function() {
    function iterateForOf() {
      for (let value of generator) {
        // no statements needed
      }
    }
    assert.doesNotThrow(iterateForOf);
  });
});

// http://tddbin.com/#?kata=es6/language/generator/yield

// 51: Generator - Yield Expressions
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Generator - `yield` is used to pause and resume a generator function', () => {
  function* generatorFunction() {
    yield 'hello';
    yield 'world';
  }
  let generator;

  beforeEach(function() {
    generator = generatorFunction();
  });
  it('converting a generator to an array (using `Array.from`) resumes the generator until all values are received', () => {
    let values = Array.from(generator);
    assert.deepEqual(values, ['hello', 'world']);
  });
  describe('after the first `generator.next()` call', function() {
    it('the value is "hello"', function() {
      const { value } = generator.next();
      assert.equal(value, 'hello');
    });
    it('and `done` is false', function() {
      const { done } = generator.next();
      assert.equal(done, false);
    });
  });
  describe('after the second `next()` call', function() {
    let secondItem;
    beforeEach(function() {
      secondItem = generator.next();
    });
    it('`value` is "world"', function() {
      let { value } = generator.next();
      assert.equal(value, 'world');
    });
    it('and `done` is still false', function() {
      const { done } = secondItem;
      assert.equal(done, false);
    });
  });
  describe('after stepping past the last element, calling `next()` that often', function() {
    it('`done` property equals true, since there is nothing more to iterator over', function() {
      generator.next();
      generator.next();
      let { done } = generator.next();
      assert.equal(done, true);
    });
  });
});

// http://tddbin.com/#?kata=es6/language/generator/send-value

// 52: Generator - Send value to a generator
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Pass a value to a generator', () => {
  it('basics: get the values from a generator in two ways', function() {
    function* generatorFunction() {
      yield 1;
      yield 2;
    }
    // way #1
    var convertedToAnArray = Array.from(generatorFunction());
    // way #2
    var iterator = generatorFunction();
    var iteratedOver = [iterator.next().value, iterator.next().value];
    assert.deepEqual(convertedToAnArray, iteratedOver);
  });
  it('pass a value to the iterator', function() {
    function* generatorFunction() {
      yield 1;
      yield 2;
    }
    var iterator = generatorFunction();
    var iteratedOver = [iterator.next().value, iterator.next(2).value];
    assert.deepEqual([1, 2], iteratedOver);
  });
  it('a value passed to the 1st `next()` call is ignored', function() {
    function* generatorFunction() {
      const parametr = yield 1;
      yield parametr;
    }
    let iterator = generatorFunction();
    const values = [iterator.next('irrelevant').value, iterator.next(2).value];
    assert.deepEqual(values, [1, 2]);
  });
});

// http://tddbin.com/#?kata=es6/language/generator/send-function

// 56: Generator - Send function to a generator
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Pass a function to a generator', () => {
  it('the generator can receive a function as a value', function() {
    const fn = function() {};
    function* generatorFunction(fn) {
      yield;
      assert.equal(yield null, fn); // remember, don't touch this line
    }
    let iterator = generatorFunction();
    iterator.next();
    iterator.next();
  });
  it('pass a function to the iterator, which calls it', function() {
    const fn = value => value;
    function* generatorFunction(fn) {
      yield fn(1);
      yield fn(2);
    }
    const iterator = generatorFunction(fn);
    const iteratedOver = [iterator.next().value, iterator.next().value];

    assert.deepEqual([1, 2], iteratedOver);
  });
  it('nesting yielded function calls', function() {
    const fn = function() {};
    function* generatorFunction(fn) {
      yield 1, fn(yield 2, fn(yield 3, fn()));
    }
    const iterator = generatorFunction(fn);
    const iteratedOver = [
      iterator.next().value,
      iterator.next().value,
      iterator.next().value
    ];
    assert.deepEqual([1, 2, 3], iteratedOver);
  });
});

// http://tddbin.com/#?kata=es6/language/generator/return

// 73: Generator - `return` inside a generator is special
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`return` in a generator function is special', function() {
  describe('the returned value is an IteratorResult (just like any value returned via `yield`)', function() {
    it('returns an IteratorResult (an object with the properties `value` and `done`)', function() {
      function* generatorFunction() {
        return 1;
      }
      const returned = generatorFunction().next();
      const propertyNames = ['value', 'done'];
      assert.deepEqual(Object.keys(returned), propertyNames);
    });
    it('the property `value` is the returned value', function() {
      function* generatorFunction() {
        return 23;
      }
      const { value } = generatorFunction().next();
      assert.equal(value, 23);
    });
    it('the property `done` is true', function() {
      function* generatorFunction() {
        return 42;
      }
      const { done } = generatorFunction().next();
      assert.equal(done, true);
    });
    it('NOTE: `yield` does not return `done=true` but `done=false`!', function() {
      function* generatorFunction() {
        yield 1;
      }
      const returned = generatorFunction().next();
      assert.deepEqual(returned, { value: 1, done: false });
    });
    it('a missing `return` returns `{value: undefined, done: true}`', function() {
      function* generatorFunction() {}
      const returned = generatorFunction().next();
      assert.deepEqual(returned, { value: void 0, done: true });
    });
  });

  describe('mixing `return` and `yield`', function() {
    function* generatorFunctionWithYieldAndReturn() {
      yield 1;
      return 2;
    }
    it('is possible', function() {
      const iterator = generatorFunctionWithYieldAndReturn();
      const values = [iterator.next(), iterator.next()];
      assert.deepEqual(values, [
        { value: 1, done: false },
        { value: 2, done: true }
      ]);
    });
    it('the mix behaves different to two `yield`s', function() {
      const iterator = generatorFunctionWithYieldAndReturn();
      const values = [1];
      assert.deepEqual(Array.from(iterator), values);
    });
    it('two `yield`s returning values', function() {
      function* generatorFunctionWithTwoYields() {
        yield 1;
        yield 2;
      }
      assert.deepEqual(Array.from(generatorFunctionWithTwoYields()), [1, 2]);
    });
    it('return a yielded value by "chaining" `return` and `yield`', function() {
      function* generatorFunction() {
        yield 1;
        yield 2;
      }
      const iterator = generatorFunction();
      const values = [iterator.next().value, iterator.next(2).value];
      assert.deepEqual(values, [1, 2]);
    });
  });
});
