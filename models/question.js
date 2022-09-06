
export class Question {

    /**
     * 
     * @param {string} text this is the text of the question
     * @param {string[]} choices this are the choice of the question
     * @param {string} answer this is the answer of the question
     */

    constructor(text, choices, answer){
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    
    /**
     * @param {string} 
     * @returns {boolean}
     */

    correctAnswer(choices){
        return choices === this.answer;
    }

}

