// Simple nav highlight
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll("nav a").forEach(link => {
    if (link.href === window.location.href) link.classList.add("active");
  });
});

