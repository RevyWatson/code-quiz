//variables for existing and created elements 
let listEl = document.createElement("ol");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
let btN1 = document.createElement("button");
let btN2 = document.createElement("button");
let btN3 = document.createElement("button");
let pTags = document.querySelector("p")
let h1Tag = document.querySelector("h1")
let h2Tags = document.createElement("h2");
let btN = document.querySelector("button")
let sectionTag = document.querySelector(".game-card")

//variables for finalCountDown
let secondsLeft = 60;

let totalScore; //for end of quiz score
let points = 10; //points for each correctly answered question
let correctAnswer = true; //for question answers

//begin game button
let beginBtn = document.querySelector("#beginQuiz");

//event listener for begin game button
beginBtn.addEventListener("click", startQuiz);


function startQuiz() {
    pTags.textContent = " ";
    h1Tag.textContent = " ";
    btN.textContent = " ";
    btN.hidden = " ";
    sectionTag.prepend(h2Tags);
    h2Tags.textContent = "Time: ";
    h2Tags.setAttribute("style", "font-family:monospace; color:rgb(214, 176, 119); margin-left:-1%; margin-top: 3%; margin-bottom: -4%; text-align: center; font-size:22px;");
    pTags.appendChild(listEl)
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    li1.appendChild(btN1);
    li2.appendChild(btN2);
    li3.appendChild(btN3);
    let buttonZ = [btN1, btN2, btN3];
    for (let i = 0; i < buttonZ.length; i++)
        buttonZ[i].setAttribute("class", "shinyBtn")
    
    h1Tag.setAttribute("style", "font-size: 25px; margin-top:13%;");
    listEl.setAttribute("style", "text-align:center; margin:inherit; margin-top:-4%;");
    
    let quizItems = [li1, li2, li3];
    for (let i = 0; i < quizItems.length; i++)
        quizItems[i].setAttribute("style", "line-height:2.5; text-align:left;");
    firstQuestion();
    finalCountDown();
}

function finalCountDown() {
    let stopWatch = document.querySelector("h2");
    let timerInterval = setInterval(function () {
        secondsLeft--;
        stopWatch.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            //if else for time losses for wrong answers and end quiz?
        }

    }, 1000);
}

function scoreBoard() {
    if (correctAnswer === true) {
        points++;
    }else {(correctAnswer !== true)
        points--;
}
}

function firstQuestion() {
    h1Tag.textContent = "What is the correct syntax for 'calling to' a function?";
    btN1.textContent = "callingThisFunctionOut();";
    btN2.textContent = "callingThisFunctionOut[];";
    btN3.textContent = "callingThisFunctionOut = 'Come out and play!';";
    
    btN1.addEventListener("click", secondQuestion);
    btN2.addEventListener("click", secondQuestion);
    btN3.addEventListener("click", secondQuestion);
}


function secondQuestion() {
    h1Tag.textContent = "What sets or returns the text content of the specified node?";
    btN1.textContent = "textDisplay";
    btN2.textContent = "textContent";
    btN3.textContent = "textShow";
    
    btN1.addEventListener("click", thirdQuestion);
    btN2.addEventListener("click", thirdQuestion);
    btN3.addEventListener("click", thirdQuestion);
}


function thirdQuestion() {
    h1Tag.textContent = "A boolean represents one of two values:";
    btN1.textContent = "Left or right.";
    btN2.textContent = "Equal to or not equal to.";
    btN3.textContent = "True or false.";
    
    btN1.addEventListener("click", fourthQuestion);
    btN2.addEventListener("click", fourthQuestion);
    btN3.addEventListener("click", fourthQuestion);
}

function fourthQuestion() {
    h1Tag.textContent = "What is the DOM?";
    btN1.textContent = "Differential Object Method.";
    btN2.textContent = "Document Object Model.";
    btN3.textContent = "Dependent Object Material.";
    
    btN1.addEventListener("click", fifthQuestion);
    btN2.addEventListener("click", fifthQuestion);
    btN3.addEventListener("click", fifthQuestion);
}

function fifthQuestion() {
    h1Tag.textContent = "What creates an instance of the element of a specified tag?";
    btN1.textContent = "document.createElement";
    btN2.textContent = "document.manifestElement";
    btN3.textContent = "document.addElement";
    
    btN1.addEventListener("click", sixthQuestion);
    btN2.addEventListener("click", sixthQuestion);
    btN3.addEventListener("click", sixthQuestion);
}

function sixthQuestion() {
    h1Tag.textContent = "Which of these is a example of an string array?";
    btN1.textContent = "[12345];";
    btN2.textContent = "'raspbery cake';";
    btN3.textContent = "['platypus', 'sugarglider', 'mongoose'];";
    1
    btN1.addEventListener("click", endQuiz);
    btN2.addEventListener("click", endQuiz);
    btN3.addEventListener("click", endQuiz);
}

function endQuiz() {
    h1Tag.textContent = "Quiz Complete! Type Your Initials and Save Your Score!";
    btN1.hidden = " ";
    btN2.hidden = " ";
    btN3.hidden = " ";
    listEl.textContent = " ";
// high scores and form box for initials
}