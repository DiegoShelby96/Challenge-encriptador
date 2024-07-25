document.getElementById('palabraParaEncriptar').addEventListener('input', function(event) {
    this.value = this.value.replace(/[^a-z\s]/g, '');  
});

function mostrarElementosDerecha() {
    const elementos = document.querySelectorAll('.derecha-site .oculto');
    elementos.forEach(elemento => {
        elemento.classList.remove('oculto');
    });
}

function ocultarImagen() {
    var imagen = document.getElementById('imagenVacia');
    var titulo = document.getElementById('tituloImagen');
    var parrafo = document.getElementById('parrafoImagen');

    imagen.style.display = 'none';
    titulo.style.display = 'none';
    parrafo.style.display = 'none';
}

function encriptar() {
    console.log('Encriptar función llamada');
    var texto = document.getElementById('palabraParaEncriptar').value;
    var resultadoEncriptado = document.getElementById('resultadoEncriptado');

    if (texto === '') {
        return;
    }

    var textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    resultadoEncriptado.value = textoEncriptado;
    resultadoEncriptado.style.display = 'block'; 
    resultadoEncriptado.style.backgroundImage = 'none';

    mostrarElementosDerecha(); 
    ocultarImagen(); 
}

function desencriptar() {
    console.log('Desencriptar función llamada');
    var texto = document.getElementById('palabraParaEncriptar').value;
    var resultadoEncriptado = document.getElementById('resultadoEncriptado');

    if (texto === '') {
        return;
    }

    var textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    resultadoEncriptado.value = textoDesencriptado;
    resultadoEncriptado.style.display = 'block'; 
    resultadoEncriptado.style.backgroundImage = 'none';

    mostrarElementosDerecha(); 
    ocultarImagen(); 
}

function copiar() {
    var resultadoEncriptado = document.getElementById('resultadoEncriptado');
    resultadoEncriptado.select();
    document.execCommand('copy');
}
