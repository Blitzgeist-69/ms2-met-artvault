/* global bootstrap */

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

// Fullscreen
function toggleFullscreen(element) {
    if (!document.fullscreenElement) {
        element.requestFullscreen().catch(err => {
            console.error(`Error enabling fullscreen: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
}

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
        const results = await Promise.all(ids.map((id) => fetchObjectById(id)));
        return results.filter((art) => art !== null);
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
            department: data.department || "Department unknown",
        };
    } catch {
        return null;
    }
}

// Render artwork cards

function renderArtworks(artworks) {
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";

    const validArtworks = artworks.filter((art) => art && art.image);

    if (validArtworks.length === 0) {
        resultsContainer.innerHTML = `
            <div class="col-12 text-center py-5">
                <p class="lead">No artworks with images found. Try a different search.</p>
            </div>
        `;
        return;
    }

    validArtworks.forEach((artwork) => {
        const card = createCard(artwork);
        resultsContainer.appendChild(card);
    });
}

function createCard(artwork) {
    const col = document.createElement("div");
    col.className = "col";

    col.innerHTML = `
        <div class="card h-100 shadow-sm artwork-card" style="cursor: pointer;"
             tabindex="0" 
             role="button"
             aria-label="View details for ${artwork.title} by ${artwork.artist}">
            <img src="${artwork.image}" class="card-img-top" alt="${artwork.title}" 
                 style="height: 200px; object-fit: cover;"
                 onerror="this.src='https://placehold.co/300x200?text=No+Image'">
            <div class="card-body">
                <h5 class="card-title">${artwork.title}</h5>
                <p class="card-text">${artwork.artist} - ${artwork.date}</p>
            </div>
        </div>
    `;

    const cardElement = col.querySelector(".artwork-card");

    // Click to open modal
    cardElement.addEventListener("click", () => {
        showArtworkModal(artwork);
    });

    // Keyboard accessibility: Enter key or space opens modal
    cardElement.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            showArtworkModal(artwork);
        }
    });

    return col;
}

// Show artwork details in a modal

let currentArtwork = null;
let currentView = "search"; // Track the current view: "search" or "vault"

function showArtworkModal(artwork) {
    currentArtwork = artwork;

    // Populate modal content
    document.getElementById("modal-title").textContent = artwork.title;
    document.getElementById("modal-image").src = artwork.largeImage || artwork.image;
    document.getElementById("modal-image").alt = `${artwork.title} by ${artwork.artist}`;
    document.getElementById("modal-artist").textContent = artwork.artist;
    document.getElementById("modal-date").textContent = artwork.date;
    document.getElementById("modal-medium").textContent = artwork.medium;
    document.getElementById("modal-department").textContent = artwork.department;

    // Fullscreen button functionality
    const modalImage = document.getElementById("modal-image");
    modalImage.onclick = null; // Reset previous click handler
    modalImage.onclick = () => { 
        toggleFullscreen(modalImage);
    };


    // Change button based on current view
    const saveButton = document.getElementById("save-to-vault");
    const vault = JSON.parse(localStorage.getItem("artvault")) || [];
    const isAlreadySaved = vault.some((item) => item.id === artwork.id);

    if (isAlreadySaved) {
        // If the artwork is already saved, change button to "Remove from Art Vault"
        saveButton.textContent = "Remove from Art Vault";
        saveButton.classList.remove("btn-accent", "btn-secondary");
        saveButton.classList.add("btn-remove");
        saveButton.onclick = removeFromVault;
    } else {
        // If the artwork is not saved, show "Save to Art Vault"
        saveButton.textContent = "Save to Art Vault";
        saveButton.classList.remove("btn-remove", "btn-secondary");
        saveButton.classList.add("btn-accent");
        saveButton.onclick = saveCurrentArtworkToVault;
    }   

    const modalElement = document.getElementById("artModal");
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
}

// Save artwork to vault

function saveCurrentArtworkToVault() {
    if (!currentArtwork) return;

    let vault = JSON.parse(localStorage.getItem("artvault")) || [];

    vault.push(currentArtwork);
    localStorage.setItem("artvault", JSON.stringify(vault));

    const modalElement = document.getElementById("artModal");
    
    // Remove focus from button
    if (document.activeElement) {
        document.activeElement.blur();
    }
    
    bootstrap.Modal.getInstance(modalElement).hide();

    alert("Artwork saved to your Vault!");
}

// Remove artwork from vault

function removeFromVault() {
    if (!currentArtwork) return;

    let vault = JSON.parse(localStorage.getItem("artvault")) || [];

    // Remove the artwork from the array
    vault = vault.filter(item => item.id !== currentArtwork.id);

    // Update localStorage
    localStorage.setItem("artvault", JSON.stringify(vault));

    // Close modal
    const modalElement = document.getElementById("artModal");
    // Remove focus from button
    if (document.activeElement) {
        document.activeElement.blur();
    }
    bootstrap.Modal.getInstance(modalElement).hide();

    // Show feedback
    alert("Artwork removed from your Vault!");

    // Re-render the Art Vault view
    if (currentView === "vault") {
        showMyVault();
    }
}

// Show About modal
function showAboutModal() {
    const modalElement = document.getElementById("aboutModal");
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
}

// Handle search form submission

async function handleSearch(e) {
    currentView = "search";
    e.preventDefault();

    const query = document.getElementById("search-input").value.trim();
    if (!query) return;

    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = `
        <div class="col-12 text-center py-5">
            <div class="spinner-border text-primary" role="status"></div>
            <p class="mt-3">Searching the collection...</p>
        </div>
    `;

    try {
        const artworks = await searchArtworks(query);
        renderArtworks(artworks);
    } catch (error) {
        resultsContainer.innerHTML = `
            <div class="col-12 text-center py-5">
                <p>Something went wrong. Please try again.</p>
            </div>
        `;
    }
}

// Suprise Me! - Load a random artwork on page load

async function showRandomArtwork() {
    currentView = "search";
    const suggestions = [
        "van gogh",
        "rubens",
        "rodin",
        "frans hals",
        "rembrandt",
        "degas",
        "michelangelo",
        "caravaggio",
        "velazquez",
        "raphael",
        "el greco",
        "goya",
        "ingres",
        "vermeer",
        "delacroix",
        "manet",
        "titian",
        "courbet",
        "gauguin",
        "renoir",
        "pissarro",
        "cezanne",
        "gauguin",
        "klimt",
        "modigliani",
        "donatello",
        "schiele",
    ];
    const randomQuery = suggestions[Math.floor(Math.random() * suggestions.length)];

    document.getElementById("search-input").value = randomQuery;

    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = `
        <div class="col-12 text-center py-5">
            <div class="spinner-border text-primary"></div>
            <p class="mt-3">Finding your suprise!...</p>
        </div>
    `;

    try {
        const artworks = await searchArtworks(randomQuery);
        if (artworks.length > 0) {
            renderArtworks(artworks);
        }
    } catch (error) {
        console.error(error);
    }
}

// Show saved artworks in vault

function showMyVault() {
    currentView = "vault";
    const vault = JSON.parse(localStorage.getItem("artvault")) || [];
    const resultsContainer = document.getElementById("results");

    resultsContainer.innerHTML = "";

    if (vault.length === 0) {
        resultsContainer.innerHTML = `
            <div class="col-12 text-center py-5">
                <p class="lead">Your Art Vault is empty. Save some artworks first!</p>
            </div>
        `;
        return;
    }

    vault.forEach((artwork) => {
        const card = createCard(artwork);
        resultsContainer.appendChild(card);
    });
}

// Reset to home view

function resetToHome() {
    currentView = "search";
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";

    resultsContainer.innerHTML = `
        <div class="col-12 py-5" id="placeholder">
            <div class="d-flex justify-content-center">
                <p class="lead mb-0 text-center">
                    Use the search bar or "Surprise Me!" to explore artworks.
                </p>
            </div>
        </div>
    `;

    const searchInput = document.getElementById("search-input");
    if (searchInput) searchInput.value = "";
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

    // Connect About button
    const aboutLink = document.getElementById("about-link");
    if (aboutLink) {
        aboutLink.addEventListener("click", (e) => {
            e.preventDefault();
            showAboutModal();
        });
    }

    // Connect search form
    const searchForm = document.getElementById("search-form");
    if (searchForm) {
        searchForm.addEventListener("submit", handleSearch);
    }

    // Connect Suprise Me! button
    const randomBtn = document.getElementById("random-btn");
    if (randomBtn) {
        randomBtn.addEventListener("click", showRandomArtwork);
    }

    // Connect vault button
    const artVaultLink = document.getElementById("art-vault-link");
    if (artVaultLink) {
        artVaultLink.addEventListener("click", (e) => {
            e.preventDefault();
            showMyVault();
        });
    }

    // Home link and logo reload page

    const homeLink = document.getElementById("home-link");
    const logo = document.getElementById("logo");

    if (homeLink) {
        homeLink.addEventListener("click", (e) => {
            e.preventDefault();
            resetToHome();
        });
    }

    if (logo) {
        logo.addEventListener("click", (e) => {
            e.preventDefault();
            resetToHome();
        });
    }

    const artModal = document.getElementById("artModal");

    artModal.addEventListener("hidden.bs.modal", () => {
        // Exit fullscreen
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }

        // Remove focus from elements inside modal
        if (document.activeElement && artModal.contains(document.activeElement)) {
            document.activeElement.blur();
        }
    });

    // Mobile navbar collapses after clicking a link
    document
        .querySelectorAll(".navbar-collapse .nav-link, .nav-links-box button")
        .forEach((element) => {
            element.addEventListener("click", () => {
                const navbarCollapse = document.querySelector(".navbar-collapse");
                if (navbarCollapse && navbarCollapse.classList.contains("show")) {
                    navbarCollapse.classList.remove("show");
                }
            });
        });
}

// Run init on page load
document.addEventListener("DOMContentLoaded", init);
