const cuadrado = document.querySelectorAll(".cuadrado");
const tiempofaltante = document.querySelector("#tiempo");
let puntaje = document.getElementById("puntaje");

let resultado = 0;
let tiempoactual = tiempofaltante.textContent;

function cuadradoazar() {
  cuadrado.forEach((nombredeclase) => {
nombredeclase.classList.remove("topo");
  });
  let posicionalazar = cuadrado [Math.floor (math.random() * 9)];
posicionalazar.classlist.add("topo");

posiciontopo = posiciontopo.posicionalazar.Id;
}

cuadrado.forEach((identificador) => {
identificador.addEventListener("click", () => {
  if (identificador.Id === posiciontopo) {
    resultado = resultado + 1;
    puntaje.textContent = resultado;
    posicionalazar = null;
  }  
});

function movertopo (){
  tiempotopo = setInterval (cuadradoazar,700);
}
movertopo();

function cuentaregresiva (){
  tiempoactual--;
  tiempofaltante.textContent = tiempoactual;
  if (tiempoactual=== 0){
    clearInterval(idtiempo);
    clearInterval(tiempotopo);
    alert ("se acabo el tiempo tu puntaje fue" + resultado + "topos atrapados");
  }
}