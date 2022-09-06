const extra = document.querySelector(".extra");
let personajes = document.querySelector("#personajes")
const url = "https://www.breakingbadapi.com/api/"
fetch("https://www.breakingbadapi.com/api/character/random")

.then(respuesta => respuesta.json())
.then( data => {
    const link = document.createElement("a");
    link.setAttribute("href", "./carrito.html");
    personajes.innerHTML = `
    <h1 class="tituloPersonaje">Que personaje de Breaking Bad eres?</h1>
    <h2 class="nombrePersonaje"> ${data[0].name} </h2>
    <img class="imagenPersonaje" src="${data[0].img}" alt="">
    <p class="parrafo"> ${data[0].nickname} </p>
    <p class="parrafo"> ${data[0].occupation} </p>
    <p><a class="link" href="${link}">Volver</a></p>
    `
    console.log(data)
    
})