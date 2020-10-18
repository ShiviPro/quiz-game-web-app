document.addEventListener('DOMContentLoaded', function () {
const quizData = [
    {
        question: "How old is the sun ?",
        a: "3.2 billion years",
        b: "1.8 billion years",
        c: "4.6 billion years",
        d: "none of the above",
        correct: "c"
    }, {
        question: "What is the most used programming language in 2019 ?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d"

    }, {
        question: "Who is the president of Zimbabwe ?",
        a: "Nelson Chamisa",
        b: "Emmerson Mnangagwa",
        c: "Robert Mugabe",
        d: "Jonathan Moyo",
        correct: "b"
    }, {
        question: "What does CTF stand for in contect to Cyber Security ?",
        a: "Capture The Flag", 
        b: "Caught The Snake", 
        c: "Crack The System",
        d: "Catch The Ship",
        correct: "a"
    }, {
        question: "What year was JavaScript launched ?", 
        a: "1997", 
        b: "1994",
        c: "1995",
        d: "1991", 
        correct: "c"       
    }
];

const answerEls = document.querySelectorAll('.answer');
const questionEl = document.querySelector('#question');

const a_text=document.querySelector('#a_text');
const b_text=document.querySelector('#b_text');
const c_text=document.querySelector('#c_text');
const d_text=document.querySelector('#d_text');

var submitBtn = document.querySelector('#submit');

let currentQuiz = 0;

var score = 0;
var max_score = quizData.length;

loadQuiz();

function loadQuiz() {
    resetEl();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}


submitBtn.addEventListener('click', function () {

    const answer = isSelected();

    if(answer)
    {
        if(answer === quizData[currentQuiz].correct) {
            score+=1;
        }
        
        currentQuiz++;
        
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            const body = document.querySelector('#quiz-body');
            body.innerHTML="<h2 style='padding: 20px;'>You have scored a total of "+score+"/"+max_score+"points.</h2>";
        }

    }
    

   
    
});

function isSelected() {

   
   var answer = undefined;
   
   answerEls.forEach(answerEl => {
       if(answerEl.checked) {
            answer = answerEl.id;
       }
   }); 
   return answer;

}

function resetEl() {

   answerEls.forEach(answerEl => {
        answerEl.checked = false;
   });

   
}


});