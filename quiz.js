const quizDB = [
    {
        question: "Q1. Who was the first to discover India?",
        a: "Vasco da Gama",
        b: "Christopher Columbus",
        c: "Willem Janszoon",
        d: "None of the above",
        ans: "ans1"
    },
    {
        question: "Q2. What is the Capital of India?",
        a: "New Delhi",
        b: "Mumbai",
        c: "Kolkata",
        d: "None of the above",
        ans: "ans1"
    },
    {
        question: "Q3. Which is the national sport of India?",
        a: "Cricket",
        b: "Hockey",
        c: "Football",
        d: "Kabaddi",
        ans: "ans2"
    },
    {
        question: "Q4. Which is the national animal of India?",
        a: "Tiger",
        b: "Lion",
        c: "Horse",
        d: "None of the above",
        ans: "ans1"
    },
    {
        question: "Q5. When is India’s Independence Day celebrated?",
        a: "15th August",
        b: "26th January",
        c: "26th November",
        d: "None of the above.",
        ans: "ans1"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked)
        {
            answer = curAnsElem.id;
        }
        
    });
     return answer;
};

const deselectAll = () =>
{
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click',() =>
{
    const checkedAnswer = getCheckAnswer();

    if(checkedAnswer === quizDB[questionCount].ans)
    {
        score++;
    };

    questionCount++;
    deselectAll();
    
    if(questionCount < quizDB.length)
    {
        loadQuestion();
    }
    else
    {
        if(score == 5 || score == 4)
        {
        showScore.innerHTML = 
        `<h3> You scored ${score}/${quizDB.length} 👍</h3>
        <button class="btn" onclick="location.reload()">Play again</button>
    `;
    showScore.classList.remove('scoreArea');
    }
     else
    {
        showScore.innerHTML = 
        `<h3> You scored ${score}/${quizDB.length} 👎</h3>
        <button class="btn" onclick="location.reload()">Play again</button>
    `;
    showScore.classList.remove('scoreArea');
    }
}
});
