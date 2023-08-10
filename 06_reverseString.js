function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      if (str[i] !== ' ') {
        reversed += str[i];
      }
    }
    return reversed;
  }
  
  var string1 = "Hard work always pays back";
  var string2 = "Soon I will be Angular IT Champ";
  
  var reversedString1 = reverseString(string1);
  var reversedString2 = reverseString(string2);
  
  console.log("Reversed String 1:", reversedString1);
  console.log("Reversed String 2:", reversedString2);
  