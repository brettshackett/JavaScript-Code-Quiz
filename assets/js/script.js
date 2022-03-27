// declaring variables that will be used through the script

// declaring the timer variables
var timer = document.getElementById("timer");
var timeLeft = document.getElementById("time-left");
var timesUp = document.getElementById("times-up");

// declaring the start quiz variables
var startDiv = document.getElementById("start");
var startQuizBtn = document.getElementById("start-quiz");

//declaring the question variables
var questionDiv = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var choiceA = document.getElementById("btn0");
var choiceB = document.getElementById("btn1");
var choiceC = document.getElementById("btn2");
var choiceD = document.getElementById("btn3");
var checkAnswer = document.getElementById("answer");

//declating variables for the submission after the quiz
var summary = document.getElementById("summary");
var submitInitial = document.getElementById("initial-submit");
var initials = document.getElementById("initials");
var everything = document.getElementById("everything");

//declaring variables for the high score section
var highScores = document.getElementById("high-scores");
var finalScore = document.getElementById("final-score");

var goBack = document.getElementById("go-back");
var clearScore = document.getElementById("clear");
var viewHighScores = document.getElementById("viewHighScores");
var hsList = document.getElementById("hs-list");


//some other variables for if statements
var correctAnswer = 0;
var questionNum = 0;
var scoreResult;
var questionIndex = 0;