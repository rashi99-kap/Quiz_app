let questions = [
    {
        question: "Capital of India?",
        options: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
        answer: "Delhi"
    },
    {
        question: "2 + 2 ?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "which in not a fruit",
        options: ["orange", "apple", "mango", "peas"],
        answer: "peas"

    }
];


let questionText = document.querySelector("#questionText");
let nextBtn = document.querySelector("#nextBtn");
let resultText = document.querySelector("#resultText");
let restartBtn = document.querySelector("#restartBtn");

restartBtn.style.display = "none";

let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");

let options = [option1, option2, option3, option4];


let currentQuestion = 0;
let score = 0;
let answered = false;




function showQuestion() {
    answered = false;

    for (let i = 0; i < options.length; i++) {
        options[i].disabled = false;
    }

    resultText.textContent = "";

    questionText.textContent = questions[currentQuestion].question;

    option1.textContent = questions[currentQuestion].options[0];
    option2.textContent = questions[currentQuestion].options[1];
    option3.textContent = questions[currentQuestion].options[2];
    option4.textContent = questions[currentQuestion].options[3];

    nextBtn.style.display = "none";

}


for (let i = 0; i < options.length; i++) {

    options[i].addEventListener("click", function (event) {

        if (answered) {
            return;
        }

        if (questions[currentQuestion].answer === event.target.textContent) {
            score++;
            resultText.textContent = "Correct! ✅";
        } else {
            resultText.textContent = "Wrong! ❌";
        }
        for (let i = 0; i < options.length; i++) {
            options[i].disabled = true;
        }
        answered = true;
        nextBtn.style.display = "block";

    });

}



nextBtn.addEventListener("click", function () {

    if (currentQuestion === questions.length - 1) {
        option1.style.display = "none";
        option2.style.display = "none";
        option3.style.display = "none";
        option4.style.display = "none";

        nextBtn.style.display = "none";
        resultText.textContent = "";

        questionText.textContent = "Quiz Completed! 🎉";

        resultText.textContent =
            "Your Score: " + score + "/" + questions.length;
        restartBtn.style.display = "block"; // ← move here

    } else {
        currentQuestion++;
        showQuestion();
    }

});

showQuestion();

restartBtn.addEventListener("click", function () {

    currentQuestion = 0;
    score = 0;
    answered = false;


    option1.style.display = "inline-block";
    option2.style.display = "inline-block";
    option3.style.display = "inline-block";
    option4.style.display = "inline-block";

    restartBtn.style.display = "none";
    showQuestion();


});





