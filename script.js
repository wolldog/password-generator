// Assignment Code

const lowerCase= ['a', 'b'];
const upperCase= ['A', 'B'];
const numeric= ['1', '2'];
const specialChar= ['$', '#'];
var passwordLength = '';
var useLowerCase = '';
var useUpperCase = '';
var useNumeric = '';
var useSpecialChar = '';
var generateArray = [];

// Capture and validate users desired password length

function chooseLength(){

  passwordLength = prompt('How many characters would you like your password to contain? Please choose a number between 8 and 120');
     
  if (passwordLength < 8 || passwordLength > 120)
        {
        window.alert("That is an invalid length, please try again");
        chooseLength();
      }
    else {
      console.log(passwordLength);
    }
}

// Capture users choice of characters to include

function chooseLowerCase(){
  useLowerCase = confirm("Use lowercase letters?");
  console.log(useLowerCase);
}

function chooseUpperCase(){
  useUpperCase = confirm("Use uppercase letters?");
  console.log(useUpperCase);
}

function chooseNumeric(){
  useNumeric = confirm("Use numbers?");
  console.log(useNumeric)
}
  
function chooseSpecial(){
  useSpecialChar = confirm("Use special characters?");
  console.log(useSpecialChar)
}

function allFalse(){
  if (useLowerCase === false && useUpperCase === false && useNumeric === false && useSpecialChar === false)
  {
    window.alert("You must click 'OK' to one of the choices");
  }
  chooseLowerCase();
  chooseUpperCase();
  chooseNumeric();
  chooseSpecial();
  allFalse()
  }


function begin(){
  chooseLength();
  chooseLowerCase();
  chooseUpperCase();
  chooseNumeric();
  chooseSpecial();
  allFalse()
}

function characterArray (){
  if (useLowerCase = true){
    join lowerCase

  }
}

begin();







 


 

// Everything below was provided

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
