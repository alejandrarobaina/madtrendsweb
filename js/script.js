// MENU 
$("#menu .fa-bars").click(function(){
    console.log("click");
  
    $("#menu ul").css("left", "0");
  });
  
  $("#menu li").click(function(){
    console.log("cerrar");
    $("#menu ul").css("left", "-100%");
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
  
    