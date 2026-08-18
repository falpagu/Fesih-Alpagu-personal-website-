async function loadReferences() {
    const response = await fetch("../scripts/database.json")
    const references = await response.json();

    const container = document.getElementById("referencesContainer");
   
    if (!container) {
        return;
    }

    references.forEach(reference => {
        container.innerHTML += `
            <a href="${reference.link}" target="_blank" class="reference-card">
                <img 
                    src="${reference.logo}" 
                    alt="${reference.name} Logo"
                >
            </a>
        `;
    });
}

loadReferences();


document.getElementById("current-year").textContent = new Date().getFullYear();


const menuButton = document.querySelector(".menu_toggle");
const navLinks = document.querySelector(".nav_links");

if (menuButton) {
    menuButton.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}