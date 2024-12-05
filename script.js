/*document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");
    const submenus = document.querySelectorAll(".submenu");

    // Alternar menú principal
    hamburger.addEventListener("click", () => {
        menu.classList.toggle("show");
    });

    // Alternar submenús
    document.querySelectorAll(".menu-item > a").forEach(item => {
        item.addEventListener("click", function (e) {
            const submenu = this.nextElementSibling;
            if (submenu && submenu.classList.contains("submenu")) {
                e.preventDefault();
                submenu.classList.toggle("show");
            }
        });
    });
});*/
/*
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona el botón y el menú
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');

    // Verifica que existan ambos elementos antes de agregar el evento
    if (hamburger && menu) {
      hamburger.addEventListener('click', () => {
        menu.classList.toggle('show'); // Activa/desactiva la clase "show"
      });
    }
  });*/

document.getElementById('menu-toggle').addEventListener('click', function () {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
});