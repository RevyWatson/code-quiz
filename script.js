
let pTags = document.querySelector("p")
let h1Tag = document.querySelector("h1")
let btN = document.querySelector("button")
let sectionTag = document.querySelector(".game-card")

//variables for finalCountDown
let secondsLeft = 59;

let totalScore; //for end of quiz score

let correctAnswer; //for question answers

//begin game button
let beginBtn = document.querySelector("#beginQuiz");

//event listener for begin game button
beginBtn.addEventListener("click", startQuiz);


function startQuiz() {
    pTags.textContent = " ";
    h1Tag.textContent = " ";
    btN.textContent = " ";
    btN.hidden = " ";
    let h2Tags = document.createElement("h2");
    sectionTag.prepend(h2Tags);
    h2Tags.textContent = "Time: ";
    h2Tags.setAttribute("style", "color:blanchedalmond; margin-left:-1%; margin-top: 3%; margin-bottom: -4%; text-align: center; font-size:22px;");
    firstQuestion();
    finalCountDown();
}

function finalCountDown() {
    let stopWatch = document.querySelector("h2");
    let timerInterval = setInterval(function() {
        secondsLeft--;
        stopWatch.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0) {
        clearInterval(timerInterval);
    //if else for time losses for wrong answers and end quiz?
        }

    }, 1000);
}

//need to figure out how to make three button (answer options) below each question function!
function firstQuestion() {
    let listEl = document.createElement("ol");
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");

    pTags.appendChild(listEl)
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    h1Tag.textContent = "What is the correct syntax for 'calling to' a function?";
    li1.textContent = "callingThisFunctionOut();";
    li2.textContent = "callingThisFunctionOut[];";
    li3.textContent = "callingThisFunctionOut = 'Come out and play!';";

    h1Tag.setAttribute("style", "font-size: 25px; margin-top:13%;");
    listEl.setAttribute("style", "text-align:center; margin:inherit;");
    let quizItems = [li1, li2, li3];
    for (let i = 0; i < quizItems.length; i++)
        quizItems[i].setAttribute("style", "line-height:2.5; text-align:left; font-family:monospace;");

    console.log("Ready - set - start quiz!");

    // if (correctAnswer !== true) {
    //     quizCon.textContent = "Incorrect!"
    //     //lose time
    // }
    // if (correctAnswer === true) {
    //     quizCon.textContent = "Correct!"
    //     //gain points
    // }
    // if () {
    //answer button clicked event listener for next question
}

function secondQuestion() {
    h1Tag.textContent = "This will be the second question that you will need to answer?";
    li1.textContent = "Option 1 button.";
    li2.textContent = "Option 2 button.";
    li3.textContent = "Option 3 button.";

    // if (correctAnswer !== true) {
    //     .textContent = "Incorrect!"
    //     //lose time
    // }
    // if (correctAnswer === true) {
    //     .textContent = "Correct!"
    //     //gain points
    // }
    // // if () {
    //     //answer button clicked event listener for next question
}

function thirdQuestion() {
    h1Tag.textContent = "This will be the third question that you will need to answer?";
    li1.textContent = "Option 1 button.";
    li2.textContent = "Option 2 button.";
    li3.textContent = "Option 3 button.";

    // if (correctAnswer !== true) {
    //     .textContent = "Incorrect!"
    //     //lose time
    // }
    // if (correctAnswer === true) {
    //     .textContent = "Correct!"
    //     //gain points
    // }    
    // if () {
    //answer button clicked event listener for next question
}
// }

function fourthQuestion() {
    h1Tag.textContent = "This will be the fourth question that you will need to answer?";
    li1.textContent = "Option 1 button.";
    li2.textContent = "Option 2 button.";
    li3.textContent = "Option 3 button.";

    // if (correctAnswer !== true) {
    //     .textContent = "Incorrect!"
    //     //lose time
    // }
    // if (correctAnswer === true) {
    //     .textContent = "Correct!"
    //     //gain points
    // }
    // // if () {
    //answer button clicked event listener for next question
}
// }

function fifthQuestion() {
    h1Tag.textContent = "This will be the fifth question that you will need to answer?";
    li1.textContent = "Option 1 button.";
    li2.textContent = "Option 2 button.";
    li3.textContent = "Option 3 button.";

    // if (correctAnswer !== true) {
    //     .textContent = "Incorrect!"
    //     //lose time
    // }
    // if (correctAnswer === true) {
    //     .textContent = "Correct!"
    //     //gain points
    // }
    // if () {
    //answer button clicked event listener for next question
}
// }

function sixthQuestion() {
    h1Tag.textContent = "This will be the sixth question that you will need to answer?";
    li1.textContent = "Option 1 button.";
    li2.textContent = "Option 2 button.";
    li3.textContent = "Option 3 button.";

    // if (correctAnswer !== true) {
    //     .textContent = "Incorrect!";
    //     //lose time
    // }
    // if (correctAnswer === true) {
    //     .textContent = "Correct!";
    //     //gain points
    // }
    // if () {
    //end of quiz
}
// }


// function endGame() {
//     .textContent = "Quiz Completed!";
//     totalScore = "x";
//     let highScore = ("x" >= 20);
//     let midScore = ("x" < 20 && "x" > 10);
//     let lowScore = ("x" <= 10);

//     if (highScore === true) {
//         .textContent = "Excellent job! You really know your stuff!";
//     } else if (midScore === true) {
//         .textContent = "Good job! Keep studying!";
//     } else (lowScore === true)
//         .textContent = "Keep at it! Study more!";
//     }