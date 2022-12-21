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

function generatePassword() {
  let length = window.prompt("You have selected to generate a password! Your password must be no shorter than 8 charachters and no longer than 128. How long do you want your password to be?");

  if (isNaN(length) || length < 8 || length > 128 ) {
    alert("You have entered a number outside the acceptable range or have entered something other than a number. Please try again.")
    return;
  }
  else  


  


}