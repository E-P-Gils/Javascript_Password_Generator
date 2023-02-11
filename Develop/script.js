function createPassword() {
  var possibleChar = "";
  var passwordLength = prompt("How long is your password(Enter a number)");
  var passwordUpperCase = prompt("Do you want to include uppercase letters?(Y/N)");
  var passwordLowerCase = prompt("Do you want to include lowercase letters?(Y/N)");
  var passwordNumbers = prompt("Do you want to include numbers?(Y/N)");
  var passwordSpecialChar = prompt("Do you want to include special characters?(Y/N)");
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

function writePassword() {
  var password = createPassword();
  for(var i = 0; i<passwordLength; i++) {
    password += possibleChar.charAt(Math.floor(Math.random) * possibleChar.length);
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

