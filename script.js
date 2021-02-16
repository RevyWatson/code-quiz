let totalScore; //for end of quiz score

let correctAnswer; //for question answers

//connection to the game card container?
let quizCon = document.querySelector(".quizContainer");

//begin game button
let beginBtn = document.querySelector("#beginQuiz");

//event listener for begin game button
beginBtn.addEventListener("click", startQuiz);


function startQuiz() {
    console.log("Ready - set - start quiz!")
}

//need to figure out how to make three button (answer options) below each question function!
function firstQuestion() {
    quizCon.textContent = "This will be the first question that you need to answer?";
    if (correctAnswer !== true) {
        quizCon.textContent = "Incorrect!"
        //lose time
    }
    if (correctAnswer === true) {
        quizCon.textContent = "Correct!"
        //gain points
    }
    // if () {
        //answer button clicked event listener for next question
}

function secondQuestion() {
    quizCon.textContent = "This will be the second question that you will need to answer?";
    if (correctAnswer !== true) {
        quizCon.textContent = "Incorrect!"
        //lose time
    }
    if (correctAnswer === true) {
        quizCon.textContent = "Correct!"
        //gain points
    }
    // if () {
        //answer button clicked event listener for next question
}

function thirdQuestion() {
    quizCon.textcontent = "This will be the third question that you will need to answer?";
    if (correctAnswer !== true) {
        quizCon.textContent = "Incorrect!"
        //lose time
    }
    if (correctAnswer === true) {
        quizCon.textContent = "Correct!"
        //gain points
    }    
    // if () {
            //answer button clicked event listener for next question
    }
// }

function fourthQuestion() {
    textContent = "This will be the fourth question that you will need to answer?";
    if (correctAnswer !== true) {
        quizCon.textContent = "Incorrect!"
        //lose time
    }
    if (correctAnswer === true) {
        quizCon.textContent = "Correct!"
        //gain points
    }
    // if () {
        //answer button clicked event listener for next question
}
// }

function fifthQuestion() {
    textContent = "This will be the fifth question that you will need to answer?"
    if (correctAnswer !== true) {
        quizCon.textContent = "Incorrect!"
        //lose time
    }
    if (correctAnswer === true) {
        quizCon.textContent = "Correct!"
        //gain points
    }
    // if () {
        //answer button clicked event listener for next question
}
// }

function sixthQuestion() {
    quizCon.textContent = "This will be the sixth question that you will need to answer?"
    if (correctAnswer !== true) {
        quizCon.textContent = "Incorrect!";
        //lose time
    }
    if (correctAnswer === true) {
        quizCon.textContent = "Correct!";
        //gain points
    }
    // if () {
        //end of quiz
}
// }


function endGame() {
    quizCon.textContent = "Quiz Completed!";
    totalScore = "x";
    let highScore = ("x" >= 20);
    let midScore = ("x" < 20 && "x" > 10);
    let lowScore = ("x" <= 10);
    
    if (highScore === true) {
        quizCon.textContent = "Excellent job! You really know your stuff!";
    } else if (midScore === true) {
        quizCon.textContent = "Good job! Keep studying!";
    } else (lowScore === true)
        quizCon.textContent = "Keep at it! Study more!";
    }