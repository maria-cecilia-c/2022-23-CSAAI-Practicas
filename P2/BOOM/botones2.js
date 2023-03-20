//ARRAY NUM SECRETO
var num_Secreto = [];

aciertos =[]; 


//CLAVE SECRETA SERÁ UN NUMERO ALEATORIA DE 4 DIGITOS 
//hacer función para llamar
function CrearNumSecreto(secreto){
    for (var i = 0; i < 4; i++) { //0-9    
        num1 = Math.floor(Math.random()*10);
        secreto.push(num1);
    }
}
CrearNumSecreto(num_Secreto);
console.log('NUMERO SECRETO',num_Secreto)

//-- Elementos de la interfaz de la calculadora
//-- Estados de la calculadora
const ESTADO = {
    INIT: 0,
    OP1: 1,
    OPERATION: 2,
    OP2: 3
}
const click_sound = new Audio('smile.mp3');

const gui = {
    display : document.getElementById("display"),
    start : document.getElementById("start"),
    stop : document.getElementById("stop"),
    reset : document.getElementById("reset")
}

//-- Definir un objeto cronómetro
const crono = new Crono(gui.display);
const cancion = document.getElementById("cancion")

//-- Variable de estado de la calculadora
//-- Al comenzar estamos en el estado inicial
let estado = ESTADO.INIT;   

//-- Función de retrollamada de los digitos
function digito(ev){
    if (estado == ESTADO.INIT) {
        display.innerHTML = ev.target.value;
        estado = ESTADO.OP1;
    } else {
        //--En cualquier otro estado lo añadimos
        pantalla0.innerHTML += ev.target.value;
    } 
    
}

digitos = document.getElementsByClassName("digito")

//-- Establecer la misma función de retrollamada
for (let boton of digitos) {
    boton.onclick = (ev) => {
       console.log(ev.target.value) //par que no salga por pantalla lo que escribimos
        crono.start();
        
            for(j = 0; j < num_Secreto.length; j++)  {

                if (num_Secreto[j] == ev.target.value){
                    pantalla0.innerHTML = num_Secreto[j] 
                    pantalla0.style.cssText = 'color:  #49dbff;';
                    aciertos.push(num_Secreto[j] );
                    num_Secreto[j] = 11;
                }
                else if (num_Secreto[j+1] == ev.target.value){
                    pantalla1.innerHTML = num_Secreto[j+1]
                    pantalla1.style.cssText = 'color:  #49dbff;';
                    aciertos.push(num_Secreto[j+1] );
                    num_Secreto[j+1]  = 11;
                }
                else if (num_Secreto[j+2] == ev.target.value){
                    pantalla2.innerHTML = num_Secreto[j+2] 
                    pantalla2.style.cssText = 'color:  #49dbff;';
                    aciertos.push(num_Secreto[j+2] );
                    num_Secreto[j+2]  = 11;
                   
                }
                else if(num_Secreto[j+3] == ev.target.value){
                    pantalla3.innerHTML = num_Secreto[j+3] 
                    pantalla3.style.cssText = 'color:  #49dbff;'; //cambiar el colos si acertamos
                    aciertos.push(num_Secreto[j+3] ); 
                    num_Secreto[j+3]  = 11;
                }
                console.log("ACIERTOS", aciertos)
                break
                
            }  //función de recursividad
            if (num_Secreto.length==aciertos.length){
                crono.stop();
                num_Secreto=[];
            }
           
    }    
}

console.log("Ejecuitando JS...");


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
    click_sound.pause();
}

//-- Reset del cronómetro
gui.reset.onclick = () => {
    console.log("Reset!");
    crono.reset();
}
cancion.onclick=() => {
    click_sound.currentTime = 0;
    click_sound.play();
}


//-- Poner a cero la expresion quitar despues
reset.onclick = () => {
    crono.stop();
    crono.reset();
    num_Secreto=[];
    aciertos=[];
    pantalla0.style.cssText = 'color:  #91ff00;';
    pantalla1.style.cssText = 'color:  #91ff00;';
    pantalla2.style.cssText = 'color:  #91ff00;';
    pantalla3.style.cssText = 'color:  #91ff00;';
    display.innerHTML = "0:0:0";
    estado = ESTADO.INIT;
    pantalla0.innerHTML = "*";
    pantalla1.innerHTML = "*";
    pantalla2.innerHTML = "*";
    pantalla3.innerHTML = "*";
    CrearNumSecreto(num_Secreto);
    console.log('NUMERO SECRETO',num_Secreto)
}
    



