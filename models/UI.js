export class UI {
    constructor(){}

    showQuestion(text){
       const questionTitle =  document.querySelector(".question")
       questionTitle.innerHTML = text
    }

    showChoices(choices, callback){
      const choicesContainer = document.querySelector(".choices")
      choicesContainer.innerHTML = ""
        for (let i = 0; i < choices.length; i++) {
          const button = document.createElement("button")
          button.innerText = choices[i]
          button.className = "button"
          button.addEventListener("click", () => callback(choices[i]))

          choicesContainer.append(button)
        }

    }

 /**
  * 
  * @param {number} score 
  */

    showScores(score) {
        const quizEndHtml = `
        <h1> Resultado! </h1>
        <h2> Tu puntaje es: ${score} </h2>
        <div class="volver">
            <a href="./index.html"><button id="volver" class="volver">Volver al inicio</button></a>
            <a href="./quiz.html"><button id="volver" class="volver">Reintentar Quizz</button></a>
        </div>
        `
        const elemento = document.querySelector(".quiz");
        elemento.innerHTML = quizEndHtml;
    }

    showProgress(curr, total){
       const progreso = document.querySelector(".progreso")
       progreso.innerHTML = `
       Pregunta ${curr} de ${total}  
       `
    }

};


