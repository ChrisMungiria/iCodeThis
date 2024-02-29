var inbox = document.getElementById("inbox");
var messages = document.getElementById("messages");

messages.style.display = "none";

inbox.addEventListener("click", function () {
  if (inbox.style.display == "flex") {
    inbox.style.display = "none";
    messages.style.display = "flex";
  } else {
    inbox.style.display = "flex";
    messages.style.display = "none";
  }
});
