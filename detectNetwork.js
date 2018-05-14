// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  if ((cardNumber.startsWith('38') || cardNumber.startsWith('39')) && cardNumber.length === 14){
    return "Diner's Club";
  }
  if ((cardNumber.startsWith('34') || cardNumber.startsWith('37')) && cardNumber.length === 15){
      return "American Express";
  }
  if (cardNumber.startsWith('4') && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)){
    return "Visa";
  }
  if ((cardNumber.startsWith('51') || cardNumber.startsWith('52') || cardNumber.startsWith('53') || cardNumber.startsWith('54') || cardNumber.startsWith('55')) && (cardNumber.length === 16){
    return "Mastercard";
  } 
  // Once you've read this, go ahead and try to implement this function, then return to the console.
};



