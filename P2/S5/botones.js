console.log("Ejecutando JS...");

const botones = document.getElementsByClassName("digito")  //llamamos por la clase

//-- Función de retrollamada de los botones
//-- botones de la clase dígito
function digito(value) //función donde usamos la clase digito 
{
  console.log("Valor: " + value);
}

for (let boton of botones) { //bucle para asignar la retro llamada

  //-- Establecer la funcion de llamada del boton i
  //-- El parámetro ev.target contiene el boton
  //-- que ha recibido el click
  boton.onclick = (ev) => {
    digito(ev.target.value)
  }
}