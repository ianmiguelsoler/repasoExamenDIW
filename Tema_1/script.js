function verificarRespuesta(boton, respuestaCorrecta) {
    const explicacion = boton.parentElement.nextElementSibling;
    let mensaje;

    // Verificar si la respuesta es correcta y mostrar la explicación
    if (respuestaCorrecta === 'B') {
        mensaje = "Correcto: La percepción visual ayuda a captar y dirigir la atención del usuario en un diseño.";
        boton.style.backgroundColor = "green";
    } else {
        mensaje = "Incorrecto: La respuesta correcta es B. La percepción visual es clave para atraer la atención.";
        boton.style.backgroundColor = "red";
    }

    // Mostrar la explicación
    explicacion.textContent = mensaje;
    explicacion.style.display = "block";
}
