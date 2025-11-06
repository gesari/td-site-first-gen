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


// Toggle display of sidenav at smaller screen sizes
const sidenav = document.querySelector('.sidenav');
const sidenavToggle = document.querySelector('.sidenavToggle');

sidenavToggle.addEventListener('click', e => {
    const isOpen = sidenav.classList.contains("open");

    sidenav.classList.toggle("open");

    if (!isOpen) {
        sidenav.style.height = 'calc(100vh - 3rem)';
        sidenavToggle.style.transform = 'rotate(0)';
    }
    else {
        sidenav.style.height = '3rem';
        sidenavToggle.style.transform = 'rotate(180deg)';
        // setTimeout(sidenav.style.display = 'none', 5000);
    }
})

// Toggle display of rightnav at smaller screen sizes
const rightnav = document.querySelector('.rightnav');
const rightnavToggle = document.querySelector('.rightnavToggle');

rightnavToggle.addEventListener('click', () => {
    
    const isOpen = rightnav.classList.contains("open");

    rightnav.classList.toggle("open");

    if (!isOpen) {
        rightnav.style.height = 'calc(100vh - 3rem)';
        rightnavToggle.style.transform = 'rotate(0)';
    }
    else {
        rightnav.style.height = '3rem';
        rightnavToggle.style.transform = 'rotate(180deg)';
        // setTimeout(rightnav.style.display = 'none', 5000);
    }
})