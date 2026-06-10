// Dark Mode

// Load saved theme preference on page load
function loadTheme() {
    const savedTheme = localStorage.getItem("theme");
    const toggleBtn = document.getElementById("dark-mode-toggle");

    if (savedTheme === "dark") {
        document.body.setAttribute("data-theme", "dark");
        if (toggleBtn) toggleBtn.textContent = "Light Mode";
    } else {
        document.body.setAttribute("data-theme", "light");
        if (toggleBtn) toggleBtn.textContent = "Dark Mode";
    }
}

// Toggle between light and dark mode
function toggleDarkMode() {
    const toggleBtn = document.getElementById("dark-mode-toggle");
    const isDark = document.body.getAttribute("data-theme") === "dark";

    if (isDark) {
        document.body.setAttribute("data-theme", "light");
        if (toggleBtn) toggleBtn.textContent = "Dark Mode";
    } else {
        document.body.setAttribute("data-theme", "dark");
        if (toggleBtn) toggleBtn.textContent = "Light Mode";
    }

    // Save preference
    localStorage.setItem("theme", document.body.getAttribute("data-theme"));
}

// Initialise

function init() {
    // Load dark mode preference
    loadTheme();

    // Connect dark mode toggle button
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", toggleDarkMode);
    }

    
}

// Run init on page load
document.addEventListener("DOMContentLoaded", init);