//https://www.codewars.com/kata/playing-with-sets-equal-or-not/train/javascript

//function areEqual(s1, s2){
// const s1reversed = s1.reverse();
// const s2reversed = s2.reverse();
//   if (s1reversed == s2) {
//     return s1reversed == s2;
//     console.log(s1reversed + ' ' + s2);
//   } else if (s1 == s2.reversed) {
//   } else if (s1 === s2) {
//     return s1 === s2;
//   }
//}

function isAtom(a) {
  return (
    typeof a === "string" || typeof a === "number" || typeof a === "boolean"
  );
}

function isNumber(a) {
  return isFinite(a);
}

function isEqn(n, m) {
  return !gt(n, m) && !lt(n, m);
}

function isZero(s) {
  return s === 0;
}

function gt(n, m) {
  return isZero(n) ? false : isZero(m) || gt(sub1(n), sub1(m));
}

function sub1(n) {
  return n - 1;
}

function isEq(s, t) {
  return s === t;
}

function lt(n, m) {
  return isZero(m) ? false : isZero(n) || lt(sub1(n), sub1(m));
}

function isEqlist(l1, l2) {
  return isNull(l1) && isNull(l2)
    ? true
    : isNull(l1) || isNull(l2)
    ? false
    : isAtom(car(l1)) && isAtom(car(l2))
    ? isEqan(car(l1), car(l2)) && isEqlist(cdr(l1), cdr(l2))
    : isAtom(car(l1)) || isAtom(car(l2))
    ? false
    : isEqlist(car(l1), car(l2)) && isEqlist(cdr(l1), cdr(l2));
}

function car(s) {
  return s[0];
}

function cdr(s) {
  return s[1];
}

function isNull(a) {
  return typeof a === "undefined" || (typeof a === "object" && !a);
}

function isEqan(a1, a2) {
  return isNumber(a1) && isNumber(a2)
    ? isEqn(a1, a2)
    : isNumber(a1) || isNumber(a2)
    ? false
    : isEq(a1, a2);
}

function areEqual(s1, s2) {
  return isAtom(s1) && isAtom(s2)
    ? areEqual(s1, s2)
    : isAtom(s1) || isAtom(s2)
    ? false
    : isEqlist(s1, s2);
}

function notEqual(s1, s2) {
  //return !s1 === s2;

  return isAtom(s1) || isAtom(s2)
    ? notEqual(s1, s2)
    : isAtom(s1) && isAtom(s2)
    ? false
    : isEqlist(s1, s2);
}
