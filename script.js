//variables for newly created elements 
let listEl = document.createElement("ol");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
let btN1 = document.createElement("button");
let btN2 = document.createElement("button");
let btN3 = document.createElement("button");

//variable for the score and time elements
let scoreTag = document.createElement("h2");
let timeTag = document.createElement("h2");

let pTags = document.querySelector("p")
let h1Tag = document.querySelector("h1")
let feedBack = document.getElementById("feedback")

let btN = document.querySelector("button")
let sectionTag = document.querySelector(".game-card")

//variables for finalCountDown
let secondsLeft = 60;
//variable for starting points
let points = 0;

//begin game button
let beginBtn = document.querySelector("#beginQuiz");

//event listener for begin game button
beginBtn.addEventListener("click", startQuiz);


function startQuiz() {
    pTags.textContent = " ";
    h1Tag.textContent = " ";
    btN.textContent = " ";
    btN.hidden = " ";
    
    sectionTag.prepend(scoreTag);
    sectionTag.prepend(timeTag);
    scoreTag.setAttribute("style", "font-family:monospace; color:rgb(214, 176, 119);");
    timeTag.setAttribute("style", "font-family:monospace; color:rgb(214, 176, 119);");
    feedBack.setAttribute("style", "color:rgb(214, 176, 119);")

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
    
    h1Tag.setAttribute("style", "font-size: 25px;");
    listEl.setAttribute("style", "text-align:center;");
    
    let quizItems = [li1, li2, li3];
    for (let i = 0; i < quizItems.length; i++)
        quizItems[i].setAttribute("style", "line-height:2.5; text-align:left;");
    finalCountDown();
    firstQuestion();
}

function finalCountDown() {
    let timerInterval = setInterval(function () {
        secondsLeft--;
        timeTag.textContent = "Time: " + secondsLeft;
        
        if (secondsLeft <=0) {
            secondsLeft = 0;
            clearInterval(timerInterval);
            endQuiz();
        }

    }, 1000);
}

function correctAnswer() {
    scoreTag.textContent = "Score: " + points;
    points+=10;
}

function wrongAnswer (){
    secondsLeft = secondsLeft - 10;
    timeTag.textContent = "Time: " + secondsLeft;
    if (secondsLeft <= 0) {
        secondsLeft = 0;
    }
}

function firstQuestion() {
    h1Tag.textContent = "1. What is the correct syntax for 'calling to' a function?";
    btN1.textContent = "callingThisFunctionOut();";
    btN2.textContent = "callingThisFunctionOut[];";
    btN3.textContent = "callingThisFunctionOut = 'Come out and play!';";

    btN1.addEventListener("click", function() {
        feedBack.textContent = "Correct!";
        correctAnswer();
        console.log("correct");
        secondQuestion();
    })
    btN2.addEventListener("click", function() {
        feedBack.textContent = "Wrong Answer!";
        wrongAnswer();
        secondQuestion();
    })

    btN3.addEventListener("click", function() {
        feedBack.textContent = "Wrong Answer!";
        wrongAnswer();
        secondQuestion();
    })
}

function secondQuestion() {
    h1Tag.textContent = "2. What sets or returns the text content of the specified node?";
    btN1.textContent = "textDisplay";
    btN2.textContent = "textContent";
    btN3.textContent = "textShow";
    
    btN1.addEventListener("click", function() {
    feedBack.textContent = "Wrong Answer!";
        wrongAnswer();
        thirdQuestion();
    })
    btN2.addEventListener("click", function() {
        feedBack.textContent = "Correct!";
        correctAnswer();
        console.log("correct");
        thirdQuestion();
    })

    btN3.addEventListener("click", function() {
        feedBack.textContent = "Wrong Answer!";
        wrongAnswer();
        thirdQuestion();
    })
}

function thirdQuestion() {
    h1Tag.textContent = "3. A boolean represents one of two values:";
    btN1.textContent = "Left or right.";
    btN2.textContent = "Equal to or not equal to.";
    btN3.textContent = "True or false.";
    
    btN1.addEventListener("click",  function() {
        feedBack.textContent = "Wrong Answer!";
        wrongAnswer();
        fourthQuestion();
    })
    btN2.addEventListener("click",  function() {
        feedBack.textContent = "Wrong Answer!";
        wrongAnswer();
        fourthQuestion();
    })
    btN3.addEventListener("click", function() {
        feedBack.textContent = "Correct!";
        correctAnswer();
        console.log("correct");
        fourthQuestion();
    })
}

function fourthQuestion() {
    h1Tag.textContent = "4. What is the DOM?";
    btN1.textContent = "Differential Object Method.";
    btN2.textContent = "Document Object Model.";
    btN3.textContent = "Dependent Object Material.";
    
    btN1.addEventListener("click", function() {
        feedBack.textContent = "Wrong Answer!";
        wrongAnswer();
        fifthQuestion();
    })

    btN2.addEventListener("click", function() {
        feedBack.textContent = "Correct!";
        correctAnswer();
        console.log("correct");
        fifthQuestion();
    })
    
    btN3.addEventListener("click", function() {
        feedBack.textContent = "Wrong Answer!";
        wrongAnswer();
        fifthQuestion();
    })
}

function fifthQuestion() {
    h1Tag.textContent = "5. What creates an instance of the element of a specified tag?";
    btN1.textContent = "document.createElement";
    btN2.textContent = "document.manifestElement";
    btN3.textContent = "document.addElement";
    
    btN1.addEventListener("click", function() {
        feedBack.textContent = "Correct!";
        correctAnswer();
        console.log("correct");
        endQuiz();
    })

    btN2.addEventListener("click", function() {
        feedBack.textContent = "Wrong Answer!";
        wrongAnswer();
        endQuiz();
    })
    
    btN3.addEventListener("click", function() {
        feedBack.textContent = "Wrong Answer!";
        wrongAnswer();
        endQuiz();
    })
}

function sixthQuestion() {
    h1Tag.textContent = "6. Which of these is a example of an string array?";
    btN1.textContent = "[12345];";
    btN2.textContent = "'raspbery cake';";
    btN3.textContent = "['platypus', 'sugarglider', 'mongoose'];";
    
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
    feedBack.textContent = " ";
// high scores and form box for initials
//imput element, submit btn, and access to local storage

}