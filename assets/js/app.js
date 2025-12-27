const toggle = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light");
  toggle.textContent = "☀️";
}

// Toggle theme
toggle.onclick = () => {
  body.classList.toggle("light");

  if (body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
    toggle.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "dark");
    toggle.textContent = "🌙";
  }
};
