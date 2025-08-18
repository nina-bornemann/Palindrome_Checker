const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultText = document.getElementById("result");

// convert input to all lowercase and clean from non alphanumeric characters

let validInput;
let finalInput;
function clearInput() {
   validInput = textInput.value.replace(/[^a-zA-Z0-9]/g, "");
};
function lowercaseInput() {
    finalInput = validInput.toLowerCase();
}

// register check function to check button click

function handleClick() {
    if (textInput.value === "") {
        alert("Please input a value");
    } else {
        clearInput();
        lowercaseInput();
        if (check()){
            resultText.innerText = `${textInput.value} is a palindrome!`;
        } else {
            resultText.innerText = `${textInput.value} is not a palindrome!`;
        } 
    }
}

// check function, return result statement

function check() {
  const characters = [...finalInput];
  for (let i = 0; i < characters.length; i++) {
    let firstLetter = characters[i];
    let lastLetter = characters[characters.length-1-i];
    if (firstLetter != lastLetter) {
        return false;
    } 
}
return true
}

