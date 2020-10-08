const quizData = [
    {
        question: "Complete a frase: Um banco de dados _______ é um tipo de banco de dados que fornece acesso a pontos.. ",
        a: "Relacional",
        b: "Mysql",
        c: "java script",
        d: "Vai saber ",
        correct: "a",
    },
    {
        question: "Onde sao armazenados todos os dados de um banco de dados?",
        a: "Pastas",
        b: "Tabelas",
        c: "Arquivos ZIP",
        d: "Cerveja",
        correct: "b",
    },
    {
        question: "O que é uma tabela?",
        a: "A tabuada.",
        b: "Tabela de IMC.",
        c: "Uma simples estrutura de linhas e colunas.",
        d: "Mas vai saber...",
        correct: "c",
    },
    {
        question: "As colunas de uma tabela, tambem sao chamadas de:",
        a: "Atributos.",
        b: "Não faço ideia",
        c: "Variaveis",
        d: "Codigos",
        correct: "a",
    },
    {
        question: "O que um registro representa?",
        a: "Um unico item de dados estruturados em uma tabela.",
        b: "Um contador.",
        c: " 1+2 ",
        d: "Um dado.",
        correct: "a",
    },
    {
        question: "Os tipos de dados sao classificados em diferentes:",
        a: "3",
        b: "Colunas",
        c: "Tabelas.",
        d: "Categorias.",
        correct: "d",
    },
    {
        question: "O que são SGBDs?",
        a: "Sistemas de Gerenciamento de Banco de Datas",
        b: "Sistemas de Gerenciamento de Bancos de Dados.",
        c: "Sistemas de Gerenciamento de Bancos de Dias.",
        d: "'Sistemas de Gerenciamento de Bancos' de tava no texto?",
        correct: "b",
    },
    {
        question: "O que significa DML?",
        a: "Dia Mais Livre.",
        b: "Data Manipulation Language.",
        c: "Deus é mais Legal",
        d: "Data Manipulation Loop.",
        correct: "b",
    },
    {
        question: "Um banco de dados relacional é:",
        a: "Um tipo de banco de dados que armazena e fornece acesso a pontos de dados relacionados entre bancos.",
        b: "Um tipo de dado.",
        c: "Uma forma de conversar com o backend de uma aplicação.",
        d: "Um tipo de banco de dados que armazena e fornece acesso a pontos de dados relacionados entre si.",
        correct: "d",
    },
    {
        question: "Existe um limite para tabelas em um banco de dados?",
        a: "Sim",
        b: "Não",
        c: "Talve",
        d: "None of the above",
        correct: "b"
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            let mensagem = "";
            if (score => 7 && score < 10) {
                mensagem = "<p>Parabéns você realmente conhece muito sobre este assunto.</p>";
            }
            if (score => 4 && score < 7) {
                mensagem = "<p>Muito bem, você demonstrou conhecer um pouco sobre esse assunto.</p>";
            }
            if (score => 0 && score < 4) {
                mensagem = "<p>Navegue neste site e adquira conhecimentos sobre esse assunto e depois tente novamente para verificar o que aprendeu.</p > ";
            }
            quiz.innerHTML = `
                <h2>Você acertou ${score}/${quizData.length} Questões.</h2>
                ${mensagem}
                <button onclick="location.reload()">Reload</button>`
                ;


        }
    }
});