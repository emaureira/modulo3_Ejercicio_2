const mensaje = () => {
    let titulo = document.querySelector("title");
    console.log("cargado el dom de la página con titulo: " + titulo.text);
}
const alerta = () =>{

    console.log(alert("el contenido que se muestra en un alert"));

}

const validar = (nombre) => {
    console.log("aca en validar: " + nombre);
}

let titulo = document.querySelector("title").text;
console.log("aca muestro el titulo" + titulo);
const var_titulo = "Contacto";

if (titulo.includes(var_titulo)){
    let nombre = prompt("Ingresa tu nombre");
    validar(nombre);

}
else{
    console.log("dentro del else");
}

document.addEventListener("DOMContentLoaded", mensaje, false);

document.querySelector("h4").addEventListener("click", alerta);

document.getElementById("main_content").addEventListener("click", alerta);



window.mensaje = mensaje;
window.alerta = alerta;
