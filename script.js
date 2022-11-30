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

//User chooses password length with validity check

function chooseLength(){

  passwordLength = prompt('How many characters would you like your password to contain? Please choose a number between 8 and 120.');
    
  if (isNaN(passwordLength))
    
    {
      window.alert("That is not a number. Please choose a number between 8 and 120.")
      chooseLength();
    }
  
    else if (passwordLength < 8 || passwordLength > 120)
    
    {
      window.alert("That is an invalid length, please try again");
      chooseLength();
    }  

    console.log(passwordLength)

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
