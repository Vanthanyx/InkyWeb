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

async function downloadAppFollowup() {
  try {
    // Fetch the YAML file
    const response = await fetch("https://inkysmp.com/data/WEB.yml");
    if (!response.ok)
      throw new Error("Failed to fetch the configuration file.");

    // Parse the YAML file
    const yamlText = await response.text();
    const config = jsyaml.load(yamlText); // Assumes js-yaml library is included

    // Get the UPDATER_URL
    const downloadURL = config.UPDATER_URL;
    if (!downloadURL)
      throw new Error("UPDATER_URL not found in the configuration file.");

    // Create and trigger the download
    const link = document.createElement("a");
    link.href = downloadURL;
    link.download = "InkyHQ.exe";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Error during download:", error.message);
  }
}
