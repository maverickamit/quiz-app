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
