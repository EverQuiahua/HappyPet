const cloud = document.getElementById("cloud");
const Dispensador = document.getElementById("Dispensador")
const barraLateral = document.querySelector(".barra-lateral");
const spans = document.querySelectorAll("span");
const palanca = document.querySelector(".switch");
const circulo = document.querySelector(".circulo");
const menu = document.querySelector(".menu");
const main = document.querySelector("main");

menu.addEventListener("click",()=>{
    barraLateral.classList.toggle("max-barra-lateral");
    if(barraLateral.classList.contains("max-barra-lateral")){
        menu.children[0].style.display = "none";
        menu.children[1].style.display = "block";
    }
    else{
        menu.children[0].style.display = "block";
        menu.children[1].style.display = "none";
    }
    if(window.innerWidth<=320){
        barraLateral.classList.add("mini-barra-lateral");
        main.classList.add("min-main");
        spans.forEach((span)=>{
            span.classList.add("oculto");
        })
    }
});

palanca.addEventListener("click",()=>{
    let body = document.body;
    body.classList.toggle("dark-mode");
    body.classList.toggle("");
    circulo.classList.toggle("prendido");
});

cloud.addEventListener("click",()=>{
    barraLateral.classList.toggle("mini-barra-lateral");
    main.classList.toggle("min-main");
    spans.forEach((span)=>{
        span.classList.toggle("oculto");
    });
});

function cambiarVista() {
    window.location.href = "infDis.html";
}

function cambiarVista() {
    window.location.href = "infDis.html";
}

function cambiarVistaAgregarM() {
    window.location.href = "AgregarMas.html";
}

async function getPercentage() {
    // Realizamos una solicitud HTTP a la ruta `/my-custom-route`
    const response = await fetch('http://192.168.1.103/');
  
    // Obtenemos el cuerpo de la respuesta
    const data = await response.text();
  
    // Convertimos el texto a un número
    const percentage = Number(data);
  
    // Devolvemos el porcentaje
    return percentage;
  }
  // Obtener el contexto del canvas
const ctx = document.getElementById('porcentaje-chart').getContext('2d');

// Función para inicializar el gráfico
function initChart(porcentaje) {
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Utilizado', 'Disponible'],
            datasets: [{
                data: [porcentaje, 100 - porcentaje], // Datos del porcentaje y el complemento
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)', // Color para la parte usada
                    'rgba(54, 162, 235, 0.8)' // Color para la parte disponible
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
            // Otras opciones de configuración del gráfico
        }
    });
}

// Llamada a la función de obtener el porcentaje y actualizar el gráfico
async function actualizarPorcentaje() {
    const porcentaje = await getPercentage();
    document.getElementById('dispensador-info').innerText = porcentaje + '%';
    initChart(porcentaje);
}

// Ejemplo de cómo actualizar el porcentaje cada segundo
setInterval(actualizarPorcentaje, 1000);
