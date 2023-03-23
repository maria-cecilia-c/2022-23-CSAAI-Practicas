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
let velx = 1;
//-------------------DESLIZADORES------------------------------------
const range = document.getElementById("range");
const angulo = document.getElementById("angulo");
const angulo2 = document.getElementById("angulo2");
const velocidad = document.getElementById("velocidad");
const velocidad2 = document.getElementById("velocidad2");


range.oninput = () => {
    angulo.innerHTML = range.value;
}

range.onchange = () => {
    angulo2.innerHTML = range.value;
}

range.oninput = () => {
    velocidad.innerHTML = range.value;
}

range.onchange = () => {
    velocidad2.innerHTML = range.value;
}
//------------------------------


//-- Función principal de animacion
function update() 
{
  console.log("test");
  x = x + velx;

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