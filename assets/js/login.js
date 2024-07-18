// Get the modal
var modal = document.getElementById("loginModal");

// Get the button that opens the modal
// var btn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal


modal.style.display = "block";


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
