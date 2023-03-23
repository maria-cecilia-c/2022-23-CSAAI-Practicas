console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 400;
canvas.height = 200;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//-- Coordenadas del objeto
let x = 0;
let y = 10;

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

var velx = 0;
//-- Función principal de animacion
function update() 
{
  console.log("test");
  x = x +  velocidad.innerHTML ;

  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Dibujar los elementos visibles
  ctx.beginPath();
    ctx.rect(x, y, 20, 20);

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