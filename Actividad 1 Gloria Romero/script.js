// Vamos a replicar un unicio de sesión.
function iniciarSesion () {
    //Definición de las credenciales correctas
    const usuarioCorrecto = "gloria";
    const claveCorrecta = "glo123!";
    
    // Inicialización de variables para las credenciales ingresadas por el usuario
    let usuario = " ";
    let clave = " ";
    
    // Pedimos el usuario
    while (true) {
        usuario = prompt("Ingrese su nombre de usuario para continuar:");
        if (usuario === usuarioCorrecto) {
            console.log(usuario + " es un usuario registrado en nuestra bbdd.");
            alert("Usuario correcto");
            break; // Sale del bucle si el usuario es correcto
    
        } else {
            console.log(usuario + " no aparece en nuestra base de datos.");
            alert ("Usuario incorrecto, vuelva a intentarlo.")
        }
    }
    
    // Una vez el usuario es correcto, pedimos la contraseña. Para lo que tenemos 3 intentos        
    for (let i = 0; i < 3; i++) {
        let clave = prompt("Ingrese su clave para iniciar sesión:");
        if (clave === claveCorrecta) {
            console.log("Clave correcta para " + usuarioCorrecto);
            alert("Hola " + usuarioCorrecto + "!. Ha iniciado sesión con éxito.")
            break; // Sale del bucle si la contraseña es correcta
        } else {
            console.log("Contraseña incorrecta para usuario " + usuarioCorrecto);
            alert("Contraseña incorrecta. Intento " + (i + 1) + " de 3.");
        }
        if (i === 2) {
            console.log("Bloqueado el acceso a " + usuarioCorrecto + " por superar los 3 intentos permitidos.")
            alert("Acceso bloqueado. Ha superado el número de intentos permitidos.");
        }
    }
}

iniciarSesion();
