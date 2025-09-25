// Contact form handler
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Message sent successfully. I’ll reply shortly.");
  e.target.reset();
});
