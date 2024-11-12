const mostrarError = () => {
    console.log("Muestro mensaje");
}

function validarCorreo  (email){
    debugger;
    console.log (email.indexOf("@"))
    return (email.indexOf("@"));
}


//document.querySelector("#header_titulo").addEventListener('click', mostrarError);

//let nombre = prompt('¿Cuál es tu nombre?', );

//alert(`Bienvenido al hospital ${nombre} `);

//console.log(`Bienvenido al hospital ${nombre} `);

const email = prompt('Indicanos tu correo',);

alert(`Tu email es ${email}`);
console.log(`tu email es ${email}`);
console.log(validarCorreo(email));

//let telefono = prompt('Indicanos tu télefono', );

//alert(`Tu telefono es ${telefono}`);

console.log(`Tu telefono es ${telefono}`);



