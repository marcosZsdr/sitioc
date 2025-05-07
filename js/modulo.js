    // Menú hamburguesa
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
  
    if (toggle && menu) {
      toggle.addEventListener("click", () => {
        menu.classList.toggle("show");
      });
    }

    /*Footer*/
    document.getElementById("footer").innerHTML = `<footer>
        <p style="color: white;">© Copyright 2025. Todos los derechos reservados.</p>
        <div class="social-icons">
            <a href="#"><img src="img/twitter.png"></a>
            <a href="#"><img src="img/instagram-new.png"></a>
            <a href="#"><img src="img/print.png"></a>
        </div>
    </footer>`;
  