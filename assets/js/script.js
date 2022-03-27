// adding questions that will be on the quiz

const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["a. <js>", "b. <javascript>", "c. <scripting>", "d. <script>"],
        answer: "d. <script>"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ["a. commas", "b. curly brackets", "c. quotes", "d. parenthesis"],
        answer: "c. quotes"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        choices: ["a. numbers and strings", "b. other arrays", "c. booleans", "d. all of the above"],
        answer: "b. other arrays"
    },
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
        answer: "c. alerts"
    },
    {
        question: "How do you create a function in JavaScript",
        choices: ["a. function = myFunction()", "b. function myFunction()", "c. function:myFunction()", "d. createMyFunction()"],
        answer: "b. function myFunction()"
    },
    {
        question: "How do you call a function named myFunction?",
        choices: ["a. call myFunction()", "b. call function myFunction()", "c. myFunction()", "d. call myFunction"],
        answer: "c. myFunctions()"
    },
    {
        question: "To see if two variables are equal in an if / else statement you would use ____.",
        choices: ["a. =", "b. ==", "c. 'equals'", "d. !="],
        answer: "b. =="
    },
    {
        question: "The first index of an array is ____.",
        choices: ["a. 0", "b. 1", "c. 8", "d. any"],
        answer: "a. 0"
    },
    {
        question: "Who invented JavaScript?",
        choices: ["a. Douglas Crockford", "b. Sheryl Sandberg", "c. Brendan Eich", "d. Ben Javascript"],
        answer: "c. Brendan Eich"
    },
    {
        question: "How to write an IF statement in JavaScript?",
        choices: ["a. if i == 5 then", "b. if i = 5 then", "c. if(i == 5)", "d. if i = 5"],
        answer: "c. if(i == 5)"
    },
    {
        question: "How do you add a comment in a JavaScript?",
        choices: ["a. //This is a comment", "b. <!--This is a comment-->", "c. 'This is a comment", "d. * This is a comment *"],
        answer: "a. //This is a comment"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        choices: ["a. onclick", "b. onchange", "c. onmouseover", "d. onmouseclick"],
        answer: "a. onclick"
    }
];


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
var totalTime = 180;

//uses variables that were created to make the timer countdown and for different thing to display when you click the start quiz button on the start page.
function startQuiz(){
    questionIndex = 0;
    totalTime = 179;
    timeLeft.textContent = totalTime;
    initials.textContent = "";

    startDiv.style.display = "none";
    questionDiv.style.display = "block";
    timer.style.display = "block";
    timesUp.style.display = "none";
    startQuizBtn.style.display = "none";

    var startTimer = setInterval(function(){
        totalTime--;
        timeLeft.textContent = totalTime;
        if(totalTime === 0){
            clearInterval(startTimer);
            if (questionIndex < questionDiv.length - 1){
                gameOver();
            }
        }
    }, 1000);

    showQuiz();
}

//presents the questions and options

function showQuiz(){
    nextQuestion();
}

function nextQuestion(){
    questionTitle.textContent = questions[questionIndex].question;
    choiceA.textContent = questions[questionIndex].choices[0];
    choiceB.textContent = questions[questionIndex].choices[1];
    choiceC.textContent = questions[questionIndex].choices[2];
    choiceD.textContent = questions[questionIndex].choices[3];
}

//tell the user whether the choice is correct or incorrect
function checkAnswer(answer){
    checkAnswer.style.display = "block";

    if(questions[questionIndex].answer === questions[questionIndex].choices[answer]){
        // add one to the final score
        correctAnswer++;
        checkAnswer.textContent = "Correct!"
    } else{
        totalTime -= 10;
        timeLeft.textContent = totalTime;
        checkAnswer.textContent = "Incorrect! The correct answer was: " + questions[questionIndex].answer;
    }

    questionIndex++

// repeats through the whole questions array
    if (questionIndex < questions.length){
        nextQuestion();
    }else{
        gameOver();
    }
}

//making each selection its own function that gets ran through the previous function that allows the program to check if the answer submitted was the same as the answer that is in the array
function A(){checkAnswer(0);}
function B(){checkAnswer(1);}
function C(){checkAnswer(2);}
function D(){checkAnswer(3);}

function gameOver(){
    summary.style.display = "block";
    questionDiv.style.display = "none";
    startDiv.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "block";

    finalScore.textContent = correctAnswer;
}

function storeHighScores(event){
    event.preventDefault();

    // makes sure that initials were input
    if(initials.value === ""){
        window.alert("Please enter your initials.")
        return;
    }

    startDiv.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "none";
    summary.style.display = "none";
    highScores.style.display = "block";

    var savedHighScores = localStorage.getItem("high scores");
    var scoresArray;

    if(savedHighScores === null){
        scoresArray = [];
    }else{
        scoresArray = JSON.parse(savedHighScores)
    } 

    //setting the user score initials and score so that it can be saved and added to the high scores section and in local storage
    var userScore = {
        initials: initials.value,
        score: finalScore.textContent
    };

    console.log(userScore);

    //adds userScore to the Array scoresArray so that it can begin to populate the array
    scoresArray.push(userScore);


    var scoresArrayString = JSON.stringify(scoresArray);
    window.localStorage.setItem("high scores", scoresArrayString);

    showHighScores();
}

var i = 0;
function showHighScores(){

    startDiv.style.display = "none";
    timer.style.display = "none";
    questionDiv.style.display = "none";
    timesUp.style.display = "none";
    summary.style.display = "none";
    highScoreSection.style.display = "block";

    var savedHighScores = localStorage.getItem("high scores");

    if(savedHighScores === null){
        return;
    }
    console.log(savedHighScores);

    var storedHighScores = JSON.parse(savedHighScores);

    for(; i < storedHighScores.length; i++){
        var newHighScore = document.createElement("p");
        newHighScore.innerHTML = storedHighScores[i].initials + ": " + storedHighScores[i].score;
        hsList.appendChild(newHighScore);
    }
}

// event listeners
startQuizBtn.addEventListener("click", startQuiz);
choiceA.addEventListener("click", A);
choiceB.addEventListener("click", B);
choiceC.addEventListener("click", C);
choiceD.addEventListener("click", D);

submitInitial.addEventListener("click", function(event){
    storeHighScores(event);
});

viewHighScores.addEventListener("click", function(event){
    showHighScores(event);
});

goBack.addEventListener("click", function(){
    startDiv.style.display = "block";
    highScores.style.display = "none";
});

clearScore.addEventListener("click", function(){
    window.localStorage.removeItem("high scores");
    hsList.innerHTML = "High Scores Cleared!";
    hsList.setAttribute("style", "font-family: 'Archivo', sans-serif; font-style: italic;")
})