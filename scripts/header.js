// scripts/header.js
function loadHeader() {
  fetch("partials/header.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("navbar-placeholder").innerHTML = data;

      const modulesButton = document.getElementById("modulesButton");
      const moduleDropdown = document.getElementById("moduleDropdown");
      const resourcesButton = document.getElementById("resourcesButton");
      const resourcesDropdown = document.getElementById("resourcesDropdown");

      if (modulesButton && moduleDropdown) {
        modulesButton.addEventListener("click", (e) => {
          e.stopPropagation();
          moduleDropdown.classList.toggle("show");
          resourcesDropdown.classList.remove("show");
        });

        window.addEventListener("click", () => {
          moduleDropdown.classList.remove("show");
        });
      }

      if (resourcesButton && resourcesDropdown) {
        resourcesButton.addEventListener("click", (e) => {
          e.stopPropagation();
          resourcesDropdown.classList.toggle("show");
          moduleDropdown.classList.remove("show");
        });

        window.addEventListener("click", () => {
          resourcesDropdown.classList.remove("show");
        });
      }
    });
}
