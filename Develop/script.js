// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
    var passwordLenght = parseInt(prompt("Choose a number lenght between 8-128 characters"))
    if (passwordLenght < 8 || passwordLenght >128 || isNaN(passwordLenght)){
      return 'please enter a number between'
    }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
