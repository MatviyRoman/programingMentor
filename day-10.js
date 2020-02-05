//https://www.codewars.com/kata/5728203b7fc662a4c4000ef3/train/javascript
function alienLanguage(str) {
    let words = str.split(' ');
    console.log(words.length);
    if (words.length > 3) {
      for (let i = 0; i < words.length; i++) {
        words[1] = words[i][0].toUpperCase() + words[i].slice(1);
      }
      console.log(words.join(''));
    } else {
      //     for (let i = 0;i<3;i++){
      //     words[i]=words[i][0].toUpperCase()+words[i].slice(1);
      var result = str[0].toUpperCase() + str.slice(3);
  
      //     }
      console.log(words.join(''));
      return words.join(' ');
    }
  }
  
  //https://www.codewars.com/kata/5729b103dd8bac11a900119e/train/javascript
  function fiveLine(s) {
    let str = s.trim();
    return str;
    console.log(str);
  
    // for (let i =0; i > s.lenght; i++) {
    //   let str = s[i].trim();
    //   console.log(str[i]);
    //   return s[i];
    //   }
  }
  