export function setupNavigation() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (menuToggle && navMenu) {
      menuToggle.addEventListener('click', () => {
          navMenu.classList.toggle('active');
          menuToggle.classList.toggle('open');
      });

      document.addEventListener('click', (event) => {
          if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
              navMenu.classList.remove('active');
              menuToggle.classList.remove('open');
          }
      });
  }
}
