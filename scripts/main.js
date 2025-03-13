// Sample data for popular shows
const popularShows = [
    {
        title: "Money Heist",
        image: "3.png",
    },
    {
        title: "F.R.I.E.N.D.S",
        image: "4.png",
    },
    {
        title: "Stranger Things",
        image: "5.png",
    },
    {
        title: "Wednesday",
        image: "6.png",
    },
    {
        title: "Game Of Thornes",
        image: "7.png",
    },
];

// Function to create a show card
function createShowCard(show) {
    const card = document.createElement("div");
    card.className = "show-card";

    const image = document.createElement("img");
    image.src = show.image;
    image.alt = show.title;

    const title = document.createElement("h3");
    title.textContent = show.title;

    card.appendChild(image);
    card.appendChild(title);

    return card;
}

// Function to render the carousel
function renderCarousel() {
    const carousel = document.querySelector(".carousel");
    popularShows.forEach((show) => {
        const card = createShowCard(show);
        carousel.appendChild(card);
    });
}

// Function to handle search
function handleSearch() {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");

    searchButton.addEventListener("click", () => {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Searching for: ${query}`);
            // Add actual search functionality here (e.g., filter shows)
        } else {
            alert("Please enter a search term.");
        }
    });

    searchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            const query = searchInput.value.trim();
            if (query) {
                alert(`Searching for: ${query}`);
                // Add actual search functionality here (e.g., filter shows)
            } else {
                alert("Please enter a search term.");
            }
        }
    });
}

// Initialize the main page
function initMainPage() {
    console.log("Main page loaded");

    // Render the carousel
    renderCarousel();

    // Add search functionality
    handleSearch();
}

// Run the initialization function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initMainPage);