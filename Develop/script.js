//====================================================//
//TO DO: Create a generatepassword func that returns a random password, made of the users seleted prefs
function generatePassword(){
  let upperCaseOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerCaseOptions = "abcdefghijklmnopqrstuvwxyz";
  let numOptions = "0123456789";
  let specialCharOptions = '!"#$%&\'<=>?@[\\]^_`{|}~()*+,-./:;';
  let passwordType = "";
  let ranPass = "";
  let selectedTypeIncluded= [];
  let selectedRanPass = "";

  
  let userWelcome = alert(`Welcome there User, Click "Ok" to Begin`);
  
  let passLen
  do {//loop until user enters correct input
    passLen = prompt("Please enter the length of your password(a number 8-128): ");
  } while (passLen < 8 || passLen >128 || isNaN(passLen));

  let lowerCase = confirm("Do you want a lowercase in your password?");
  let upperCase = confirm("Do you want a uppercase in your password?");
  let specialChar = confirm("Do you want a special character in your password?");
  let num = confirm("Do you want a number in your password?");

  //if a type is selected, it should get added to the password type string
  if(lowerCase){
    passwordType+= lowerCase;
  }
  if(upperCase){
    passwordType += upperCase;
  }
  if(specialChar){
    passwordType += specialChar;
  }
  if(num){
    passwordType += num;
  }
  if((lowerCase == false ) && (upperCase == false) && (specialChar == false) && (num == false)){
    alert("You have made zero selections. \nPlease choose at least one type of character");
    // console.log("You have made zero selections. \nPlease choose at least one type of character");
  }

  for (let i=0;i <= passLen; i++){
    ranPass += passwordType.charAt(Math.floor(Math.random() * passwordType.length));
  }
  if (selectedTypeIncluded.includes(ranPass)){
    selectedTypeIncluded.push(ranPass);
  }
  selectedRanPass += ranPass[Math.floor(Math.random() * ranPass.length)];
  // return ranPass;
  return selectedRanPass;
}

// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

