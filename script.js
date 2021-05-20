// Assignment Code
var generateBtn = document.querySelector("#generate");
var lcArray= [["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]];
var ucArray=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numArray=["1", "2", "3", "4", "5", "6", "7", "8", "9"]
var scArray=["+", "-", "#", "%", "!", "(", ")", "{", "}", "/", "]", "@", "~", "*", "?", ":","$", "&","'", "[", ",",";", "=", ">"];




// Write password to the #password input
function writePassword() {
  var initialAlert = window.alert("Let's generate a password! Please answer the following criteria questions.")
  var letterAmoutInquiry = window.prompt ("How long do you want your password to be? You can choose bewtween 8-128 characters.")
  var lcInquiry = window.confirm("Do you want lowercase letters in your password?")
  var ucInquiry = window.confirm("Do you want uppercase letters in your password?")
  var numInquiry = window.confirm("Do you want numbers in your password?")
  var scInquiry = window.confirm("Do you want special characters in your password?")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");






  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
