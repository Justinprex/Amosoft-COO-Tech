// Mobile nav toggle (if needed)
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav-links");
  const toggle = document.createElement("div");
  toggle.innerHTML = "☰";
  toggle.style.cursor = "pointer";
  toggle.style.color = "#fff";
  toggle.onclick = () => nav.classList.toggle("show");
  document.querySelector(".navbar").appendChild(toggle);
// Contact form submission handler
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thanks for reaching out! I’ll get back to you soon.");
  this.reset();
});
