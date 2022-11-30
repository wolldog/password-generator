//global variables

var password = '';
var characters = '';
var passwordLength = 0;

//Start of generatePassword function. This function will be excecuted when the 'Generate Password' button is clicked.

function generatePassword(){

  //Character sets

  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  var upperCase = 'ABCDEFGHIJKLMOPQRSTUVWXYZ';
  var numeric = '123456789';
  var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"


  
}

  













// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
