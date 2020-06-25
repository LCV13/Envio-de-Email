//VARIABLES
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar-mail');
const resetBtn = document.getElementById('resetBtn');







//EVENT LISTENER
eventListeners();

function eventListeners(){
    //Inicio de la aplicacion y deshabilitar boto de envio
    document.addEventListener('DOMContentLoaded', inicioApp);

    //Validar formulario
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    //Boton de enviar en el submit
    formularioEnviar.addEventListener('submit', enviarEmail);

    //Boton de Reset
    resetBtn.addEventListener('click', resetFormulario);

}





//FUNCIONES

function inicioApp(){
    //Deshabilita el envio
    btnEnviar.disabled = true;
}










//Valida que los campos tengan algo escrito
function validarCampo(){

//Se valida la longitud de los campos y que no esten vacios
    validarLongitud(this);

//Validar unicamente el email
    if(this.type == 'email'){
        validarEmail(this);
    }

    let errores = document.querySelectorAll('.errores');
    if(email.value !== '' && asunto.value !== '' && mensaje.value !== ''){
        if(errores.length == 0){
        btnEnviar.disabled = false;
        }
    }
}

//Resetear el formulario
function resetFormulario(e){
formularioEnviar.reset();
    e.preventDefault();
}

//Cuando se envia el correo
function enviarEmail(e){
    //Spinner al presionar Enviar
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';
    
    //GIF que envia email
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';

    //ocultar spinner y mostrar gif de enviado

    setTimeout(function(){
        spinnerGif.style.display = 'none';
        document.querySelector('#loaders').appendChild(enviado);

        setTimeout(function(){
            enviado.remove();
            formularioEnviar.reset();
        }, 5000);
    }, 3000);
    e.preventDefault();
}


function validarLongitud(campo){
    if(campo.value.length > 0 ){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

function validarEmail(campo){
    const mensaje = campo.value;
    if(mensaje.indexOf('@') !== -1){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}