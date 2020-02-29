//====================================================//
//TO DO
function generatePassword(){
  let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let num = [0,1,2,3,4,5,6,7,8,9];
  let specialChar = ["!","@","#","$","%","^","&","*","(",")","_","+","=","-"];

  let userWelcome = alert(`Welcome there User, Click "Ok" to Begin`);
  let passLen = prompt("Password Length:");

  let generatedPass = []; //create an empty array to add randomized char to
  
  if (passLen >= 8 && passLen<=128 && isNaN(passLen) == false){
    let confirmLc = confirm("Do you want a Lower case character?");
    let confirmUc = confirm("Do you want a Upper case character?");
    let confirmNum = confirm("Do you want a Number?");
    let confirmSc = confirm("Do you want a Special character?");
    
    if(confirmLc) 
      generatedPass.push(lowerCase);
    
    else if(confirmUc)
      generatedPass.push(upperCase);

    else if(confirmNum)
      generatedPass.push(num);
    
    else if(confirmSc)
      generatedPass.push(specialChar);
  }
  else{
    alert("Please select a password lenght between 8 and 128 characters or Enter a number ")
  }
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

