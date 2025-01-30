export function setupSearch() {
  const searchInput = document.querySelector('.search-bar input');
  const searchButton = document.querySelector('.search-bar button');

  if (searchInput && searchButton) {
      searchButton.addEventListener('click', () => {
          const query = searchInput.value.trim().toLowerCase();
          alert(`Je hebt gezocht naar: ${query}`);
      });

      searchInput.addEventListener('keypress', (event) => {
          if (event.key === 'Enter') {
              searchButton.click();
          }
      });
  }
}
