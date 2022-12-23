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

  if (isNaN(length) || length < 8 || length > 128 || length % 1 != 0 ) {
    alert("You have entered a number outside the acceptable range or have entered something other than a number. Please try again.")
    return;
  }
  
  let getNumber = window.confirm("Would you like your password to include numbers? Click ok to include or cancel to skip.");

  let getLowerC = window.confirm("Would you like your password to include lowercase letters? Click ok to include or cancel to skip");

  let getUpperC = window.confirm("Would you like your password to include uppercase letters? Click ok to include or cancel to skip");

  let getSpecialC = window.confirm("Would you like your password to include special characters? Click ok to include or cancel to skip");

  var answers = [];

  answers.push(getNumber, getLowerC, getUpperC, getSpecialC);

  

  var selection = [];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var specialChar = ["!","#", "$", "%", "&", "'", "()", "*", "+", ".", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~", "]"]
 
  if (getNumber == true) {
    selection.push(numbers);
  }

  if (getLowerC == true) {
    selection.push(lowerCase);
  }

  if (getUpperC == true) {
    selection.push(upperCase);
  }  

  if (getSpecialC == true) {
    selection.push(specialChar);
   
  }

  console.log(selection);
  
  // make sure at least on selection was made //
  if (selection.length == [0]) {
    alert("Oh no! You must select at least one type for a password to generate. Please try again.");
    return;
  }



  // generate pword 

  var pword = "";

  for (var i = 0; i <= length; i++) {
    var randomPick = Math.floor(Math.random() * selection.length);
    pword = randomPick[i] + 1;
   }

   console.log(pword)

   

  

}
  


