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
  var passwordLenght = prompt ("Choose your password lenght. (Must be between at least 8 characters.)");

  if (passwordLenght < 8 || passwordLenght > 128) {
    alert ("Must be between at least 8 characters");
    return null;
  }

  var hasLowercase = confirm ("Include Lowercase characters?");
  var hasUppercase = confirm ("Include Uppercase characters?");
  var hasSpecialCharacter = confirm ("Include Special characters?");
  var hasNumbers = confirm ("Include Numbers characters?");

  if (!(hasLowercase || hasUppercase || hasNumbers || hasSpecialCharacter)) {
    alert( "Must sellect at leat one of the character types");  
  }

  return { 
    passwordLenght,
    hasLowercase,
    hasUppercase,
    hasNumbers,
    hasSpecialCharacter
  }
  

}
var userOptions = getPasswordOptions()
console.log(userOptions);

//Include the user options into one array.
var userOptionsVarr = []
if (userOptions.hasLowercase === true){
  userOptionsVarr = userOptionsVarr.concat(lowerCasedCharacters)
}
if(userOptions.hasUppercase === true){
  userOptionsVarr = userOptionsVarr.concat(upperCasedCharacters)
}
if (userOptions.hasSpecialCharacter === true) {
  userOptionsVarr = userOptionsVarr.concat(specialCharacters)
}
if (userOptions.hasNumbers=== true) {
  userOptionsVarr = userOptionsVarr.concat(numericCharacters)
}
console.log("User ptions array : " + userOptionsVarr)

// Function for getting a random element from an array
function getRandom(arr) {
  var randomElement = Math.floor(Math.random() * arr.length);
  return arr[randomElement];
}
 var ramdomChar = getRandom(userOptionsVarr);
 console.log("Ramdom Element is: " + ramdomChar);


// Function to generate password with user input
function generatePassword() {

  var password = "";
  for (var i = 0; i < userOptions.passwordLenght; i++) {
    password += getRandom(userOptionsVarr);
  }
  return password;
}
var randomPass = generatePassword();
console.log(randomPass)

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