// Assignment code here
// This is where I set the global variables for the program. 
var passwordLength;
var password = "";
// These are const to simplify the program from having errors later on.
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const specialChar = "!@#$%^&*(){}[]=+-_/?<>`~";
var lowercaseSelected;
var uppercaseSelected;
var numberSelected;
var specialCharSelected;
// This function asks a series of prompts and then generates a string that is later randomized.
function generatePassword () {
  passwordLength = prompt("Enter the number of characters for your password.");
  // 16 characters minimum is considered secure and a strong password if it has upper, lower, numbers and special characters.
  if (!(passwordLength >= 16 && passwordLength <= 256)) { 
      alert ("The password must be from 16-256 characters. Try again");
    }   
  else {
      lowercaseSelected = confirm("Would you like to add lower case letters to your password?");
      uppercaseSelected = confirm("Would you like to add uppercase letters to your password?");
      numbersSelected = confirm("Would you like to add numbers to your password?");
      specialCharSelected = confirm("Would you like to add special characters to your password?"); 
  } 
  // Here are a bunch of if statements that hook into the prompts to change the password string.
  if (!lowercaseSelected && !uppercaseSelected) {
    alert("You must select atleast one character type at minimum.");
  } else {
  // These asre strictly equal to reduce having errors later on.
    if (lowercaseSelected === true) {
      password += lowercaseLetters;
  } if (uppercaseSelected === true) {
      password += uppercaseLetters;
  } if (numbersSelected === true) {
      password += numbers;
  } if (specialCharSelected === true) {
      password += specialChar;   
    }  
  }
  // Here is the password strong used in the next function.     
  return password;
}

// Get references to the #generate element
// This looks for generate in the document and then holds it as a variable.
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// This function connects to the previous function and then a for loop randomizes the string.
function writePassword() {
  var password = generatePassword();
  var showPassword = "";
// Math.floor and Math.random are used to randomize.
  for (let x = 0; x < passwordLength; x++) {
    let randomChar = Math.floor(Math.random() * password.length);
    showPassword += password.substring(randomChar, randomChar +1);
  }
  var passwordText = document.querySelector("#password");
  // This changes the text field to show the password.
  passwordText.textContent = showPassword;
}

// Add event listener to generate button
// This connects to the generate password button, it looks for a click.
generateBtn.addEventListener("click", writePassword);