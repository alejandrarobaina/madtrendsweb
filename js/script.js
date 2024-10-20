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
  
  
  
  // Initialize ChartJS
  const ctx = $('#myChart');
  
  new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [{
          label: '# Temperatura media en grados celcius',
          data: [15, 19, 20, 27, 32, 34, 29, 27, 26, 32, 22, 19],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  
    