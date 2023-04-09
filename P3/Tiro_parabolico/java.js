console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");
const disparo = document.getElementById("disparo");

//-- Definir el tamaño del canvas
canvas.width = 600;
canvas.height = 400;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//-- Velocidad horizontal del objeto

//-------------------DESLIZADORES------------------------------------
const range = document.getElementById("range");
const range2 = document.getElementById("range2");
const angulo = document.getElementById("angulo");
const velocidad = document.getElementById("velocidad");
const iniciar = document.getElementById("iniciar");
const range_velocidad = document.getElementById("range_velocidad");
const range_angulo = document.getElementById("range_angulo");

const gui = {
  display : document.getElementById("display"),
  start : document.getElementById("start"),
  stop : document.getElementById("stop"),
  reset : document.getElementById("reset")
}
const crono = new Crono(gui.display);

//-----------------RANGOS---------------------

range.onchange = () => {
  range_angulo.innerHTML = range.value;
  console.log(range.value)
}

range2.onchange = () => {
  range_velocidad.innerHTML = range2.value;
  console.log(range2.value)
  
}
//-------Velocidad del proyectil----------------
let velp = range2.value;
console.log(velp)
let ang = range.value;

//------- RANDOM--------------------

function CrearNumSecreto(min, max) {
  num1 = Math.random() * (max - min) + min;
}
CrearNumSecreto(121, 550);
console.log('ñeñeñeñeñ ', num1);




//-- Coordenadas iniciales del proyectil
let xop = 5;
let yop = 345;
let xp = xop;
let yp = yop;
//-- Coordenadas iniciales del objetivo
let xomin = 200;
let xomax = 770;
let xo = num1; //getRandomXO(xomin,xomax);
let yo = 370;
//tiro parabolico
let g = 9.8; //Aceleración de gravedad
let t = 0; //Se inicia el tiempo a t = 0

//pintar el proyectil
function dibujarP(x,y,lx,ly,color) {

  //-- Pintando el proyectil
  ctx.beginPath();

  //-- Definir un rectángulo de dimensiones lx x ly,
  ctx.rect(x, y, lx, ly);

  //-- Color de relleno del rectángulo
  ctx.fillStyle = color;

  //-- Mostrar el relleno
  ctx.fill();

  //-- Mostrar el trazo del rectángulo
  ctx.stroke();

  ctx.closePath();
}
//-- función para pintar el objetivo
function dibujarO(x,y) {

  //-- Pintando el objetivo
  ctx.beginPath();

  //-- Dibujar un circulo: coordenadas x,y del centro
  //-- Radio, Angulo inicial y angulo final
  ctx.arc(x, y, 25, 0, 2 * Math.PI);
  ctx.strokeStyle = 'blue';
  ctx.lineWidth = 2;
  ctx.fillStyle = 'red';

  //-- Dibujar el relleno
  ctx.fill()    

  //-- Dibujar el trazo
  ctx.stroke();

  ctx.closePath();
}


//-- Dibujar el objetivo
dibujarO(xo,yo); 
//-- Dibujar el proyectil
dibujarP(xop, yop, 50, 50, "green"); // Pintar el proyectil


function lanzar() {
  //-- 1) Actualizar posición de los elementos
  xp = xp + velp*0.1;

  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Pintar los elementos en el canvas
  dibujarO(xo,yo); // Pintar el objetivo

  vx = (velp) * Math.cos((ang* Math.PI) / 180); //Se calcula posición x del proyectil
  vy =  (velp) * Math.sin((ang * Math.PI) / 180) ; //Se calcula posición y del proyectil
  x = xop + vx * t;
  y = yop + vy * t - 0.5 * g * t * t;
  t += 0.2;

  dibujarP(x, (canvas.height+293)-y, 50, 50, "green"); // Pintar el proyectil
 
  //-- 4) Repetir
  requestAnimationFrame(lanzar);
}

//-- Función de retrollamada del botón de disparo
disparo.onclick = () => {
  lanzar();
  crono.start();
}

iniciar.onclick = () => {
  location.reload();
}