function validarcorreo() {
    var correo = document.getElementById('correo').value;
    var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esvalido = expReg.test(correo);

    var mensajeError = document.getElementById('error-correo');
    var mensajeExito = document.getElementById('exito-correo');

    if (esvalido) {
        mensajeError.innerText = "";
        mensajeExito.innerText = "Correo válido";
    } else {
        mensajeError.innerText = "Correo inválido";
        mensajeExito.innerText = "";
    }
}

function validarlongitud() {
    let cadena = document.getElementById("celular").value;
    let arreglo = cadena.split('').map(Number);
    var mensajeError = document.getElementById('error-celular');
    var mensajeExito = document.getElementById('exito-celular');
    if (arreglo.length != 10) {
        mensajeError.innerText = "El número debe tener 10 dígitos";
        mensajeExito.innerText = "";
    } else {
        mensajeError.innerText = "";
        mensajeExito.innerText = "Número válido";
    }
}

function validarsololetras() {
    var nombre = document.getElementById('nombre').value;
    var expReg = /^[A-ZÁÉÍÓÚÑ ]+$/;
    var esvalido = expReg.test(nombre);
    var mensajeError = document.getElementById('error-nombre');
    var mensajeExito = document.getElementById('exito-nombre');
    if (esvalido) {
        mensajeError.innerText = "";
        mensajeExito.innerText = "Nombre válido";
    } else {
        mensajeError.innerText = "El nombre debe tener solo letras mayusculas";
        mensajeExito.innerText = "";
    }
}

function extraerEdad() {
    var fechaSeleccionada = document.getElementById('edad').value;
}

function validaredad() {
    var fechaNacimientoTexto = document.getElementById('edad').value;
    if (fechaNacimientoTexto === "") {
        console.log("Por favor, selecciona una fecha.");
        return;
    }

    var fechaNacimiento = new Date(fechaNacimientoTexto);
    var fechaActual = new Date();

    var edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    var diferenciaMeses = fechaActual.getMonth() - fechaNacimiento.getMonth();
    if (diferenciaMeses < 0 || (diferenciaMeses === 0 && fechaActual.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }
    if (edad < 18) {
        document.getElementById('error-edad').innerText = "Debes ser mayor de edad.";
    } else {
        document.getElementById('error-edad').innerText = "";
    }
    var modal = document.getElementById('miModal');
    var textoEdad = document.getElementById('texto-modal-edad');
    textoEdad.innerText = "Tu edad calculada es: " + edad + " años.";
    modal.style.display = "flex";
}
function cerrarModal() {
    document.getElementById('miModal').style.display = "none";
}

function contraseña() {
    const longitudminima = 8;
    const tienemyuscula = /[A-Z]/;
    const tieneminuscula = /[a-z]/;
    const tienenuemro = /[0-9]/;
    const tiensimbolo = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

    var contraseña = document.getElementById("contraseña").value;
    var confirmar = document.getElementById("confirmar").value;
    var mensajeError = document.getElementById('error-contraseña');
    var mensajeExito = document.getElementById('exito-contraseña');

    if (!tienemyuscula.test(contraseña)) {
        mensajeError.innerText = "La contraseña debe tener al menos una mayúscula";
        mensajeExito.innerText = "";
    }
    else if (!tieneminuscula.test(contraseña)) {
        mensajeError.innerText = "La contraseña debe tener al menos una minúscula";
        mensajeExito.innerText = "";
    }
    else if (!tienenuemro.test(contraseña)) {
        mensajeError.innerText = "La contraseña debe tener al menos un número";
        mensajeExito.innerText = "";
    }
    else if (!tiensimbolo.test(contraseña)) {
        mensajeError.innerText = "La contraseña debe tener al menos un símbolo";
        mensajeExito.innerText = "";
    }
    else if (contraseña.length < longitudminima) {
        mensajeError.innerText = "La contraseña debe tener al menos 8 caracteres";
        mensajeExito.innerText = "";
    }
    else {
        mensajeError.innerText = "";
        mensajeExito.innerText = "Contraseña válida";
    }
}
function validarcurp() {
    const longitudminima = 18;
    var curp = document.getElementById("curp").value;
    var expReg = /^[A-Z]{4}\d{6}[HM][A-Z]{5}[A-Z0-9]\d$/;
    var mensajeError = document.getElementById('error-curp');
    var mensajeExito = document.getElementById('exito-curp');

    if (curp.length !== longitudminima) {
        mensajeError.innerText = "La CURP debe tener 18 caracteres";
        mensajeExito.innerText = "";
    } else if (!expReg.test(curp.toUpperCase())) {
        mensajeError.innerText = "CURP inválida";
        mensajeExito.innerText = "";
    } else {
        mensajeError.innerText = "";
        mensajeExito.innerText = "CURP válida";
    }
}
function validarconfirmarcontraseña() {
    var contraseña = document.getElementById("contraseña").value;
    var confirmar = document.getElementById("confirmar").value;
    var mensajeError = document.getElementById('error-confirmar');
    var mensajeExito = document.getElementById('exito-confirmar');
    if (contraseña !== confirmar) {
        mensajeError.innerText = "Las contraseñas no coinciden";
        mensajeExito.innerText = "";
    } else {
        mensajeError.innerText = "";
        mensajeExito.innerText = "Contraseña válida";
    }
}