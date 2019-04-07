import "./styles.css";

let quizContainer = document.getElementById("quiz");
let resultsContainer = document.getElementById("results");
let submitButton = document.getElementById("submit");
let myQuestions = [
  {
    question: " Stoicism is an ancient Greek philosophy developed by?",
    answers: {
      a: "Socrates",
      b: "Epicurus",
      c: "Zeno of Citium"
    },
    correctAnswer: "c"
  },
  {
    question: "One of the major adherents of stoic included the Emperor?",
    answers: {
      a: "Julio Caesar",
      b: "Marcus Aurelius",
      c: "Nero"
    },
    correctAnswer: "b"
  },
  {
    question:
      " For Nietzsche, what is the importance of morality or moral judgment?",
    answers: {
      a: "Moral judgment should always be taken literally",
      b:
        "Moral judgment is the most important type of judgment, except for religious judgment.",
      c: "There are no moral facts at all"
    },
    correctAnswer: "c"
  },
  {
    question:
      "Nietzsche tries to solve the problem of existence and overcome pessimism with which kind of Greek play?",
    answers: {
      a: "Tragedy",
      b: "Satire",
      c: "Comedy"
    },
    correctAnswer: "a"
  },
  {
    question:
      "Which philosopher is best known for his statement cogito ergo sum?",
    answers: {
      a: "Jean-Paul Sartre",
      b: "Plato",
      c: "Descartes"
    },
    correctAnswer: "c"
  },
  {
    question: "Epistemology is the theory of?",
    answers: {
      a: "Knowledge",
      b: "Metaphysics",
      c: "Value"
    },
    correctAnswer: "a"
  },
  {
    question:
      'Which Existentialist is credited with claiming "Existence precedes Essence"?',
    answers: {
      a: "Soren Kierkegaard",
      b: "Jean-Paul Sartre",
      c: "Albert Camus"
    },
    correctAnswer: "b"
  },
  {
    question: "What word did Marx label the Ruling Class with?",
    answers: {
      a: "Proletariat",
      b: "Bourgeoisie",
      c: "Monopolisers"
    },
    correctAnswer: "b"
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
      `<div class="slide">
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

//Pagination. One question per page.
let previousButton = document.getElementById("previous");
let nextButton = document.getElementById("next");
let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove("active-slide");
  slides[n].classList.add("active-slide");
  currentSlide = n;
  if (currentSlide === 0) {
    previousButton.style.display = "none";
  } else {
    previousButton.style.display = "inline-block";
  }
  if (currentSlide === slides.length - 1) {
    nextButton.style.display = "none";
    submitButton.style.display = "inline-block";
  } else {
    nextButton.style.display = "inline-block";
    submitButton.style.display = "none";
  }
}
showSlide(0);

function showNextSlide() {
  showSlide(currentSlide + 1);
}
function showPrevSlide() {
  showSlide(currentSlide - 1);
}

previousButton.addEventListener("click", showPrevSlide);
nextButton.addEventListener("click", showNextSlide);
