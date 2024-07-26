function openPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
  var body = document.getElementById("body");
  body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
}
function closePopup() {
  var popup = document.getElementById("popup");
  var body = document.getElementById("body");
  popup.style.display = "none";
  body.style.backgroundColor = "rgba(255, 255, 255)";
}