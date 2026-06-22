fetch("https://429v86y6hl.execute-api.eu-north-1.amazonaws.com/count")
    .then(response => response.json())
    .then(data => {
        document.getElementById("counter").textContent = data.count;
    })
    .catch(error => {
        console.error(error);
        document.getElementById("counter").textContent = "Error";
    });