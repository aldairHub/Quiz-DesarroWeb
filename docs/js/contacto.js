const btnEnviar = document.getElementById('btnEnviar');
const mensajeExito = document.getElementById('mensajeExito');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validarCampo(campo) {
    if (campo.value.trim() === '') {
        campo.classList.add('is-invalid');
        return false;
    } else {
        campo.classList.remove('is-invalid');
        return true;
    }
}

function validarEmailCampo() {
    if (email.value.trim() === '' || !validarEmail(email.value)) {
        email.classList.add('is-invalid');
        return false;
    } else {
        email.classList.remove('is-invalid');
        return true;
    }
}

nombre.addEventListener('input', () => validarCampo(nombre));
email.addEventListener('input', () => validarEmailCampo());
asunto.addEventListener('change', () => validarCampo(asunto));
mensaje.addEventListener('input', () => validarCampo(mensaje));

btnEnviar.addEventListener('click', () => {
    const nombreValido = validarCampo(nombre);
    const emailValido = validarEmailCampo();
    const asuntoValido = validarCampo(asunto);
    const mensajeValido = validarCampo(mensaje);

    if (nombreValido && emailValido && asuntoValido && mensajeValido) {
        mensajeExito.classList.add('mostrar');

        nombre.value = '';
        email.value = '';
        asunto.value = '';
        mensaje.value = '';

        setTimeout(() => {
            mensajeExito.classList.remove('mostrar');
        }, 3000);
    }
});