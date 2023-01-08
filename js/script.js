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
  //Password length prompt

  let passwordLength = parseInt(prompt("Enter password length between 10 & 64 characters"));
  if (passwordLength < 10 || passwordLength > 64 || isNaN(passwordLength)) {
    alert("Password lenght must be between 10 & 64 characters");
    return null;
  }

  console.log(passwordLength);

  let passwordUpperCase = confirm("Do you want Uppercase in your password?");
  let passwordLowerCase = confirm("Do you want Lowercase in your password?");
  let passwordNumbers = confirm("Do you want Numbers in your password?");
  let passwordSpecial = confirm("Do you want Special characters in your password?");

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