function isPalindrome(string) {
  // Start coding here
  // แปลง string เป็น Array โดยตัดช่องว่างออก
  let characters = string.split("");
  // กลับด้าน Array
  let reversedCharacters = characters.reverse();
  // แปลง Array กลับเป็น string
  let reversedString = reversedCharacters.join("");
  // ตรวจสอบว่า string สองตัวเท่ากันหรือไม่
  return string === reversedString
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("noon")); // true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false