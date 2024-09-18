let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generar(){
 let numeroDigitado = parseInt (cantidad.value);

    if (numeroDigitado < 8){
        alert("la cantidad de caracteres tiene que ser mayor que 8");
    }
let password = ' ';
for(let i= 0; i < numeroDigitado; i++ ){

let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
console.log(caracterAleatorio);

password+=caracterAleatorio;

}

contrasena.value = password;
validarContrasena(password);

}

function borrar(){
    let borrar= document.getElementById('borrar');
    contrasena.value=" ";
    cantidad.value=" ";

}
function validarContrasena(password) {
    const esFuerte = password.length >= 8 &&
                     /[A-Z]/.test(password) && 
                     /[a-z]/.test(password) && 
                     /[0-9]/.test(password) && 
                     /[_\-?@/!%^*]/.test(password);

    if (esFuerte) {
        contrasena.style.border = '7px solid green'; 
    } else {
        contrasena.style.border = '7px solid red'; 
    }
}