// https://www.codewars.com/kata/basics-generators-number-1/javascript

function* generator() {
    for (let x = 1; true; x++) {
        yield x;
    }
}

// https://www.codewars.com/kata/5637ead70013386e30000027/

// function* generator(a) {

// }

function* generator() {
    for (var x = 1; true; x++) {
        yield '1 x ' + x + ' = ' + x;
    }
}

// for (var x of generator()) {
//   console.log(x)
// }