let buton = document.getElementById("iniciar");
let inputIniciar = document.querySelector("#iniciar");
let inputVolver = document.querySelector("#volver")

inputIniciar.addEventListener("click", functionIniciar)

let nombre = document.querySelector("#name")
let contrasenia = document.querySelector("#contrasenia")
let formulario = document.querySelector(".formulario")
function functionIniciar(){
   let nombreStorage = localStorage.getItem("nombre")
   let contraseniaStorage = localStorage.getItem("contraseña")
          
   if(nombre.value === nombreStorage && contrasenia.value === contraseniaStorage){
      let gracias = document.querySelector(".gracias")
      gracias.innerHTML = "Gracias por iniciar sesión! :)"
      let quiz = document.querySelector(".quiz");
      quiz.innerHTML = "Quiero jugar!"
      swal("Solo estas a un paso de jugar!", "Te esperamos...", "success");
      
   }else{
      let incorrecto = document.querySelector(".incorrecto");
      incorrecto.innerHTML = "Los datos ingresados son incorrectos."
      
      
   }
   let iniciar = document.createElement("a");
   iniciar.setAttribute("href", "./carrito.html");
   iniciar.innerHTML = "Volver"
   formulario.appendChild(iniciar)
   formulario.removeChild(iniciar)
   
        
   };



 