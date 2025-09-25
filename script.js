// Mobile nav toggle (if needed)
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav-links");
  const toggle = document.createElement("div");
  toggle.innerHTML = "☰";
  toggle.style.cursor = "pointer";
  toggle.style.color = "#fff";
  toggle.onclick = () => nav.classList.toggle("show");
  document.querySelector(".navbar").appendChild(toggle);
});
