function updateDateTime() {
  const dateTimeElement = document.getElementById("dateTime");
  const now = new Date();
  dateTimeElement.textContent = now.toLocaleString();
}

const dateTimeDiv = document.createElement("div");
dateTimeDiv.id = "dateTime";
dateTimeDiv.style.position = "fixed";
dateTimeDiv.style.bottom = "10px";
dateTimeDiv.style.right = "10px";
dateTimeDiv.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
dateTimeDiv.style.color = "white";
dateTimeDiv.style.padding = "5px";
dateTimeDiv.style.borderRadius = "5px";
document.body.appendChild(dateTimeDiv);

setInterval(updateDateTime, 1000);
updateDateTime();
