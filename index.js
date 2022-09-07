let buton = document.getElementById("iniciar");
let inputIniciar = document.querySelector("#iniciar");
let inputVolver = document.querySelector("#volver")

inputIniciar.addEventListener("click", functionIniciar)


function functionIniciar(){
   let persona = JSON.parse(localStorage.getItem("persona"))
   console.log(persona)
   let nombre = document.querySelector("#name").value;
   let contrasenia = document.querySelector("#contrasenia").value;
   let formulario = document.querySelector(".formulario").value;  

   if(nombre == persona.nombre && contrasenia == persona.contrasenia){
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
   iniciar.setAttribute("href", "./index.html");
   iniciar.innerHTML = "Volver"

   
        
   };



 