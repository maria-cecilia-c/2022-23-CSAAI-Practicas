console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 400;
canvas.height = 200;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//-- Velocidad horizontal del objeto

//-------------------DESLIZADORES------------------------------------
const range = document.getElementById("range");
const range2 = document.getElementById("range2");
const angulo = document.getElementById("angulo");
const velocidad = document.getElementById("velocidad");

range.oninput = () => {
    angulo.innerHTML = range.value;
}

range2.oninput = () => {
    velocidad.innerHTML = range2.value;
}

//------------------------------
//-- Coordenadas del objeto
let x = 0;
let y = 180;

//-- Velocidades del objeto
var velx = velocidad.innerHTML;
var vely = 0;

//-- Función principal de animacion
function update() 
{
    console.log("test");
    //-- Algoritmo de animacion:
    //-- 1) Actualizar posición del  elemento
    //-- (física del movimiento rectilineo uniforme)
  
     //-- Condición de rebote en extremos verticales del canvas
    if (x < 0 || x >= (canvas.width - 15) ) {
    
      velx = -velx;
    }
  
    //-- Condición de rebote en extremos horizontales del canvas
    if (y <= 0 || y > 80) {
      vely = -vely;
    }
  
    //-- Actualizar la posición
    x = x + velx;
    y = y + vely;
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Dibujar los elementos visibles
  ctx.beginPath();
    ctx.rect(x, y, 20, 20); //tamaño del cuadrado 

    //-- Dibujar
    ctx.fillStyle = 'red';

    //-- Rellenar
    ctx.fill();

    //-- Dibujar el trazo
    ctx.stroke()
    ctx.closePath();

  //-- 4) Volver a ejecutar update cuando toque
  requestAnimationFrame(update);
}

//-- ¡Que empiece la función!
update();