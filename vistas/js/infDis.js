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
document.addEventListener("DOMContentLoaded", function () {
    // Llama a la función para obtener la información del dispensador cuando se carga la página
    obtenerInformacionDispensador();

    // Función para obtener la información del dispensador mediante una solicitud Fetch
    function obtenerInformacionDispensador() {
        fetch("liecbddmkiiihnedobmlmillhodjkdmb") // Reemplaza "/distance" con la ruta correcta de tu servidor ESP32
            .then(response => response.text())
            .then(data => {
                // Muestra la información en el contenedor
                document.getElementById("dispensador-info").innerText = "Nivel de dispensador: " + data;
            })
            .catch(error => {
                console.error("Error al obtener información del dispensador:", error);
            });
    }
});

function cambiarVista() {
    window.location.href = "infDis.html";
}

function cambiarVistaAgregarM() {
    window.location.href = "AgregarMas.html";
}