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
//Variable declaration

let confirmLength = "";
let confirmUpperCase;
let confirmLoweCase;
let confirmNumericCharacter;
let confirmSpecialCharacter;

// Function to prompt user for password options
function getPasswordOptions() {

  //Password length prompt
  let confirmLength = parseInt(prompt("Enter password length between 10 & 64 characters"));
  //loop if answer is outside the range
  if (confirmLength < 10 || confirmLength > 64 || isNaN(confirmLength)) {
    alert("Password lenght must be between 10 & 64 characters. Try again!");
    let confirmLength = parseInt(prompt("Enter password length between 10 & 64 characters"));
  }

  //Repeat back how many characters the user will have
  alert(`Your password will have ${confirmLenght} characters`);

  //console.log(confirmLength);

  //Determine parameters of password
  let confirmUpperCase = confirm("Do you want Uppercase in your password?");
  let confirmLoweCase = confirm("Do you want Lowercase in your password?");
  let confirmNumericCharacter = confirm("Do you want Numbers in your password?");
  let confirmSpecialCharacter = confirm("Do you want Special characters in your password?");
  //Loop if answer is outside parameters
  while (passwordUpperCase === false && confirmLoweCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
    alert("Please choose at least one option to continue");
    let confirmUpperCase = confirm("Do you want Uppercase in your password?");
    let confirmLoweCase = confirm("Do you want Lowercase in your password?");
    let confirmNumericCharacter = confirm("Do you want Numbers in your password?");
    let confirmSpecialCharacter = confirm("Do you want Special characters in your password?");

  }

}
const passwordObject = {
  upper: getRandomUpper,
  lower: getRandomLower,
  number: getRandomNumeric,
  special: getRandomSpecial,
}
//console.log(passwordObject);

//Generator functions

function getRandomUpper() {
  if (passwordUpperCase) {
    upperCaseArray = characterArray.concat(upperCasedCharacters);
    return upperCasedCharacters[Math.floor(Math.random() * upperCasedCharacters.length)];
  }
}

console.log(getRandomUpper());

function getRandomLower() {
  return lowerCasedCharacters[Math.floor(Math.random() * lowerCasedCharacters.length)];
}

function getRandomNumeric() {
  return numericCharacters[Math.floor(Math.random() * numericCharacters.length)];
}

function getRandomSpecial() {
  return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
}

// Function to generate password with user input
function generatePassword(upper, lower, number, special, passwordLength) {
  // Initialize password variables

  //Filter out unchecked types

  //Loop over length





  let characterArray = [upper + lower + number + special];

  let finalPassword = '';
  let options = getPasswordOptions();
  console.log(getPasswordOptions());
  // if (options.passwordUpperCase) {
  //   upperCaseArray = characterArray.concat(upperCasedCharacters);
  // }
  // //const length = passwordLength.value;
  // //console.log(length);
}

// return finalPassword;
//console.log(getRandom(options));


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