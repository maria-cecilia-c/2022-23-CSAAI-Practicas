console.log("Ejecutando JS...");


//-- Elementos de la interfaz de la calculadora
display = document.getElementById("display")
boton1 = document.getElementById("boton1")
boton2 = document.getElementById("boton2")
boton3 = document.getElementById("boton3")
boton4 = document.getElementById("boton4")
boton5 = document.getElementById("boton5")
boton6 = document.getElementById("boton6")
boton7 = document.getElementById("boton7")
boton8 = document.getElementById("boton8")
boton9 = document.getElementById("boton9")



suma = document.getElementById("suma")
igual = document.getElementById("igual")
clear = document.getElementById("clear")

//-- Funciones de retrollamada de los botones
//-- Cada vez que se aprieta un botón se actúa
//-- sobre la cadena: añadiendo digito, operador +
//-- poniendo a cero o evaluando la expresión

// -- Insertar digito 1
boton1.onclick = () => {
  display.innerHTML += boton1.value;  //quitamos los numeros magicos
}
boton2.onclick = () => {
  display.innerHTML += boton2.value;
}
boton3.onclick = () => {
  display.innerHTML += boton3.value;
}
boton4.onclick = () => {
  display.innerHTML += boton4.value;
}
boton5.onclick = () => {
  display.innerHTML += boton5.value;
}
boton6.onclick = () => {
  display.innerHTML += boton6.value;
}
boton7.onclick = () => {
  display.innerHTML += boton7.value;
}
boton8.onclick = () => {
  display.innerHTML += boton8.value;
}
boton9.onclick = () => {
  display.innerHTML += boton9.value;
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