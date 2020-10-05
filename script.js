///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's

///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password1
// * writing the password to the screen
//
//var password = generatePassword();
var finPass = []
var userChar = "";
var passwordText = document.querySelector("#password");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var number = "123456789"
var special = "!@#$%^&*(){}?"
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword()
function startApp() 
var passwordLength = prompt("Choose a length between 8 and 128 for your password")
if (passwordLength < 8 || passwordLength > 128)
{alert ("length must be between 8 and 128 Characters")}
var userUpper = confirm("Would you like to include uppercase letters?")
if (userUpper)
userChar = userChar + upperCase;
var userLower = confirm("Would you like to include lowercase letters?")
if (userLower)
userChar = userChar + lowerCase;
var userNum = confirm("Would you like to include numbers?")
if (userNum)
userChar = userChar + number;
var userSpec = confirm("Would you like to include special characters?")
if (userSpec)
userChar = userChar + special;

for (var i = 0; i < passwordLength; i++)

  
  


startApp()

      


 



 passwordText.value = password;
 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);}
