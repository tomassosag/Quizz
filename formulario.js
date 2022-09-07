let formulario = document.querySelector(".formulario");
let buton = document.getElementById("submit");
let inputNombre = document.querySelector("#name");
let inputApellido = document.querySelector("#apellido");
let inputContrasenia = document.querySelector("#contrasenia");
let inputCorreo = document.querySelector("#correo");
let checkInfo = document.querySelector("#check");
let volver = document.querySelector("#volver");

class Usuario{
    constructor(nombre, apellido, contrasenia, correo){
        this.nombre = nombre,
        this.apellido = apellido,
        this.contrasenia = contrasenia,
        this.correo = correo;
    }
}

let usuariosRegistrados = []

buton.addEventListener("click", functionsubmit);

        
function functionsubmit () {
        
        if((inputNombre.value && inputContrasenia.value) != ""){
            usuariosRegistrados.push(new Usuario(inputNombre.value, inputApellido.value, inputContrasenia.value, inputCorreo.value))
            localStorage.setItem("persona", JSON.stringify(new Usuario(inputNombre.value, inputApellido.value, inputContrasenia.value, inputCorreo.value)))
            
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



