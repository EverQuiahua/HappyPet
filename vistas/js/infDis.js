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
  
  // Función para actualizar la barra de progreso
  function actualizarBarraDeProgreso() {
    const barraAgua = document.getElementById('barraAgua');
    const porcentaje = ((15 - 5) / 15.0) * 100.0;
  
    if (porcentaje >= 0 && porcentaje <= 100) {
      const valorNormalizado = porcentaje / 100.0;
      barraAgua.value = valorNormalizado * barraAgua.max;
    } else {
      barraAgua.value = 0;
    }
  }