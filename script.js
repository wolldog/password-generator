

//Start of generatePassword function. This function is called by the writePassword function that is excecuted when the 
//'Generate Password' button is clicked.

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

  //Reset variables to empty string

  var password = '';
  var characters = '';
  var passwordLength;

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
    if (!useLowerCase && !useUpperCase && !useNumeric && !useSpecialChar)
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
  //Add on character from each set to ensure their representation in the final password. Reduce passwordLength by 1.
    
  function characterSet() {
    if (useLowerCase){
        characters += lowerCase 
        password += lowerCase.charAt([Math.floor(Math.random() * lowerCase.length)]);
        passwordLength--
      }

    if (useUpperCase){
      characters  += upperCase
      password += upperCase.charAt([Math.floor(Math.random() * upperCase.length)]);
      passwordLength--
      }

    if (useNumeric){
      characters  += numeric
      password += numeric.charAt([Math.floor(Math.random() * numeric.length)]);
      passwordLength--
      }

    if (useSpecialChar){
      characters += specialChar
      password += specialChar.charAt([Math.floor(Math.random() * specialChar.length)]);
      passwordLength--
      }

    console.log(characters)
    }

    //Choose a random selection from concatonated string 'characters' to match passwordLength
  
    function generate(){
      for (var i=0; i<passwordLength; i++) 
      {password += characters.charAt([Math.floor(Math.random() * characters.length)]);}
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

  //Pass the generated password to the function caller

  return password

  }

// Basecode provide
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


