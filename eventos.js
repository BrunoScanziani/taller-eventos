document.addEventListener("DOMContentLoaded", function () {

    const midiv = document.querySelector("div");
    const boton = document.querySelector("button");

    boton.addEventListener("click", (e) => {
        alert("Hola!");
        e.stopPropagation();
    });

    midiv.addEventListener('click', (e) => {
        alert('Hola! Soy el div');
        e.stopPropagation();
    });
});