import "./styles.css";

let quizContainer = document.getElementById("quiz");
let resultsContainer = document.getElementById("results");
let submitButton = document.getElementById("button");
quizContainer.innerHTML = `
`;

function buildQuiz(){
  // to store html output
  let output=[];

  myQuestions.forEach((currentQuestion, questionNumber) =>{

let answers=[];
for (options in currentQuestion.answers)
{
  answers.push(
    `<label>
    <input type="radio" name="question${questionNumber} value="${options}">
    ${options} : ${currentQuestion.answers[options]}
    </label> `);
}
// add this question and it's answers to the output
output.push(
  `<div class="questions">${currentQuestion.question}</div>
  <div class="answers">${answers.join("")}</div>
  `
);
}
);
//combine output list into one string of html 

quizContainer.innerHTML= output.join("");

function showResults() {}

//Displays Quiz
buildQuiz();
//On submit, shows Results
submitButton.addEventListener("click", showResults);

let myQuestions = [
  {
    question:
      "Zeno and Chrysippus believed that many of the sins were equal. Who was the German philosopher who also shared this similar thinking?",
    answers: {
      a: "Nietzsche",
      b: "Kant",
      c: "Hegel"
    },
    correctAnswer: "b"
  },
  {
    question: "Who is the strongest?",
    answers: {
      a: "Superman",
      b: "The Terminator",
      c: "Waluigi, obviously"
    },
    correctAnswer: "c"
  }
];
