 // Escucha el evento scroll en el cuerpo
 $(window).on("scroll", function() {
    // Obtiene la posición del scroll
    var scrollY = $(window).scrollTop();

    // Si el scroll está más abajo de un cierto punto, expande el botón
    if (scrollY > 100) {
      $("#btn-ir-arriba").addClass("expandido");
    } else {
      // Si el scroll está más arriba de un cierto punto, contrae el botón
      $("#btn-ir-arriba").removeClass("expandido");
    }
  });