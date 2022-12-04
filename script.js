// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
var length = prompt("Choose a number for password length between 10 and 64 characters.")
if (length<10){
  alert("Password length cannot be less than 10 characters.")
  return getPasswordOptions();
  }else if(length>64){
    alert("Password length cannot be more than 64 characters.")
    return getPasswordOptions();
  }else {
  var checkNumeric = confirm("do you want to include numeric characters?")
  var checkLower = confirm("do you want to include lower characters?")
  var checkUpper = confirm("do you want to include upper characters?")
  var checkSpecialCharacter = confirm("do you want to include special characters?")
  if(checkNumeric || checkLower || checkUpper || checkSpecialCharacter){
    return [length, checkNumeric, checkLower, checkUpper, checkSpecialCharacter];
  }
  return false;
}
}

// Function for getting a random element from an array
function getRandom(arr, length) {

}

// Function to generate password with user input
function generatePassword() {



}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
