// Display current year
document.getElementById("year").textContent = new Date().getFullYear();

// Handle cookie consent
function acceptCookies() {
    document.getElementById("cookie-banner").style.display = "none";
    localStorage.setItem("cookiesAccepted", "true");
}

// Hide banner if cookies were already accepted
if (localStorage.getItem("cookiesAccepted") === "true") {
    document.getElementById("cookie-banner").style.display = "none";
}