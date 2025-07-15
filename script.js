
// Dark Mode Initialization
const toggle = document.getElementById('dark-mode-toggle');
const isDark = localStorage.getItem('theme') === 'dark';
if (isDark) document.body.classList.add('dark');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const nowDark = document.body.classList.contains('dark');
  localStorage.setItem('theme', nowDark ? 'dark' : 'light');
});

// Typewriter Effect
const txt = "Cybersecurity & Automation Engineer";
let i = 0;
(function type() {
  if (i < txt.length) {
    document.getElementById('typed').textContent += txt.charAt(i++);
    setTimeout(type, 75);
  }
})();
