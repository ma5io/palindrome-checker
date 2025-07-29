const textInputField = document.getElementById("text-input");
const mainCheckButton = document.getElementById("check-btn");
const resultField = document.getElementById("result");

mainCheckButton.addEventListener("click", () => {
  let enteredString = textInputField.value;

  if (enteredString === "") {
    alert("Please input a value");
    resultField.classList.add("hidden"); 
  } else {
    let cutUpString = enteredString.split("");
    let ourRegex = /[0-9a-zA-Z]/;

    const leftOver = cutUpString.filter((letter) =>
      letter.search(ourRegex) > -1
    );
    const leftOverReverse = [...leftOver].reverse();

    resultField.classList.remove("hidden"); 

    if (
      leftOver.toString().toUpperCase() ===
      leftOverReverse.toString().toUpperCase()
    ) {
      resultField.textContent = `${enteredString} is a palindrome`;
    } else {
      resultField.textContent = `${enteredString} is not a palindrome`;
    }
  }
});