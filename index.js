




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };
function calculateTax(amount) {
  return amount * 0.10;
}

function convertToUpperCase(text) {
  return text.toUpperCase();
}

function findMaximum(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

function isPalindrome(word) {
  const reversed = word.split('').reverse().join('');
  return word.toLowerCase() === reversed.toLowerCase();
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
  const discount = (originalPrice * discountPercentage) / 100;
  return originalPrice - discount;
}


console.log(calculateTax(200)); // 20
console.log(convertToUpperCase("hello")); // HELLO
console.log(findMaximum(4, 9)); // 9
console.log(isPalindrome("Level")); // true
console.log(calculateDiscountedPrice(100, 15)); // 85
