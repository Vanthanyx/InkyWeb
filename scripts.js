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
dateTimeDiv.style.fontFamily = '"Silkscreen", sans-serif';
document.body.appendChild(dateTimeDiv);

setInterval(updateDateTime, 1000);
updateDateTime();

function downloadAppFollowup() {
  const downloadURL =
    "https://drive.usercontent.google.com/download?id=1IMDTfoUDQwypW_sRyU35VaLXeRkLUY_f&export=download&authuser=0";
  const link = document.createElement("a");
  link.href = downloadURL;
  link.download = "InkyHQ.exe";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
