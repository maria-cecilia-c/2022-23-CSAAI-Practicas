//ARRAY NUM SECRETO
num_Secreto = [];
n = 0;
//CLAVE SECRETA SERÁ UN NUMERO ALEATORIA DE 4 DIGITOS 
//una vez creado los 4 numeros lo meteremos a un array. 
//for que genere 4 num 
for (var i = 0; i < 4; i++) { //0-9
    n += i;
    num1 = Math.floor(Math.random()*10);
    num_Secreto.push(num1);
    console.log(num1);
  }
  


//-- Elementos de la interfaz de la calculadora
//-- Estados de la calculadora
const ESTADO = {
    INIT: 0,
    OP1: 1,
    OPERATION: 2,
    OP2: 3
}
//-- Elementos de la gui
const gui = {
    display : document.getElementById("display"),
    start : document.getElementById("start"),
    stop : document.getElementById("stop"),
    reset : document.getElementById("reset")
}

//-- Definir un objeto cronómetro
const crono = new Crono(gui.display);

 //-- Variable de estado de la calculadora
 //-- Al comenzar estamos en el estado inicial
 let estado = ESTADO.INIT;   

//-- Función de retrollamada de los digitos
function digito(ev){
    if (estado == ESTADO.INIT) {

        pantalla.innerHTML = ev.target.value;
        estado = ESTADO.OP1;

    } else {
       
        //--En cualquier otro estado lo añadimos
        pantalla.innerHTML += ev.target.value;

    } 
    
}

digitos = document.getElementsByClassName("digito")

//-- Establecer la misma función de retrollamada
//-- para todos los botones de tipo dígito
for (let boton of digitos) {
    boton.onclick = (ev) => {
        pantalla.innerHTML += ev.target.value;
        crono.start();
      }    
}


console.log("Ejecuitando JS...");


//-- Poner a cero la expresion quitar despues
reset.onclick = () => {
display.innerHTML = "0:0:0";
}

//---- Configurar las funciones de retrollamada

//-- Arranque del cronometro
gui.start.onclick = () => {
    console.log("Start!!");
    crono.start();
}
  
//-- Detener el cronómetro
gui.stop.onclick = () => {
    console.log("Stop!");
    crono.stop();
}

//-- Reset del cronómetro
gui.reset.onclick = () => {
    console.log("Reset!");
    crono.reset();
}


//no quiero ver lo que escribo, solo cuando acierte