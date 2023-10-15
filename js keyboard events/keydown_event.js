// Get the input element by its ID
const input = document.getElementById("myInput");

// Add an event listener for the keydown event
input.addEventListener("keydown", function(event) {
  // Log the key that was pressed
  console.log("Key down:", event.key);
});
