const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  console.log("Started");
  startButton.classList.add("hide");
  shuffledQuestions = question.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}
function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
  nextButton.classList.remove("hide");
}
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const question = [
  {
    question: "What is 2 + 2 ?",
    answer: [
      { text: "4", correct: true },
      { text: "22", correct: false },
    ],
  },
  {
    question: "What is 6 * 8 ?",
    answer: [
      { text: "48", correct: true },
      { text: "56", correct: false },
    ],
  },
  {
    question: "What is the Capital of Romania ?",
    answer: [
      { text: "Bucharest", correct: true },
      { text: "Roma", correct: false },
    ],
  },
  {
    question: "How can you be more intelligent ?",
    answer: [
      { text: "Read more books", correct: true },
      { text: "Watch TV", correct: false },
    ],
  },
  {
    question: "How can you be healthier ?",
    answer: [
      { text: "Eat more fast-food", correct: false },
      { text: "Eat more fruits", correct: true },
    ],
  },
  {
    question: "What is 6 * 3 ?",
    answer: [
      { text: "9", correct: false },
      { text: "18", correct: true },
    ],
  },
  {
    question: "What is 5 * 2 ?",
    answer: [
      { text: "20", correct: false },
      { text: "10", correct: true },
    ],
  },
];
