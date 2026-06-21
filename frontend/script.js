fetch("https://429v86y6hl.execute-api.eu-north-1.amazonaws.com")
  .then(response => response.json())
  .then(data => {
    document.getElementById("visitor-count").textContent = data.count;
  })
  .catch(error => console.error("Error:", error));