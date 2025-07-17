// boton flotante que lleva al inicio de pagina
function inicio() {
    window.scrollTo({
        top: 0,
    });
}
window.addEventListener('scroll', function () {
    const scrollInicio = document.querySelector('.inicio');
    if (window.scrollY > 200) {
        scrollInicio.style.display = 'block';
    } else {
        scrollInicio.style.display = 'none';
    }
});

// ocultar y mostrar la info en las cartas
function mostrarInfo(id, btn) {
    if (document.getElementById(btn).textContent === '+info') {
        document.getElementById(id).style.display = "block";
        document.getElementById(btn).textContent = '-info';
    } else {
        document.getElementById(id).style.display = 'none';
        document.getElementById(btn).textContent = '+info';
    }
}

// Mostrar Formulario
function mostrarForm() {
    document.querySelector(".btn-form").style.display = "none";
    document.querySelector(".form").style.display = "block";
}

// ---------------------------------- Formulario -------------------------------------
// funciones de comprobacion
function comprobarInput(id) {
    let inputForm = document.getElementById(id);
    inputForm.className = "form-control";
    inputForm.setAttribute("placeholder", "Tu respuesta");
    if (id == "inputMascota") {
        inputForm.className = "form-select";
        inputForm.setAttribute("placeholder", "");
    }
}
function revisarForm(inputText) {
    var inputForm = document.getElementById(inputText);
    let input = inputForm.value;
    if (input == "" || input == "Elige...") {
        inputForm.setAttribute("placeholder", "Ingresa una respuesta");
        inputForm.className = "error";
    }
}

btnTest.addEventListener("click", function () {
    // Datos del input
    var inputNombre = document.querySelector('#inputNombre').value;
    var inputApellido = document.querySelector('#inputApellido').value;
    var inputDireccion = document.querySelector('#inputDireccion').value;
    var inputCiudad = document.querySelector('#inputCiudad').value;
    var inputEdad = document.querySelector('#inputEdad').value;
    var inputTelefono = document.querySelector('#inputTelefono').value;
    var inputEmail = document.querySelector('#inputEmail').value;
    var inputMascota = document.querySelector('#inputMascota').value;
    var inputOcupacion = document.querySelector('#inputOcupacion').value;
    var inputDia = document.querySelector('#inputDia');
    var inputMes = document.querySelector('#inputMes');

    // variables
    var comprobante = document.querySelector("#comprobante");
    var fechaDia = inputDia.value;
    var fechaMes = inputMes.value;
    var valor = false;

    // array mes y dia
    const dias = {
        0: 'Domingo',
        1: 'Lunes',
        2: 'Martes',
        3: 'Miércoles',
        4: 'Jueves',
        5: 'Viernes',
        6: 'Sábado'
    }
    function mesNumero(nombreMes) {
        const meses = {
            'enero': 0,
            'febrero': 1,
            'marzo': 2,
            'abril': 3,
            'mayo': 4,
            'junio': 5,
            'julio': 6,
            'agosto': 7,
            'septiembre': 8,
            'octubre': 9,
            'noviembre': 10,
            'diciembre': 11
        };
        return meses[nombreMes.toLowerCase().trim()] || null;
    }
    function nroMes(numeroMes) {
        const numero = {
            0: 'enero',
            1: 'febrero',
            2: 'marzo',
            3: 'abril',
            4: 'mayo',
            5: 'junio',
            6: 'julio',
            7: 'agosto',
            8: 'septiembre',
            9: 'octubre',
            10: 'noviembre',
            11: 'diciembre'
        };
        return numero[numeroMes] || null;
    }

    // obtencion de calendario actual
    const fecha = new Date();
    const diaActual = fecha.getDate();
    const mesActual = fecha.getMonth();
    const añoActual = fecha.getFullYear();
    var fechaEncuentro = new Date(añoActual, mesNumero(fechaMes), fechaDia);
    var diaSemana = dias[fechaEncuentro.getDay()];

    // validacion de la fecha ingresada
    if (fechaDia >= diaActual && fechaDia <= 31 && mesNumero(fechaMes) == mesActual) {
        valor = true;
    } else {
        if (mesNumero(fechaMes) > mesActual) {
            valor = true;
            return
        }
        valor = false
    }

    // impresion del formulario
    if (valor == true && inputEdad >= 18 && inputNombre != "" && inputApellido != "" && inputCiudad != "" && inputDireccion != "" && inputEmail != "" && inputMascota != "Elige..." && inputTelefono != "" && inputOcupacion != "") {
        comprobante.innerHTML = `
            <div class="usuario">
                <h2>Solicitud de adopcion mascota</h2>
                <h4>Datos Personales</h4>
                <p>Nombre y Apellido: ${inputNombre} ${inputApellido}</p>
                <p>Direccion: ${inputDireccion}</p>
                <p>Localidad / Barrio: ${inputCiudad}</p>
                <p>Telefono: ${inputTelefono}</p>
                <p>Email: ${inputEmail}</p>
            </div>
            <div class="remitente">
                <h4>Pet Shop</h4>
                <p>Lugar de Encuentro: Av. Medrano 162 Cdad. Autónoma de Buenos Aires</p>
                <p>El solicitante esta interesado en adoptar un ${inputMascota}</p>
                <p>Turno el ${diaSemana} ${fechaDia} de ${fechaMes}</p>
                <button class="rounded-4 imprimir">Imprimir</button>
            </div>
        `;
        comprobante.style.display = "block";
        document.querySelector('.form').style.display = "none";
    } else if (fechaDia == "" && fechaMes == "" && inputEdad >= 18 && inputNombre != "" && inputApellido != "" && inputCiudad != "" && inputDireccion != "" && inputEmail != "" && inputMascota != "Elige" && inputTelefono != "" && inputOcupacion != "") {
        inputDia.setAttribute("placeholder", "Ingrese una fecha");
        inputDia.className = "error";
        inputMes.setAttribute("placeholder", "Ingrese una fecha");
        inputMes.className = "error";
    }
    else if (valor == false && inputEdad >= 18 && inputNombre != "" && inputApellido != "" && inputCiudad != "" && inputDireccion != "" && inputEmail != "" && inputMascota != "Elige" && inputTelefono != "" && inputOcupacion != "") {
        comprobante.style.display = "block";
        comprobante.innerHTML = `<p class="text-danger text-center align-items-center m-0 fw-bold">Ingrese una fecha valida como ${diaActual} de ${nroMes(mesActual)}</p>`;
    }
    else {
        comprobante.style.display = "block";
        comprobante.innerHTML = '<p class="text-danger text-center align-items-center m-0 fw-bold">No cumples con los requisitos</p>';
    }
});