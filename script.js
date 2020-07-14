// Assignment Code - this is the button that we'll add the event listener to
var generateBtn = document.querySelector("#generate");

//possible character sets
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var specialChar = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// user input - number of characters to use in password
var numChar = prompt("How many characters would you like? (Choose between 8 - 128)");

// validate number of characters entered
if (numChar < 8 || numChar > 128) {
  alert("Please select between 8 - 128!");
}

// user input - select types of characters to use in password
var hasSpecialChar = confirm("Click OK to include special characters.");
var hasNumber = confirm("Click OK to include numbers.");
var hasLower = confirm("Click OK to include lower case letters.");
var hasUpper = confirm("Click OK to include upper case letters.");

//validate that at least one type of character was selected
if (hasSpecialChar === false && hasNumber === false && hasLower === false && hasUpper === false) {
  alert("You must select at least one type of character!")
}

// reference to the text area where the password is output 
var password = document.getElementById("#password");

//create possible characters, populate it based on user inputs
var possibleCharacters = '';
if (hasSpecialChar === true) {
  possibleCharacters += specialChar;
}
if (hasNumber === true) {
  possibleCharacters += number;
}
if (hasLower === true) {
  possibleCharacters += lower;
}
if (hasUpper === true) {
  possibleCharacters += upper;
}

//console.log(possibleCharacters); // to confirm it worked to here

// this is the function that generates the random password
var allCharacters = '';

function generatePassword() {
  for (i = 0; i <= numChar; i++) {
    var character = possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]
    allCharacters += character;
  }
  return allCharacters;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);