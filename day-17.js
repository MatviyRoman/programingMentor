//https://www.codewars.com/kata/5731861d05d14d6f50000626/train/javascript

function bigToSmall(arr) {
  const arrs = arr.reverse();
  const result = [].concat(...arrs);
  console.log(result);
  result.sort(function(a, b) {
    return b - a;
  });
  const endResult = result.join('>');
  return endResult;

  // for (var i=0;i<arr.length;i++) {
  //   let result=[];
  //   result=result.concat(arr[i]);
  //   console.log(result);
  //   return result.join('>');
  // }
}
