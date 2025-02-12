function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive"; // Open the sidebar
  } else {
    x.className = "topnav"; // Close the sidebar
  }
}
