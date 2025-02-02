document.getElementById('play-button').addEventListener('click', startGame);

const words = [
    { correct: "fuiste", incorrect: "fuistes" },
    { correct: "hubo", incorrect: "hubieron" },
    { correct: "dijiste", incorrect: "dijistes" },
    { correct: "viniste", incorrect: "vinistes" },
    { correct: "tranquilo", incorrect: "tranquilo" },
    { correct: "acércate", incorrect: "acercate" },
    { correct: "noche", incorrect: "noché" },
    { correct: "holocausto", incorrect: "holocausto" },
    { correct: "excepcional", incorrect: "exepcional" },
    { correct: "sustituir", incorrect: "sustitur" },
    { correct: "inmediatamente", incorrect: "imediatamente" },
    { correct: "rápidamente", incorrect: "rapidamente" },
    { correct: "examen", incorrect: "examen" },
    { correct: "limón", incorrect: "limon" },
    { correct: "árbol", incorrect: "arbol" },
    { correct: "éxito", incorrect: "exito" },
    { correct: "teléfono", incorrect: "telefono" },
    { correct: "américa", incorrect: "america" },
    { correct: "país", incorrect: "pais" },
    { correct: "introducción", incorrect: "introduccion" },
    { correct: "balcón", incorrect: "balcon" },
    { correct: "inglés", incorrect: "ingles" },
    { correct: "fantástico", incorrect: "fantastico" },
    { correct: "último", incorrect: "ultimo" },
    { correct: "baúl", incorrect: "baul" },
    { correct: "apple", incorrect: "aple" },
    { correct: "beautiful", incorrect: "beatiful" },
    { correct: "tomorrow", incorrect: "tomorow" },
    { correct: "necessary", incorrect: "necesary" },
    { correct: "receive", incorrect: "recieve" },
    { correct: "accommodation", incorrect: "acomodation" },
    { correct: "embarrass", incorrect: "embarass" },
    { correct: "millennium", incorrect: "millenium" },
    { correct: "privilege", incorrect: "privelige" },
    { correct: "recommend", incorrect: "reccomend" },
    { correct: "separate", incorrect: "seperate" },
    { correct: "definitely", incorrect: "definately" },
    { correct: "occurrence", incorrect: "ocurrence" },
    { correct: "questionnaire", incorrect: "questionaire" },
    { correct: "rhythm", incorrect: "rythm" },
    { correct: "conscientious", incorrect: "consciencious" },
    { correct: "acknowledgment", incorrect: "aknowledgment" },
    { correct: "leisure", incorrect: "liesure" },
    { correct: "maintenance", incorrect: "maintanance" },
    { correct: "occasion", incorrect: "ocassion" },
    { correct: "playwright", incorrect: "playright" },
    { correct: "supersede", incorrect: "supercede" },
    { correct: "liaison", incorrect: "liasion" },
    { correct: "conscience", incorrect: "concience" }
];

let points = 0;
let lives = 3;

function startGame() {
    document.getElementById('cover').classList.add('hidden');
    document.getElementById('game-title').classList.add('hidden');
    document.getElementById('play-button').classList.add('hidden');
    document.getElementById('game').classList.remove('hidden');
    displayWord();
}

function displayWord() {
    const wordIndex = Math.floor(Math.random() * words.length);
    const wordPair = words[wordIndex];

    const options = [wordPair.correct, wordPair.incorrect];
    options.sort(() => Math.random() - 0.5);

    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.addEventListener('click', () => checkAnswer(option === wordPair.correct));
        optionsContainer.appendChild(button);
    });

    document.getElementById('word').innerText = "Elige la opción correcta:";
}

function checkAnswer(isCorrect) {
    if (isCorrect) {
        points++;
        document.getElementById('points').innerText = points;
        if (points % 5 === 0) {
            alert('¡Subiste de nivel!');
        }
    } else {
        lives--;
        document.getElementById('lives').innerText = lives;
        if (lives === 0) {
            alert('Juego terminado');
            resetGame();
            return;
        }
    }
    displayWord();
}

function resetGame() {
    points = 0;
    lives = 3;
    document.getElementById('points').innerText = points;
    document.getElementById('lives').innerText = lives;
    document.getElementById('cover').classList.remove('hidden');
    document.getElementById('game').classList.add('hidden');
    document.getElementById('game-title').classList.remove('hidden');
    document.getElementById('play-button').classList.remove('hidden');
}
