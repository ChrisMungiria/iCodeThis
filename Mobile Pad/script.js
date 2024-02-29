function appendToInput(number) {
  const inputBox = document.getElementById("inputBox");
  const name = document.getElementById("name");
  const inputLength = inputBox.value.length;

  if (inputLength >= 12) {
    name.style.display = "block";
    alert("You have reached the maximum number of digits!");
  } else {
    name.style.display = "hidden";
    if (inputLength % 4 == 0) {
      inputBox.value += " ";
      inputBox.value += number;
    } else {
      inputBox.value += number;
    }
  }
}

function clearInput() {
  const inputBox = document.getElementById("inputBox");
  inputBox.value = "";
}
