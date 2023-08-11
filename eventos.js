document.addEventListener("DOMContentLoaded", function () {

const midiv = document.getElementById("midiv");

function myFunction() {
    alert("Hola!");
}

midiv.addEventListener('click', () => {
    alert('Hola! Soy el div');
});
});