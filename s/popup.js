var closeButton = document.querySelector(".close");
var popup = document.querySelector("#popup1");
closeButton.addEventListener("click", function (event) {
  event.preventDefault();
  popup.style.display = "none";
});
