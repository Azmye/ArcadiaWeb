let navLinks = document.querySelector('.nav-links');
let buttonToggle = document.querySelector('.button_toggle');

buttonToggle.addEventListener('click', () => {
  navLinks.classList.toggle('links-dropdown');
});
