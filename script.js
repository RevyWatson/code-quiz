//variables for newly created elements 
let listEl = document.createElement("ol");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
//first question buttons
let btN1 = document.createElement("button");
let btN2 = document.createElement("button");
let btN3 = document.createElement("button");
//second question buttons
let btN1_2 = document.createElement("button");
let btN2_2 = document.createElement("button");
let btN3_2 = document.createElement("button");
//third question buttons
let btN1_3 = document.createElement("button");
let btN2_3 = document.createElement("button");
let btN3_3 = document.createElement("button");
//fourth question buttons
let btN1_4 = document.createElement("button");
let btN2_4 = document.createElement("button");
let btN3_4 = document.createElement("button");
//fifth qustion buttons
let btN1_5 = document.createElement("button");
let btN2_5 = document.createElement("button");
let btN3_5 = document.createElement("button");
//sixth question buttons
let btN1_6 = document.createElement("button");
let btN2_6 = document.createElement("button");
let btN3_6 = document.createElement("button");

//variable for the score and time elements
let scoreTag = document.createElement("h2");
let timeTag = document.createElement("h2");
//variables for begin quiz - intructions paragraph text and quiz title
let pTags = document.querySelector("p")
let h1Tag = document.querySelector("h1")
//variable for correct and wrong answer text
let feedBack = document.getElementById("feedback")
//variables for begin quiz button
let btN = document.querySelector("button")
//variable to connect sectionTag and timeTag
let sectionTag = document.querySelector(".game-card")

//variables for finalCountDown
let secondsLeft = 60;
//variable for starting points
let points = 0;

//begin game button
let beginBtn = document.querySelector("#beginQuiz");

//event listener for begin game button
beginBtn.addEventListener("click", startQuiz);

//begin quiz function
function startQuiz() {
    pTags.textContent = " ";
    h1Tag.textContent = " ";
    btN.textContent = " ";
    btN.hidden = " ";
    
    sectionTag.prepend(scoreTag);
    sectionTag.prepend(timeTag);
    pTags.setAttribute("style", "margin-left:0; margin-right:10%;")
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
        quizItems[i].setAttribute("style", "line-height:2.5; text-align:center; list-style:none;");
    finalCountDown();
    firstQuestion();
    correctAnswer();
    wrongAnswer();
}

