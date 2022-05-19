const rating = new URLSearchParams(window.location.search).get("rating");
document.getElementById("rating").innerText = rating;