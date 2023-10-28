function toggleBurgerMenu() {
    // Get the burger menu element
    const burgerMenu = document.getElementById('#burger-menu');
  
    // Toggle the 'active' class on the burger menu element
    burgerMenu.classList.toggle('active');
  }
  
  // Add event listener to burger menu button
  const burgerMenuButton = document.getElementById('burger-menu-button');
  burgerMenuButton.addEventListener('click', toggleBurgerMenu);