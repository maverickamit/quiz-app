import "./styles.css";

let quizContainer = document.getElementById("quiz");
let resultsContainer = document.getElementById("results");
let submitButton = document.getElementById("submit");
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

function buildQuiz() {
  // to store html output
  let output = [];

  myQuestions.forEach((currentQuestion, questionNumber) => {
    let options;
    let answers = [];
    for (options in currentQuestion.answers) {
      answers.push(
        `<label>
    <input type="radio" name="question${questionNumber}" value="${options}">
    ${options} : ${currentQuestion.answers[options]}
    </label> `
      );
    }
    // add this question and it's answers to the output
    output.push(
      `<div class="slide>
        <div class="questions">${currentQuestion.question}</div>
    <div class="answers">${answers.join("")}</div>
      </div>
  `
    );
  });
  //combine output list into one string of html

  quizContainer.innerHTML = output.join("");
}

function showResults() {
  //gather all answers in a container
  let answerContainers = quizContainer.querySelectorAll(".answers");

  //keeping track of user's answers
  let numCorrect = 0;

  // for each question

  myQuestions.forEach((currentQuestion, questionNumber) => {
    //find selected answer
    let answerContainer = answerContainers[questionNumber];
    let selector = `input[name=question${questionNumber}]:checked`;
    let userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if (userAnswer === currentQuestion.correctAnswer) {
      //add score
      numCorrect++;
      //green color
      answerContainer.style.color = "lightgreen";
    } else {
      answerContainer.style.color = "red";
    }
    //shows number of correct reuslts out of total
    resultsContainer.innerHTML = numCorrect + " out of " + myQuestions.length;
  });
}

//Displays Quiz
buildQuiz();
//On submit, shows Results
submitButton.addEventListener("click", showResults);
