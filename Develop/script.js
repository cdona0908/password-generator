// Assignment Code
var generateBtn = document.querySelector("#generate");
var numericChar = "0123456789";
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
//Ask TA how to include spec chars " and \ in the string
var specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var passwordMinLenght = 8;
var passwordMaxLenght = 128;
var password = "";
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}
// Function to generate Password
function generatePassword(){
  var password = "";  
  var passwordLenght = validateLenght();  
  if (passwordLenght){    
  var confirmSpecial = confirmSpecialChar();
  var confirmNum = confirmNumChar();
  var confirmLower = confirmLowerChar();
  var confirmUpper = confirmUpperChar();
   if (confirmSpecial || confirmNum || confirmLower || confirmUpper){
      for (i=0 ; i< passwordLenght; ){
       if (confirmSpecial == true){
         var randomNumber = Math.floor(Math.random() * specialChar.length);
         password += specialChar.substring(randomNumber, randomNumber +1);
         i++;
        }
       if (confirmNum == true && i < passwordLenght){
         var randomNumber = Math.floor(Math.random() * numericChar.length);
         password += numericChar.substring(randomNumber, randomNumber +1);
         i++;
        }
       if (confirmUpper == true && i < passwordLenght){
         var randomNumber = Math.floor(Math.random() * upperCaseChar.length);
         password += upperCaseChar.substring(randomNumber, randomNumber +1);
         i++;
        }
       if (confirmLower == true && i < passwordLenght){
         var randomNumber = Math.floor(Math.random() * lowerCaseChar.length);
         password += lowerCaseChar.substring(randomNumber, randomNumber +1);
         i++;
        }        
      }
      return password;           
    }
    else{
    window.alert("You must select at least one type of character");
    return;
   }
  }
  else{
    return null;
  }  
};

//Function for Password Lenght Validation

function validateLenght(){
  passwordLenght = window.prompt("How many characters would you like your password to contain?","");
  if (passwordLenght === "" || passwordLenght === null || isNaN(passwordLenght)){
    window.alert("You need to provide the lenght of your password");
    return null;
  }
  
  else if (passwordLenght < passwordMinLenght){
    window.alert("Password lenght must be at least 8 characters");
    return null;
  }
  else if (passwordLenght > passwordMaxLenght){
    window.alert("Password lenght must be less than 128 characters");
    return null;
  }
  else {
      return passwordLenght;  
  }
}
// Functions to Validate Character Types (can be improved, reduce # of functions)
// Function to validate special character
function confirmSpecialChar(){
  var confirmSpecial = window.confirm("Click OK to confirm including special characters");
  if (confirmSpecial){
    return true;
  }
  else{
    return false;
  }
}
// Function to validate numeric character
function confirmNumChar(){
  var confirmNum = window.confirm("Click OK to confirm including numeric characters");
  if (confirmNum){
    return true;
  }
  else{
    return false;
  }
}
// Function to validate lower case character
function confirmLowerChar(){
  var confirmLower = window.confirm("Click OK to confirm including lower case characters");
  if (confirmLower){
    return true;
  }
  else{
    return false;
  }
}
// Function to validate upper case character
function confirmUpperChar(){
  var confirmUpper = window.confirm("Click OK to confirm including upper case characters");
  if (confirmUpper){
    return true;
  }
  else{
    return false;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
