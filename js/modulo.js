    // Menú hamburguesa
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
  
    if (toggle && menu) {
      toggle.addEventListener("click", () => {
        menu.classList.toggle("show");
      });
    }

    /*Header*/
    document.getElementById("header").innerHTML = `<header>
            <div class="container">
            <img src="img/plane-alt-solid-24.png" alt="logo" class="logo">
            <h1>TITULO PRINCIPAL</h1>
            <nav id="nav">
                <button id="menu-toggle">☰</button>
                <ul id="menu">
                    <li><a href="#">INICIO</a></li>
                    <li><a href="destinos.html">DESTINOS</a></li>
                    <li><a href="contacto.html">CONTACTOS</a></li>
                </ul>
            </nav>
        </div>
    </header>`;

    /*Footer*/
    document.getElementById("footer").innerHTML = `<footer>
        <p style="color: white;">© Copyright 2025. Todos los derechos reservados.</p>
        <div class="social-icons">
            <a href="#"><img src="img/twitter.png"></a>
            <a href="#"><img src="img/instagram-new.png"></a>
            <a href="#"><img src="img/print.png"></a>
        </div>
    </footer>`;
  