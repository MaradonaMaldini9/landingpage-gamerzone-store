// Validaciones del formulario de contacto - GamerZone Store

document.addEventListener('DOMContentLoaded', function () {

  const form = document.getElementById('formContacto');
  const confirmacion = document.getElementById('confirmacionEnvio');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    let esValido = true;

    // Campo: Nombre
    const nombre = document.getElementById('nombre');
    const errorNombre = document.getElementById('errorNombre');
    if (nombre.value.trim() === '') {
      errorNombre.textContent = 'Ingresa tu nombre.';
      nombre.classList.add('error');
      esValido = false;
    } else {
      errorNombre.textContent = '';
      nombre.classList.remove('error');
    }

    // Campo: Correo
    const correo = document.getElementById('correo');
    const errorCorreo = document.getElementById('errorCorreo');
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (correo.value.trim() === '') {
      errorCorreo.textContent = 'Ingresa tu correo.';
      correo.classList.add('error');
      esValido = false;
    } else if (!regexCorreo.test(correo.value.trim())) {
      errorCorreo.textContent = 'Ingresa un correo válido.';
      correo.classList.add('error');
      esValido = false;
    } else {
      errorCorreo.textContent = '';
      correo.classList.remove('error');
    }

    // Campo: Tipo de consulta
    const tipoConsulta = document.getElementById('tipoConsulta');
    const errorTipo = document.getElementById('errorTipo');
    if (tipoConsulta.value === '') {
      errorTipo.textContent = 'Selecciona un tipo de consulta.';
      tipoConsulta.classList.add('error');
      esValido = false;
    } else {
      errorTipo.textContent = '';
      tipoConsulta.classList.remove('error');
    }

    // Campo: Mensaje
    const mensaje = document.getElementById('mensaje');
    const errorMensaje = document.getElementById('errorMensaje');
    if (mensaje.value.trim() === '') {
      errorMensaje.textContent = 'Escribe tu mensaje.';
      mensaje.classList.add('error');
      esValido = false;
    } else {
      errorMensaje.textContent = '';
      mensaje.classList.remove('error');
    }

    // Resultado final
    if (esValido) {
      confirmacion.textContent = 'Tu mensaje fue enviado correctamente. Nos pondremos en contacto pronto.';
      form.reset();
    } else {
      confirmacion.textContent = '';
    }
  });

});
