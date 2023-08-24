const questions=[
    {
        question:"Which is the Largest River in India",
        answers:[
            {text:"Kaveri", correct: false},
            {text:"Yamuna", correct: false},
            {text:"Ganga", correct: false},
            {text:"Indus", correct: true},
        ]
    },
    {
        question:"Which one is a fur-bearing animal?",
        answers:[
            {text:"Hen", correct: false},
            {text:"Cat", correct: true},
            {text:"Dog", correct: false},
            {text:"Tiger", correct:false},
        ]
    },
    {
        question:"What star shines in the day and provides light?",
        answers:[
            {text:"Moon", correct: false},
            {text:" Venus", correct: false},
            {text:"Mars", correct: false},
            {text:". Sun", correct: true},
        ]
    },
    {
        question:" What is the boiling point of water?",
        answers:[
            {text:"100°C", correct: true},
            {text:"50°C", correct: false},
            {text:"75°C", correct: false},
            {text:"150°C", correct: false},
        ]
    }
];




const Question = document.querySelector(".question");
const Choice= document.getElementById("answer-button");
const nextBtn = document.getElementById("next");
console.log(Question);
console.log(Choice);
let currentQuestionIndex =0;
let score =0;

function startQuiz(){
    currentQuestionIndex =0;
    score=0;
    nextBtn.innerHTML ="Next";
    showQuestion();

}
function showQuestion(){
    reset();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    Question.innerHTML = questionNo + "." + currentQuestion.question;
    console.log(currentQuestion);

    currentQuestion.answers.forEach((answer=>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        Choice.appendChild(button);
        if(answer.correct){
           button.dataset.correct = answer.correct;
       }

        button.addEventListener("click", selectAnswer);

    }));
   

}
function reset(){
    nextBtn.style.display="none";
    while(Choice.firstChild){
        Choice.removeChild(Choice.firstChild);
    }
    
}

function selectAnswer(e){
    const selectBtn = e.target;
    console.log(selectBtn);
    const isCorrect = selectBtn.dataset.correct ==="true";
    if(isCorrect){
        selectBtn.classList.add('correct');
        score++;
    }else{
        selectBtn.classList.add('incorrect');
    }
    Array.from(Choice.children).forEach(button=>{
        if(button.dataset.correct==='true'){
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextBtn.style.display ="block";
}
nextBtn.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
    nextQuestion();
    }else{
        startQuiz();
    }
})

function nextQuestion(){
    currentQuestionIndex++;
if(currentQuestionIndex < questions.length){
    
    showQuestion();
}
else{
    showResult();
}
}

function showResult(){
    reset();
    Question.innerHTML =`your score is ${score} out of ${questions.length}`;
    nextBtn.innerHTML ="play Again";
    nextBtn.style.display="block"
}

startQuiz();