//quiz countdown timer function
function finalCountDown() {
    let timerInterval = setInterval(function () {
        secondsLeft--;
        timeTag.textContent = "Time: " + secondsLeft;
        
        if (secondsLeft <= 0) {
            // console.log(finalCountDown);
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
    btN1.hidden = " ";
    btN2.hidden = " ";
    btN3.hidden = " ";

    li1.appendChild(btN1_2);
    li2.appendChild(btN2_2);
    li3.appendChild(btN3_2);

    let buttonZ_2 = [btN1_2, btN2_2, btN3_2];
    for (let i = 0; i < buttonZ_2.length; i++)
        buttonZ_2[i].setAttribute("class", "shinyBtn")

    h1Tag.textContent = "2. What sets or returns the text content of the specified node?";
    btN1_2.textContent = "textDisplay";
    btN2_2.textContent = "textContent";
    btN3_2.textContent = "textShow";
    
    btN1_2.addEventListener("click", function() {
    feedBack.textContent = "Wrong Answer!";
        wrongAnswer();
        thirdQuestion();
    })
    btN2_2.addEventListener("click", function() {
        feedBack.textContent = "Correct!";
        correctAnswer();
        thirdQuestion();
    })

    btN3_2.addEventListener("click", function() {
        feedBack.textContent = "Wrong Answer!";
        wrongAnswer();
        thirdQuestion();
    })
}

function thirdQuestion() {
    btN1_2.hidden = " ";
    btN2_2.hidden = " ";
    btN3_2.hidden = " ";

    li1.appendChild(btN1_3);
    li2.appendChild(btN2_3);
    li3.appendChild(btN3_3);

    let buttonZ_3 = [btN1_3, btN2_3, btN3_3];
    for (let i = 0; i < buttonZ_3.length; i++)
        buttonZ_3[i].setAttribute("class", "shinyBtn")

    h1Tag.textContent = "3. A boolean represents one of two values:";
    btN1_3.textContent = "Left or right";
    btN2_3.textContent = "Equal to or not equal to";
    btN3_3.textContent = "True or false";
    
    btN1_3.addEventListener("click",  function() {
        feedBack.textContent = "Wrong Answer!";
        wrongAnswer();
        fourthQuestion();
    })
    btN2_3.addEventListener("click",  function() {
        feedBack.textContent = "Wrong Answer!";
        wrongAnswer();
        fourthQuestion();
    })
    btN3_3.addEventListener("click", function() {
        feedBack.textContent = "Correct!";
        correctAnswer();
        fourthQuestion();
    })
}

function fourthQuestion() {
    btN1_3.hidden = " ";
    btN2_3.hidden = " ";
    btN3_3.hidden = " ";

    li1.appendChild(btN1_4);
    li2.appendChild(btN2_4);
    li3.appendChild(btN3_4);

    let buttonZ_4 = [btN1_4, btN2_4, btN3_4];
    for (let i = 0; i < buttonZ_4.length; i++)
        buttonZ_4[i].setAttribute("class", "shinyBtn")

    h1Tag.textContent = "4. What is the DOM?";
    btN1_4.textContent = "Differential Object Method";
    btN2_4.textContent = "Document Object Model";
    btN3_4.textContent = "Dependent Object Material";
    
    btN1_4.addEventListener("click", function() {
        feedBack.textContent = "Wrong Answer!";
        wrongAnswer();
        fifthQuestion();
    })

    btN2_4.addEventListener("click", function() {
        feedBack.textContent = "Correct!";
        correctAnswer();
        fifthQuestion();
    })
    
    btN3_4.addEventListener("click", function() {
        feedBack.textContent = "Wrong Answer!";
        wrongAnswer();
        fifthQuestion();
    })
}

function fifthQuestion() {
    btN1_4.hidden = " ";
    btN2_4.hidden = " ";
    btN3_4.hidden = " ";

    li1.appendChild(btN1_5);
    li2.appendChild(btN2_5);
    li3.appendChild(btN3_5);

    let buttonZ_5 = [btN1_5, btN2_5, btN3_5];
    for (let i = 0; i < buttonZ_5.length; i++)
        buttonZ_5[i].setAttribute("class", "shinyBtn")

    h1Tag.textContent = "5. What creates an instance of the element of a specified tag?";
    btN1_5.textContent = "document.createElement";
    btN2_5.textContent = "document.manifestElement";
    btN3_5.textContent = "document.addElement";
    
    btN1_5.addEventListener("click", function() {
        feedBack.textContent = "Correct!";
        correctAnswer();
        sixthQuestion();
    })

    btN2_5.addEventListener("click", function() {
        feedBack.textContent = "Wrong Answer!";
        wrongAnswer();
        sixthQuestion();
    })
    
    btN3_5.addEventListener("click", function() {
        feedBack.textContent = "Wrong Answer!";
        wrongAnswer();
        sixthQuestion();
    })
}

function sixthQuestion() {
    btN1_5.hidden = " ";
    btN2_5.hidden = " ";
    btN3_5.hidden = " ";

    li1.appendChild(btN1_6);
    li2.appendChild(btN2_6);
    li3.appendChild(btN3_6);

    let buttonZ_6 = [btN1_6, btN2_6, btN3_6];
    for (let i = 0; i < buttonZ_6.length; i++)
        buttonZ_6[i].setAttribute("class", "shinyBtn")

    h1Tag.textContent = "6. Which of these is a example of an string array?";
    btN1_6.textContent = "[12345];";
    btN2_6.textContent = "'raspbery cake';";
    btN3_6.textContent = "['platypus', 'sugarglider', 'mongoose'];";
    
    btN1_6.addEventListener("click", function() {
        feedBack.textContent = "Wrong Answer!";
        wrongAnswer();
        endQuiz();
    })

    btN2_6.addEventListener("click", function() {
        feedBack.textContent = "Wrong Answer!";
        wrongAnswer();
        endQuiz();
    })
    
    btN3_6.addEventListener("click", function() {
        feedBack.textContent = "Correct!";
        correctAnswer();
        endQuiz();
    })
}

function endQuiz() {
    h1Tag.textContent = "Quiz Complete! Type Your Initials and Save Your Score!";
    btN1_6.hidden = " ";
    btN2_6.hidden = " ";
    btN3_6.hidden = " ";
    listEl.textContent = " ";
    feedBack.textContent = " ";
// high scores and form box for initials
// imput element, submit btn, and access to local storage

}