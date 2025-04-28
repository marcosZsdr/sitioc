document.getElementById("header").innerHTML = "<h1>Explora Argentina</h1>";
document.getElementById("nav").innerHTML = `  <ul>
        <li><a href="index.html">Inicio</a></li>
        <li><a href="pagina1.html">Destinos</a></li>
        <li><a href="pagina2.html">Contacto</a></li>
    </ul>

`;
document.getElementById("footer").innerHTML = '<p>&copy; 2025 Explora Argentina - Todos los derechos reservados</p>';


const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
menu.classList.toggle('show');
});