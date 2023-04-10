console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");
const disparo = document.getElementById("disparo");

//-- Definir el tamaño del canvas
canvas.width = 870;
canvas.height = 400;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");
var velp = 0;
var ang = 0;

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
//----------------IMAGENES------------------
var obj = document.getElementById("objetivo");
var caparazon = document.getElementById("caparazon");
//-----------------SONIDOS--------------------
const audio = new Audio("lose.mp4");

//-----------------RANGOS---------------------
range.onchange = () => {
  range_angulo.innerHTML = range.value;
  console.log(range.value)
  ang = range.value;
}

range2.onchange = () => {
  range_velocidad.innerHTML = range2.value;
  console.log(range2.value)
  velp = range2.value;
}
//------- RANDOM--------------------

function CrearNumSecreto(min, max) {
  num1 = Math.random() * (max - min) + min;
}

//-- Coordenadas iniciales del proyectil
let xop = 5;
let yop = 345;
let xp = xop;
let yp = yop;
//-- Coordenadas iniciales del objetivo
let xomin = 200;
let xomax = 770;
CrearNumSecreto(xomin, xomax);
let xo = num1; //getRandomXO(xomin,xomax);
let yo = 370;
//tiro parabolico
let g = 9.8; //Aceleración de gravedad
let t = 0; //Se inicia el tiempo a t = 0

//------------pintar el proyectil--------------------
function dibujarP(x,y,lx,ly,color) {

  //-- Pintando el proyectil
  ctx.beginPath();

  ctx.drawImage(caparazon,x,y-20,80,80);
  
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
  ctx.drawImage(obj,x,y-40,80,80);
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
 //
  Colision(x,xo,y,yo);
  //-- 4) Repetir
  requestAnimationFrame(lanzar);
}

//------------------------------------------------
//Detecto colisiones con la base o los asteroides
function Colision(xp,xo,yp,yo){
  if (y < 250){
    audio.play();
    alert("perdiste ");
    location.reload();
    dibujarO(xo,yo); 
    dibujarP(xop, yop, 50, 50, "green"); 
  }
  if (xp +50 > xo && xp < xo + 40 && yp + 50 > yo && yp < yo + 40){
    alert("Ganaste , felicidades");
    location.reload();
    dibujarO(xo,yo); 
    dibujarP(xop, yop, 50, 50, "green"); 
  }

}
//-- Función de retrollamada del botón de disparo
disparo.onclick = () => {
  lanzar();
  crono.start();
}

iniciar.onclick = () => {
  location.reload();
  dibujarO(xo,yo); 
  dibujarP(xop, yop, 50, 50, "green"); 
}