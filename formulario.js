let formulario = document.querySelector(".formulario");
let buton = document.getElementById("submit");
let inputNombre = document.querySelector("#name");
let inputApellido = document.querySelector("#apellido");
let inputContrasenia = document.querySelector("#contrasenia");
let inputCorreo = document.querySelector("#correo");
let checkInfo = document.querySelector("#check")

class usuario{
    constructor(nombre, apellido, contraseña, correo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.contraseña = contraseña;
        this.correo = correo;
    }
}

let usuariosRegistrados = []

buton.addEventListener("click", functionsubmit);


function functionsubmit () {
    usuariosRegistrados.push(new usuario(inputNombre.value, inputApellido.value, inputContrasenia.value, inputCorreo.value))
  
        
        if((inputNombre.value && inputContrasenia.value) != ""){
            usuariosRegistrados.forEach(usuario => {
            localStorage.setItem("nombre", inputNombre.value)
            localStorage.setItem("apellido", inputApellido.value)
            localStorage.setItem("contraseña", inputContrasenia.value)
            localStorage.setItem("correo", inputCorreo.value)})

            let iniciar = document.createElement("a");
            iniciar.setAttribute("href", "./formulario.html")
            iniciar.innerText = "Login"
            
            formulario.appendChild(iniciar)
            formulario.removeChild(buton)
        }else{
            swal({
                title: "Ups!",
                text: "Por favor, rellene los campos.",
                icon: "warning",
              });
        }

    };



