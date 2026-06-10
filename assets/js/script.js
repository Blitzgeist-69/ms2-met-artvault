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
    return document.body.getAttribute("data-theme");
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

// API functions

const BASE_URL = "https://collectionapi.metmuseum.org/public/collection/v1";

// Fetch object details by ID

async function fetchObjectById(objectID) {
    try {
        const response = await fetch(`${BASE_URL}/objects/${objectID}`);
        if (!response.ok) return null;

        const data = await response.json();

        if (!data.primaryImageSmall && !data.primaryImage) return null;

        return {
            id: data.objectID,
            title: data.title || "Untitled",
            artist: data.artistDisplayName || "Unknown Artist",
            date: data.objectDate || "Date unknown",
            image: data.primaryImageSmall || data.primaryImage || "",
            largeImage: data.primaryImage || data.primaryImageSmall || "",
            medium: data.medium || "Medium unknown",
            department: data.department || "Department unknown"
        };
    } catch {
        return null;
    }
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