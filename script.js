

//Start of generatePassword function. This function will be excecuted when the 'Generate Password' button is clicked.

function generatePassword(){

  //Character sets

  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  var upperCase = 'ABCDEFGHIJKLMOPQRSTUVWXYZ';
  var numeric = '123456789';
  var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

  //Chosen character sets

var useLowerCase;
var useUpperCase;
var useNumeric;
var useSpecialChar;

//Reset variables to null

password = null;
characters = null;
passwordLength = null;

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

// Capture users choice of characters to include

function chooseLowerCase(){
  useLowerCase = confirm("Should the password contain lowercase letters?");
  console.log(useLowerCase);
}

function chooseUpperCase(){
  useUpperCase = confirm("Should the password contain uppercase letters?");
  console.log(useUpperCase);
}

function chooseNumeric(){
  useNumeric = confirm("Should the password contain numbers?");
  console.log(useNumeric)
}
  
function chooseSpecial(){
  useSpecialChar = confirm("Should the password contain special characters?");
  console.log(useSpecialChar)
}

//Check user has chosen at least on character set

function allFalse(){
  if (useLowerCase === false && useUpperCase === false && useNumeric === false && useSpecialChar === false)
  {
    window.alert("Please choose at least one option.");
    chooseLowerCase();
    chooseUpperCase();
    chooseNumeric();
    chooseSpecial();
    allFalse();
  }
}  

  //Add chosen character sets to variable 'characters'
  
  function characterSet() {
    if (useLowerCase){
        characters += lowerCase
      }
  
      if (useUpperCase){
        characters  += upperCase
      }
  
      if (useNumeric){
        characters  += numeric
      }
  
      if (useSpecialChar){
        characters += specialChar
      }
  
    console.log(characters)
    }

    //Choose a random selection from concatonated string 'characters' and validate that at least one 
    //character from each of the chosen sets is present in the result.
  
    function generate(){

      for (var i=0; i<passwordLength; i++) 
      {password += characters.charAt([Math.floor(Math.random() * characters.length)]);}
      

      if (useLowerCase && password.includes === false)
      {generate()};
  
      if (useUpperCase && password.includes === false)
      {generate()};
  
      if (useNumeric && password.includes === false)
      {generate()};
  
      if (useSpecialChar && password.includes === false)
      {generate()};
  
      console.log(password)
      }
  
      //Execute all functions within 'generatePassword'

      chooseLength();
      chooseLowerCase();
      chooseUpperCase();
      chooseNumeric();
      chooseSpecial();
      allFalse();
      characterSet()
      generate();

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

console.log(password)
