function cifrarMensaje() {
    // esto tiene que ser el mensaje del primer textarea, toma el valor y lo guarda en mensajeSinEncriptar
    let mensajeTextarea = document.getElementById("encriptar");
    let mensajeSinEncriptar = mensajeTextarea.value;

    // asi queda el mensaje encriptado
    let mensajeEncriptado = "";

    let abecedario = "abcdefghijklmnopqrstuvwxyzab";
    let letraMensaje = "";
    let letraAbecedario = "";

    for (let o = 0; o < mensajeSinEncriptar.length; o++) {
        letraMensaje = mensajeSinEncriptar[o];
        // si hay un espacio
        if (letraMensaje == " ") {
            letraAbecedario = " ";
            mensajeEncriptado += " ";
        } else {
            for (let i = 0; i < abecedario.length - 2; i++) {
                letraAbecedario = abecedario[i];
                if (letraMensaje === letraAbecedario) {
                    letraAbecedario = abecedario[i + 2];
                    mensajeEncriptado = mensajeEncriptado + letraAbecedario;
                }
            }
            // valorInvalido(letraMensaje, letraAbecedario)
        }
    }


    // poner el valor del mensaje encriptado dentro del segundo textarea
    let segundoTextarea = document.getElementById("desencriptar");
    segundoTextarea.value = mensajeEncriptado;


    eliminarImagen();
}


function copiarMensaje() {
    let segundoTextarea = document.getElementById("desencriptar");
    segundoTextarea.select()
    document.execCommand('copy');
}


function descifrarMensaje() {
    let mensajeTextarea = document.getElementById("encriptar");
    let mensajeSinEncriptar = mensajeTextarea.value;
    let mensajeEncriptado = "";
    let abecedario = "zyxwvutsrqponmlkjihgfedcbazy";
    let letraMensaje = "";
    let letraAbecedario = "";

    for (let o = 0; o < mensajeSinEncriptar.length; o++) {
        letraMensaje = mensajeSinEncriptar[o];
        if (letraMensaje == " ") {
            letraAbecedario = " ";
            mensajeEncriptado += " ";
        } else {
            for (let i = 0; i < abecedario.length - 2; i++) {
                letraAbecedario = abecedario[i];
                if (letraMensaje === letraAbecedario) {
                    letraAbecedario = abecedario[i + 2];
                    mensajeEncriptado = mensajeEncriptado + letraAbecedario;
                }
            }
        }
    }
    let segundoTextarea = document.getElementById("desencriptar");
    segundoTextarea.value = mensajeEncriptado;

    eliminarImagen();
}

function eliminarImagen() {
    let imagenMensajeEncriptado = document.querySelector(".mensaje-encriptado");
    imagenMensajeEncriptado.style.backgroundImage = "none";
}

function valoresInvalidos() {
    let abecedario = "abcdefghijklmnopqrstuvwxyzab";
    let letraMensaje = "";
    let letraAbecedario = "";
    for (let o = 0; o < mensajeSinEncriptar.length; o++) {
        letraMensaje = mensajeSinEncriptar[o];
        for (let i = 0; i < abecedario.length - 2; i++) {
            letraAbecedario = abecedario[i];
            if (letraMensaje != letraAbecedario) {
                prompt("Introdució valores inválidos");
                break;
            }
        }
    }
}

// function valorInvalido(letraMensaje, letraAbecedario){
//     if (letraMensaje != letraAbecedario) {
//         alert("Introdució valores inválidos");
//     }
// }
