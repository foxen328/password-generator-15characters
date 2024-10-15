const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

let passwordOne = document.getElementById("pwd-one");
let passwordTwo = document.getElementById("pwd-two");
let generateButton = document.getElementById("btn-pwd");

// Function to generate a random password of a given length
function generatePwd(length) {
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}

// Function to handle password generation and display
function handleGeneratePasswords() {
  // Clear previous passwords before generating new ones
  passwordOne.textContent = "";
  passwordTwo.textContent = "";

  // Generate new passwords
  const storedPasswordOne = generatePwd(15);
  const storedPasswordTwo = generatePwd(15);

  // Display the new passwords in the text boxes
  passwordOne.textContent = storedPasswordOne;
  passwordTwo.textContent = storedPasswordTwo;

  console.log(storedPasswordOne); // Log password 1 to the console
  console.log(storedPasswordTwo); // Log password 2 to the console
}

// Add event listener for the button to generate passwords
generateButton.addEventListener('click', handleGeneratePasswords);







