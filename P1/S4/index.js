console.log('Ejecuntando JS...');

const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');
const texto = document.getElementById('texto');

boton1.onclick = () => {
    console.log("click desde el boton 1")
    texto.innerHTML +="1";
}

boton2.onclick = () => {
    console.log("click desde el boton 1")
    texto.innerHTML +="2";
}