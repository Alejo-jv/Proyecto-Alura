// Diccionario de encriptación
const encrypt = text => {
    return text
    .replace(/e/g, "efe")
    .replace(/i/g, "ipi")
    .replace(/a/g, "ac")
    .replace(/o/g, "ort")
    .replace(/u/g, "uno")
}

const decrypt = text => {
    return text
    .replace(/efe/g, "e")
    .replace(/ipi/g, "i")
    .replace(/ac/g, "a")
    .replace(/ort/g, "o")
    .replace(/uno/g, "u")
}

const pattern = /[A-ZÁÉÍÓÚÜÑáéíóúüñ]/;

function encriptar(e) {
    e.preventDefault();

    // Encriptar y mostrar en pantalla
    let text = document.getElementById('mensaje').value;
    // Validar
    if (pattern.test(text) == true) {
        alterta();
        sinResultado();
        return;
    }
    // Validar si hay texto para encriptar
    if (text != '') {
        text = encrypt(text);
        resultado(text);
    } else {
        sinResultado();
    }
}

function desencriptar(e) {
    e.preventDefault();

    // Encriptar y mostrar en pantalla
    let text = document.getElementById('mensaje').value;
    // Validar
    if (pattern.test(text) == true) {
        alterta();
        sinResultado();
        return;
    }
    // Validar
    if (text != '') {
        text = decrypt(text);
        resultado(text);
    } else {
        sinResultado();
    }
}

// Funcion para copiar el mensaje al portapapeles
async function copiarPortapapeles() {
    let text = document.getElementById('texto').innerHTML;
    try {
        await navigator.clipboard.writeText(text);
        // mostrar mensaje de copiado
        console.log("Texto copiado al portapapeles");
    } catch (err) {
        // mostrar mensaje de no copiado
        console.error("Error al copiar texto al portapapeles:", err);
    }
}

function resultado(text) {
    document.getElementById('texto').innerHTML = text;
    document.getElementById('vacio').classList.add('disable');
    document.getElementById('resultado').classList.remove('disable');
}

function sinResultado() {
    document.getElementById('vacio').classList.remove('disable');
    document.getElementById('resultado').classList.add('disable');
}

function alterta() {
    document.getElementById('alertText').classList.remove('disable');
    setTimeout(function() {
        document.getElementById('alertText').classList.add('disable');
    }, 3000);
}