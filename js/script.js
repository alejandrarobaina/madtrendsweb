// MENU 
$("#menu .fa-bars").click(function(){
    console.log("click");
  
    $("#menu ul").css("left", "0");
  });
  
  $("#menu li").click(function(){
    console.log("cerrar");
    $("#menu ul").css("left", "-100%");
  });

// MENU HAMBURGUESA
  document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector("#navbarNav");

    navbarToggler.addEventListener("click", function () {
        // Si el submenú está abierto, se cierra al hacer clic
        if (navbarCollapse.classList.contains("show")) {
            navbarCollapse.classList.remove("show");
        } else {
            navbarCollapse.classList.add("show");
        }
    });
});


// LOGO MADTRENDS 
  $(document).ready(function() {
    const $logo = $('#logo');
    const originalSrc = 'img/home/madtrendslogoblanco.png'; // Ruta de la imagen original
    const hoverSrc = 'img/home/madtrendslogonegro.png'; // Ruta de la imagen del menú
    const buttonHoverSrc = 'img/home/madtrendslogorosa.png'; // Ruta de la imagen del botón
    const $menu = $('.menu');
    const $navbarToggler = $('.navbar-toggler');
    const $submenu = $('#navbarNav');

    // Cambiar la imagen al hacer hover en el contenedor del menú
    $menu.on('mouseenter', function() {
        $logo.attr('src', hoverSrc);
    });

    // Restaurar la imagen original al salir del hover en el menú
    $menu.on('mouseleave', function() {
        if (!$logo.is(':hover')) {
            $logo.attr('src', originalSrc); // Vuelve a la imagen original si el logo no está en hover
        }
    });

    // Cambiar la imagen al hacer hover en el logo
    $logo.on('mouseenter', function() {
        $logo.attr('src', buttonHoverSrc); // Cambia a rosa
    });

    // Restaurar la imagen al salir del hover en el logo
    $logo.on('mouseleave', function() {
        if ($menu.is(':hover')) {
            $logo.attr('src', hoverSrc); // Mantiene la imagen negra si el menú sigue en hover
        } else {
            $logo.attr('src', originalSrc); // Vuelve a la imagen original
        }
    });

    // Redirigir al hacer clic en el logo
    $logo.on('click', function() {
        window.location.href = 'index.html'; // Redirige a index.html
    });

    // JavaScript para controlar el comportamiento del menú hamburguesa
    $navbarToggler.on('click', function() {
        $submenu.toggleClass('show'); // Cambia la clase 'show' para mostrar/ocultar el submenú
    });
});


// CARRUSEL
$(document).ready(function(){
    $('.slick-carousel').slick({
        infinite: true, 
        speed: 700, 
        slidesToShow: 4.5, 
        slidesToScroll: 1, 
        autoplay: true, 
        autoplaySpeed: 100, 
        arrows: false, 
        responsive: [ 
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});