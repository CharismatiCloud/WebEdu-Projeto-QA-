// EduStark — main.js
// Marca o link ativo no navbar
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.href === window.location.href) link.classList.add('active');
});