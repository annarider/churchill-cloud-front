document.addEventListener("DOMContentLoaded", () => {
  // Get the body element
  const body = document.querySelector('body');
  
  // Get the menu buttons and mobile menu elements
  const menuButton = document.querySelector('button[aria-label="Global"]');
  const closeButton = document.querySelector('button[aria-label="Close menu"]');
  const mobileMenu = document.querySelector('div[role="dialog"]');
  const backdrop = document.querySelector(".fixed.inset-0.z-10");

  // Function to open menu
  const openMenu = () => {
    mobileMenu.classList.remove("hidden");
    backdrop.classList.remove("hidden");
    body.style.overflow = "hidden"; // Prevent scrolling when menu is open
    menuButton.setAttribute("aria-expanded", "true");
  };

  // Function to close menu
  const closeMenu = () => {
    mobileMenu.classList.add("hidden");
    backdrop.classList.add("hidden");
    body.style.overflow = ""; // Restore scrolling
    menuButton.setAttribute("aria-expanded", "false");
  };

  // Add click event listeners
  menuButton?.addEventListener("click", openMenu);
  closeButton?.addEventListener("click", closeMenu);
  backdrop?.addEventListener("click", closeMenu);

  // Initialize aria-expanded state
  menuButton?.setAttribute("aria-expanded", "false");
});