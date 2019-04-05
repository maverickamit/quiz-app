import "./styles.css";

let quizContainer = document.getElementById("quiz");
let resultsContainer = document.getElementById("results");
let submitButton = document.getElementById("button");
quizContainer.innerHTML = `
`;

function buildQuiz() {}

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
      1: "Nietzsche",
      2: "Kant",
      3: "Hegel",
      4: "Herder"
    },
    correctAnswer: "2"
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
