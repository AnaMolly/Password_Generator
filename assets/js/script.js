// Assignment Code
var generateBtn = document.querySelector("#generate");
var lcArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var ucArray=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numArray=["1", "2", "3", "4", "5", "6", "7", "8", "9"]
var scArray=["+", "-", "#", "%", "!", "(", ")", "{", "}", "/", "]", "@", "~", "*", "?", ":","$", "&","'", "[", ",",";", "=", ">"];





// Write password to the #password input
function writePassword() {
  var passwordArray=[];
  var finalPasswordArray=[];


  var initialAlert = window.alert("Let's generate a password! Please answer the following criteria questions.")
  var letterAmoutInquiry =window.prompt ("How long do you want your password to be? You can choose bewtween 8-128 characters.")

  var passParse = parseInt(letterAmoutInquiry)

  if (isNaN (passParse) || passParse < 8 || passParse>128){
    var errorAlert = window.alert ("Invalid entry. Please choose between 8-128 characters.");
    letterAmoutInquiry = window.prompt ("How long do you want your password to be? You can choose bewtween 8-128 characters.");
    passParse = parseInt(letterAmoutInquiry)
    if (isNaN (passParse) || passParse < 8 || passParse>128){
      var secondError = window.alert ("Invalid entry. \nPlease press the 'Generate Password' button again.")
      return;
    }
  }
  
  if (passParse >=8 || passParse <= 128){
  var lcInquiry = window.confirm("Do you want lowercase letters in your password?")
  var ucInquiry = window.confirm("Do you want uppercase letters in your password?")
  var numInquiry = window.confirm("Do you want numbers in your password?")
  var scInquiry = window.confirm("Do you want special characters in your password?")
  }

  if (lcInquiry != true && ucInquiry != true && numInquiry != true && scInquiry != true){
    window.alert ("You must select one character type.")
    lcInquiry = window.confirm("Do you want lowercase letters in your password?")
    ucInquiry = window.confirm("Do you want uppercase letters in your password?")
    numInquiry = window.confirm("Do you want numbers in your password?")
    vscInquiry = window.confirm("Do you want special characters in your password?")
  }
  
  var newLength = passParse / 2

  if (lcInquiry==true){
    for(i=0;i<=newLength;i++){
      passwordArray.push(lcArray[Math.floor(Math.random()*lcArray.length)])
    }
  }
  if (ucInquiry==true){
    for(i=0;i<=newLength;i++){
      passwordArray.push(ucArray[Math.floor(Math.random()*ucArray.length)])
    }
  }
  if (numInquiry==true){
    for(i=0;i<=newLength;i++){
      passwordArray.push(numArray[Math.floor(Math.random()*numArray.length)])
    }
  }
  if (scInquiry==true){
    for(i=0;i<=newLength;i++){
      passwordArray.push(scArray[Math.floor(Math.random()*scArray.length)])
    }
  }

  for(i=0;i<=letterAmoutInquiry-1;i++){
    finalPasswordArray.push(passwordArray[Math.floor(Math.random()*passwordArray.length)])
  }

  var password=finalPasswordArray.join("")

  var passwordText = document.querySelector("#password");
  passwordText.value = '';
  passwordText.value = password;

  return;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
