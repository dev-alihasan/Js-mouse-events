// Get the input element by its ID
const input = document.getElementById("myInput");

// Add an event listener for the keypress event
input.addEventListener("keypress", function (event) {
  // Log the character being typed
  console.log("Key press:", event.key);
});
