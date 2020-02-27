// https://www.codewars.com/kata/547c71fdc5b2b38db1000098/train/javascript

function NameMe(first, last) {
    this.firstName = first,this.lastName = last;
    //return {name: this.firstName + ' ' + this.lastName};
}


// https://www.codewars.com/kata/this-is-an-other-problem

function NamedOne(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.fullName = this.firstName + ' ' + this.lastName;
}