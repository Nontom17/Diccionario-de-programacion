function cambiarsesion(boton){

    boton.innerText = "Cerrar sesión";

}

function ocultar(boton) {

    // completa aqui
}

function megusta(titulo, idcontador) {

    alert("Te gustó la definición: " + titulo);

    let contador = document.getElementById(idcontador);
    contador.innerText = Number(contador.innerText) + 1;

}



