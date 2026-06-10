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

// Search for objects by query

async function searchArtworks(query) {
    if (!query || query.trim() === "") return [];

    try {
        const searchUrl = `${BASE_URL}/search?hasImages=true&q=${encodeURIComponent(query)}`;
        const searchResponse = await fetch(searchUrl);
        const searchData = await searchResponse.json();

        if (!searchData.objectIDs || searchData.objectIDs.length === 0) {
            return [];
        }

        const ids = searchData.objectIDs.slice(0, 24);
        const results = await Promise.all(ids.map(id => fetchObjectById(id)));
        return results.filter(art => art !== null);
    } catch (error) {
        console.error("Search Failed:", error);
        throw error;
    }
}

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

// Render artwork cards

function createCard(artwork) {
    const col = document.createElement("div");
    col.className = "col";

    col.innerHTML = `
        <div class="card h-100 shadow-sm artwork-card" style="cursor: pointer;">
            <img src="${artwork.image}" class="card-img-top" alt="${artwork.title}" 
                 style="height: 200px; object-fit: cover;"
                 onerror="this.src='https://via.placeholder.com/300x200?text=No+Image'">
            <div class="card-body">
                <h5 class="card-title">${artwork.title}</h5>
                <p class="card-text text-muted">${artwork.artist} - ${artwork.date}</p>
            </div>
        </div>
    `;

    const cardElement = col.querySelector(".artwork-card");
    cardElement.addEventListener("click", () => {
        showArtworkModal(artwork);
    });

    return col;
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

const testArtwork = {
    title: "Test Painting",
    artist: "Test Artist",
    date: "2020",
    image: "https://picsum.photos/200"
};
const testCard = createCard(testArtwork);
document.getElementById("results").appendChild(testCard);
console.log("Test card created:");