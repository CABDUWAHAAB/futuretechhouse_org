import { setupNavigation } from './navigation.js';
import { setupSearch } from './search.js';
import { setupSliders } from './slider.js';
import { setupScrollEffects } from './scroll.js';

document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    setupSearch();
    setupSliders();
    setupScrollEffects();
});

document.querySelector('.dark-mode-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
