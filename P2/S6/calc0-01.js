console.log("Ejecutando JS...");


//-- Elementos de la interfaz de la calculadora
display = document.getElementById("display")
boton1 = document.getElementById("boton1")
boton2 = document.getElementById("boton2")
boton3 = document.getElementById("boton3")
boton4 = document.getElementById("boton4")
boton5 = document.getElementById("boton5")
boton6 = document.getElementById("boton6")


suma = document.getElementById("suma")
igual = document.getElementById("igual")
clear = document.getElementById("clear")

//-- Funciones de retrollamada de los botones
//-- Cada vez que se aprieta un botón se actúa
//-- sobre la cadena: añadiendo digito, operador +
//-- poniendo a cero o evaluando la expresión

// -- Insertar digito 1
boton1.onclick = () => {
  display.innerHTML += "1";
}

//-- Insertar digito 2
boton2.onclick = () => {
  display.innerHTML += "2";
}
boton3.onclick = () => {
  display.innerHTML += "3";
}
boton4.onclick = () => {
  display.innerHTML += "4";
}
boton5.onclick = () => {
  display.innerHTML += "5";
}
boton6.onclick = () => {
  display.innerHTML += "6";
}

      
//-- Insertar simbolo de sumar
suma.onclick = () => {
  display.innerHTML += "+";
}

restar.onclick = () => {
    display.innerHTML += "-";
}

multiplicar.onclick = () => {
    display.innerHTML += "*";
}

//-- Evaluar la expresion
igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);  //eval, evaluar, le pasamos una expresion en cadena y devuelve un numero.
}

//-- Poner a cero la expresion
clear.onclick = () => {
  display.innerHTML = "0";
}