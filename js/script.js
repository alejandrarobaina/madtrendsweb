// MENU 
$("#menu .fa-bars").click(function(){
    console.log("click");
  
    $("#menu ul").css("left", "0");
  });
  
  $("#menu li").click(function(){
    console.log("cerrar");
    $("#menu ul").css("left", "-100%");
  });


  const logo = document.getElementById('logo');
        const originalSrc = 'img/home/madtrendslogoblanco.png'; // Ruta de la imagen original
        const hoverSrc = 'img/home/madtrendslogonegro.png'; // Ruta de la nueva imagen

        // Cambiar la imagen al hacer hover en el contenedor del menú
        document.querySelector('.menu').addEventListener('mouseenter', () => {
            logo.src = hoverSrc;
        });

        // Restaurar la imagen original al salir del hover
        document.querySelector('.menu').addEventListener('mouseleave', () => {
            logo.src = originalSrc;
        });
  
  
        // JavaScript para controlar el comportamiento del menú hamburguesa
        const navbarToggler = document.querySelector('.navbar-toggler');
        const submenu = document.getElementById('navbarNav');

        navbarToggler.addEventListener('click', () => {
            submenu.classList.toggle('show'); // Cambia la clase 'show' para mostrar/ocultar el submenú
        });
  

        // JavaScript para controlar el comportamiento del Carrusel
        $(document).ready(function(){
            $('#carouselExample').on('slide.bs.carousel', function (e) {
                var itemsPerSlide = 5;
                var totalItems = $('.carousel-item').length;
                var $e = $(e.relatedTarget);
                var idx = $e.index();
    
                if (idx >= totalItems - (itemsPerSlide - 1)) {
                    var it = itemsPerSlide - (totalItems - idx);
                    for (var i = 0; i < it; i++) {
                        // Agrega los elementos faltantes al final
                        if (e.direction === "left") {
                            $('.carousel-item').eq(i).appendTo('.carousel-inner');
                        } else {
                            $('.carousel-item').eq(0).appendTo('.carousel-inner');
                        }
                    }
                }
            });
        });
  

