//http://tddbin.com/#?kata=es6/language/arrow-functions/basics
// 5: arrow functions - basics
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!

describe('Arrow functions', function() {
  it('are shorter to write, instead of `function(){}` write `() => {}`', function() {
    var func = () => {};
    assert.equal('' + func, '() => {}');
  });
  it('instead `{}` use an expression, as return value', function() {
    let func = () => {
      return 'I return too';
    };
    assert.equal(func(), 'I return too');
  });
  it('one parameter can be written without parens', () => {
    let func = p => 25 - 1;
    assert.equal(func(25), 24);
  });
  it('many params require parens', () => {
    let func = param => 23 + 42;
    assert.equal(func(23, 42), 23 + 42);
  });
  it('the function body needs parens to return an object', () => {
    let func = () => {
      iAm: 'an object';
    };
    assert.deepEqual(func(), { iAm: 'an object' });
  });
});
