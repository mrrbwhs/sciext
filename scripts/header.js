// scripts/header.js
function loadHeader() {
  fetch("partials/header.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("navbar-placeholder").innerHTML = data;

      const button = document.getElementById("modulesButton");
      const dropdown = document.getElementById("moduleDropdown");

      if (button && dropdown) {
        button.addEventListener("click", (e) => {
          e.stopPropagation();
          dropdown.classList.toggle("show");
        });

        window.addEventListener("click", () => {
          dropdown.classList.remove("show");
        });
      }
    });
}
