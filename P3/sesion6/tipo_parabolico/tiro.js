console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 500;
canvas.height = 200;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//-- Coordenadas del objeto
let x = 0;
let y = 10;

//-- Velocidades del objeto
let velx = 8;
let vely = 1.2;
let t = 0;
let g = 9.8;
//-- Función principal de animación
function update() 
{
  console.log("test");
  //-- Algoritmo de animacion:
  //-- 1) Actualizar posicion del  elemento
  //-- (física del movimiento rectilineo uniforme)

   //-- Condición de rebote en extremos del canvas ---
  if(x + velx > (canvas.width-20) || x + velx < 0) {
      velx = -velx;
  }
  
  if(y + vely > (canvas.height-20) || y + vely < 0) {
      vely = -vely;
  }

  if (canvas.height - y > canvas.height || x > canvas.width || x < 0) {
    t = 0;
  }
  //-- Actualizar la posición
  vx = velx * Math.cos(((60)* Math.PI) / 180); //Se calcula posición x del proyectil
  vy =  vely * Math.sin(((60) * Math.PI) / 180) ; //Se calcula posición y del proyectil

  x = x + vx * t;
  y = y + vy * t - 0.5 * g * t * t;
  t += 0.01;
  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Dibujar los elementos visibles
  ctx.beginPath();
    ctx.rect(x, (canvas.height - 50) - y, 20, 20);

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