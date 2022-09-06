// @ts-check
import { question } from "./data/preguntas.js";
import { Quiz } from "./models/ques.js";
import { UI } from "./models/UI.js";





const renderPage = (quiz, ui) => {
    if (quiz.isEnded()) {
        console.log(quiz.score)
        ui.showScores(quiz.score)
    }else {
        ui.showQuestion(quiz.getQuestionIndex().text)
        ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice) => {
            quiz.guess(currentChoice);
            renderPage(quiz, ui)
        }); 
        ui.showProgress(quiz.questionIndex +1, quiz.question.length);
    }
};

function main() {
    
    const quiz = new Quiz(question);

    const ui = new UI();

    renderPage(quiz, ui);

}

main();