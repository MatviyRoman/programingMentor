//https://www.codewars.com/kata/540de1f0716ab384b4000828/train/javascript
function spread(func, args) {
  return func(...args);
}

//https://www.codewars.com/kata/5258b272e6925db09900386a/train/javascript
// TODO: Add your tests here
// Starting from Node 10.x, [Mocha](https://mochajs.org) is used instead of our custom test framework.
// [Codewars' assertion methods](https://github.com/Codewars/codewars.com/wiki/Codewars-JavaScript-Test-Framework)
// are still available for now.
//
// For new tests, using [Chai](https://chaijs.com/) is recommended.
// You can use it by requiring:
//     const assert = require("chai").assert;
// If the failure output for deep equality is truncated, `chai.config.truncateThreshold` can be adjusted.

describe('Solution', function() {
  it('should test for something', function() {
    Test.assertEquals(1 + 1, 2);
    assert.strictEqual(1 + 1, 2);
  });
});
