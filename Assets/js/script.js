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
  return;
  
}
// Function to generate Password
function generatePassword(){
  var password = "";  
  var passwordLenght = validateLenght();  
  if (passwordLenght){    
    var confirmSpecial = window.confirm("Click OK to confirm including special characters");
    var confirmNum = window.confirm("Click OK to confirm including numeric characters");
    var confirmLower = window.confirm("Click OK to confirm including lower case characters");
    var confirmUpper = window.confirm("Click OK to confirm including upper case characters");
  
   if (confirmSpecial || confirmNum || confirmLower || confirmUpper){
      for (i=0 ; i< passwordLenght; ){
        
       if (confirmSpecial == true){
         password += randomValue(specialChar);         
        }
       if (confirmNum == true && i < passwordLenght){
         password += randomValue(numericChar);         
        }
       if (confirmUpper == true && i < passwordLenght){
         password += randomValue(upperCaseChar);         
        }
       if (confirmLower == true && i < passwordLenght){
         password += randomValue(lowerCaseChar);         
        }        
      }
      return password;           
    }
    else{
    window.alert("You must select at least one type of character");
    return null;
   }
  }
  else{
    return null;
  }  
};

// Function for Randmom character generation

function randomValue(charType){
  var randomNumber = Math.floor(Math.random() * charType.length);
  var addCharacter = charType.substring(randomNumber, randomNumber +1);
  i++;
  return addCharacter;
}

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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
