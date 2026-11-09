const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

function openEnquiry(subject, body) {
  // Replace this demo address with your real business enquiry email.
  window.location.href = 'mailto:hello@primeholidays.example?subject=' +
    encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
}
document.getElementById('tripSearch').addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  openEnquiry('Holiday enquiry: ' + data.get('destination'),
    'Hello Prime Holidays,\n\nI would love to explore ' + data.get('destination') +
    '.\nTravel date: ' + (data.get('date') || 'Flexible dates') +
    '\nTravellers: ' + data.get('travellers') +
    '\n\nPlease share some options.\n\nThank you.');
});
document.getElementById('contactForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  openEnquiry('New travel enquiry from ' + data.get('name'),
    'Name: ' + data.get('name') + '\nEmail: ' + data.get('email') +
    '\nDestination: ' + data.get('destination') +
    '\n\nMessage:\n' + data.get('message'));
});