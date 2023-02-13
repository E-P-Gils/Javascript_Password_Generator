/*In the following function "generatePossibleChar" we add different characters to an empty string based on user input*/
function generatePossibleChar(passwordUpperCase, passwordLowerCase, passwordNumbers, passwordSpecialChar) {
  var possibleChar = "";
  if (passwordUpperCase === "Y") {
    possibleChar += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (passwordLowerCase === "Y") {
    possibleChar += "abcdefghijklmnopqrstuvwxyz";
  }
  if (passwordNumbers === "Y") {
    possibleChar += "0123456789";
  }
  if (passwordSpecialChar === "Y") {
    possibleChar += "!@#$%^&*?+~=";
  }
  return possibleChar; 
}

/*In the following function "writePassword" we prompt the user for their input. Then in our for loop we call generatePossibleChar with the parameters that are specified in it. After that we use charAt to grab a random character from the concatenated string created from generatePossibleChar and multiply it by math.random(using math.floor to round it to a whole number just in case) to iterate this  process  up to the amount of times the user entered when prompted.*/
function writePassword() {
  var passwordLength = prompt("How long is your password(Enter a number)");
  var passwordUpperCase = prompt("Do you want to include uppercase letters?(Y/N)");
  var passwordLowerCase = prompt("Do you want to include lowercase letters?(Y/N)");
  var passwordNumbers = prompt("Do you want to include numbers?(Y/N)");
  var passwordSpecialChar = prompt("Do you want to include special characters?(Y/N)");
  var possibleChar= generatePossibleChar(passwordUpperCase, passwordLowerCase, passwordNumbers, passwordSpecialChar); 
  var password = "";
  for(var i = 0; i<passwordLength; i++) {
    var randomNumber = possibleChar.charAt(Math.floor(Math.random()* possibleChar.length));
    password += randomNumber;
  }
  var passwordText = document.querySelector("#password");
  passwordText.textContent = password;
}

/*In this section we map generateBTN to the html button "Generate" then add an event listener to it so that when it's clickd it runs writePassword. We run writePassword as we call generatePossibleChar within it, so really we're running both functions at once.*/
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);