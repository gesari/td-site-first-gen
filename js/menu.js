// Toggle dropdown menu visibility
const toggleDropdown = (dropdown, menu, isOpen) => {
    dropdown.classList.toggle("open", isOpen);
    menu.style.height = isOpen ? `${menu.scrollHeight}px` : 0;
}

// Close all dropdowns
const closeAllDropdowns = () => {
    document.querySelectorAll(".dropdownContainer.open").forEach(openDropdown => {
        toggleDropdown(openDropdown, openDropdown.querySelector(".dropdownMenu"), false);
    })
}

// Attach click event to all dropdown toggles
document.querySelectorAll(".dropdownToggle").forEach(dropdownToggle => {
    dropdownToggle.addEventListener("click", e => {
        e.preventDefault();

        const dropdown = e.target.closest(".dropdownContainer");
        const menu = dropdown.querySelector(".dropdownMenu");
        const isOpen = dropdown.classList.contains("open");

        closeAllDropdowns();

        toggleDropdown(dropdown, menu, !isOpen);
    });
});

document.querySelector(".dropdownContainer").addEventListener("click", () => {
    document.querySelector(".dropdownMenu").classList.toggle("open");
})