const question = [
    {
        question: "Which is the largest animal in the world?",
        answer: [
            {text: "Shark", correct: false },
            {text: "Blue Whale", correct: true },
            {text: "Elephant", correct: false },
            {text: "Giraffe", correct: false }
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answer: [
            {text: "Kalahari", correct: false },
            {text: "Gobi", correct: false },
            {text: "Sahara", correct: false },
            {text: "Antarctica", correct: true }
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answer: [
            {text: "Asia", correct: false },
            {text: "Australia", correct: true },
            {text: "Arctic", correct: false },
            {text: "Africa", correct: false }
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answer: [
            {text: "Vatican City", correct: true },
            {text: "Bhutan", correct: false },
            {text: "Nepal", correct: false },
            {text: "Shri Lanka", correct: false }
        ]
    }
];

const questionElement = document.querySelector('#question');
const ansBtn = document.querySelector('.answer-button');
const nextBtn = document.querySelector('#next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = 'NEXT';
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;

    questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

    currentQuestion.answer.forEach((answer)=>{
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        ansBtn.append(button);
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click',selectAnswer)
    })

}

function resetState(){
    nextBtn.style.display = 'none';
    while(ansBtn.firstChild){
        ansBtn.removeChild(ansBtn.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    if(selectedBtn.dataset.correct === "true"){
        selectedBtn.classList.add('correct')
        score++
    }
    else{
        selectedBtn.classList.add('incorrect');
    }
    Array.from(ansBtn.children).forEach((button)=>{
        if(button.dataset.correct === 'true'){
            button.classList.add('correct')
        }
        button.disabled = true
    });
    nextBtn.style.display = 'block'
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score}  out of ${question.length}`;
    nextBtn.innerHTML = "Play Again"
    nextBtn.style.display = 'block'
}

function handleNextBtn(){
        currentQuestionIndex++;
        if(currentQuestionIndex < question.length){
            showQuestion();
        }
        else{
            showScore()
        }
}

nextBtn.addEventListener('click',()=>{
   if( currentQuestionIndex < question.length){
        handleNextBtn();
   }
   else{
        startQuiz();
   }
})

startQuiz();