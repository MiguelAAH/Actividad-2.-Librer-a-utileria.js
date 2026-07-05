

https://github.com/user-attachments/assets/ed613523-29c8-4c33-b235-698f71a156ad

# Actividad-2.-Librer-a-utileria.js
librería JS funcional  que valida correos, solo texto, longitud, edad, contraseña y verificar misma contraseña, CURP

* **Nombre:** Miguel Alberto Alonso Heredia
* **Profesora:** Martinez Nieto Adelina
* **Grupo:** 7SE


Esta librería proporciona funciones en JavaScript para validación de datos en formularios, tales como datos de acceso lo que seria nombre, contraseñas, datos de comunicación por ejemplo celulares y correos y datos de identidad oficial como la CURP. 


## Instalación

Para utilizar esta librería en cualquier documento HTML, basta con descargar el archivo `utileria.js` e incluir la etiqueta `<script>` apuntando a su ubicación dentro de la sección `<head>` de tu proyecto:

```html
<script src="js/utileria.js"></script>
```

## 1. Validación de Correo Electrónico:
```
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
```
<img width="537" height="138" alt="image" src="https://github.com/user-attachments/assets/d85f8a4a-d545-4659-b768-a94f2f0a272a" />
<img width="536" height="155" alt="image" src="https://github.com/user-attachments/assets/976edb0c-7233-44a0-8dd5-59e444142872" />




## 2. Validación de Longitud
```
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
```
<img width="530" height="140" alt="image" src="https://github.com/user-attachments/assets/fa7f1187-c283-4275-a2da-848c5d0c1c6d" />
<img width="547" height="176" alt="image" src="https://github.com/user-attachments/assets/7806f686-dc82-425c-840f-ae305061db43" />


## 3. Validación de Solo letras mayusculas
```
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
```
<img width="572" height="167" alt="image" src="https://github.com/user-attachments/assets/332f70ea-767a-4de4-80b1-4b0512118ca6" />

<img width="547" height="148" alt="image" src="https://github.com/user-attachments/assets/02d07bda-58e3-4b1e-bbf5-b124d383730a" />


## 4. Validación de Edad y mayor de edad
```
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
```
<img width="541" height="166" alt="image" src="https://github.com/user-attachments/assets/08738099-b053-44b4-9fd2-75e177cc06cc" />
<img width="531" height="113" alt="image" src="https://github.com/user-attachments/assets/7c20ea69-0ce3-4733-93f1-5af0525c8821" />
<img width="497" height="266" alt="image" src="https://github.com/user-attachments/assets/4a0b82ed-d686-4f1a-a656-ffb5c1ecbe25" />


## 5. Función Validación contraseña
```
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
```
<img width="533" height="152" alt="image" src="https://github.com/user-attachments/assets/808ca676-e580-47bd-a9b8-2da68cd03b4a" />
<img width="545" height="161" alt="image" src="https://github.com/user-attachments/assets/8da2ae8c-eecc-4d51-a9d8-f1b0b515b9d7" />


## 6. Validar Curp
```
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
```
<img width="545" height="163" alt="image" src="https://github.com/user-attachments/assets/36e157af-d623-4cf1-be19-bd7bee9dd047" />
<img width="540" height="142" alt="image" src="https://github.com/user-attachments/assets/09b20cad-d0e8-484f-8b59-58e44f10a2f8" />
<img width="527" height="158" alt="image" src="https://github.com/user-attachments/assets/4a8b3d44-c134-460c-88ea-d562170c2043" />


##7. Valifación de Verificar Contraseña
```
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
```
<img width="532" height="333" alt="image" src="https://github.com/user-attachments/assets/1c38e402-de92-4153-b808-f96fa7e5ed00" />
<img width="540" height="323" alt="image" src="https://github.com/user-attachments/assets/5c47ae58-2b34-4ec5-a8bf-f07ac2236a9c" />

## Video de explicación

https://github.com/user-attachments/assets/5d46abdf-aab2-410d-91cd-c1542ffc354f

