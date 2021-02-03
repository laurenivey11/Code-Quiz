

var startBtn = document.getElementById('startbtn');


var questions = [
  { q: 'The sky is blue.', a: 'True' },
  { q: 'There are 365 days in a year.', a: 'True' },
  { q: 'There are 42 ounces in a pound.', a: 'False' },
  { q: 'The Declaration of Independence was created in 1745.', a: 'False' },
  { q: 'Bananas are vegetables.', a: 'False' }
];

var answers = document.getElementById('answers');

var score = 0;

var currentQuestionIndex = 0;

var scoreEl = document.querySelector("#score");



var beginQuiz = function() {

    // hides startQuizs
    document.getElementById("startQuiz").style.display = "none";
    // displays question to visible
    document.getElementById("quiz").style.visibility = "visible";

  buildQuiz();
};


var buildQuiz = function() {

  // sets the question to the first quesion
  //var displayQuestions = questions[currentQuestionIndex];

  //displays question
  var quest = document.getElementById("question");
  quest.textContent = questions[currentQuestionIndex].q;

  answers.innerHTML = "";

 //display answers
var answerChoices = ["True", "False"];

  for (var i = 0; i < answerChoices.length; i++) {
    var answerOptions = document.createElement("li");
    answerOptions.textContent = answerChoices[i];
    answerOptions.setAttribute("value", answerChoices[i]);
    
    document.getElementById("answers").appendChild(answerOptions);
    
  }
  clickHandler();
};

var clickHandler = function(event) {
  if (event.target.tagName == "LI") {
    if (event.target.textContent == questions[currentQuestionIndex].a) {
    alert("Correct!")
    score++;
    setScore();
    } else { 
      alert("Wrong!");
    }
    currentQuestionIndex++;
    buildQuiz();
  }
};

function setScore() {
    scoreEl.textContent = score;
}









//starts quiz 
document.getElementById('startQuiz').addEventListener('click',  beginQuiz);
document.getElementById('answers').addEventListener('click', clickHandler);