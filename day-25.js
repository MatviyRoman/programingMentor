//https://www.codewars.com/kata/53d4eec01f1a9b3020000786/train/javascript
name = 'The Window';

let alpha = {
  name: 'My Alpha',
  getNameFunc: function() {
    return function() {
      return alpha.name;
    };
  }
};
