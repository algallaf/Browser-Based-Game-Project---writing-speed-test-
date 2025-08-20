const sentences_easy = [
    "The sun is bright",
    "Cats like milk",
    "I love coding"];
const sentences_medium = [
    "The quick brown fox jumps over the lazy dog",
    "Typing games improve your speed and accuracy",
    "JavaScript makes web pages interactive"
];
const sentences_hard = [
    "Despite the rain, she decided to go for a long walk, umbrella in hand.",
    "Typing tests can measure both speed and accuracy—two essential skills.",
    "It's important to practice consistently if you want to see real improvement."];

let best_score = 0;
let startTime = 0;
let targetSentence = "";
let correctchars = 0;
let totalChars = 0;
let timers;
let timeleft = 30;

// UI ELEMENTS
const timerEl = document.getElementById("timer");
const startButton = document.getElementById("start-button");
const easyButton = document.getElementById("easy-button");
const mediumButton = document.getElementById("medium-button");
const hardButton = document.getElementById("hard-button");



function startGame(difficulty) {
    if (difficulty ==="easy") {
        targetSentence = sentences_easy[Math.floor(Math.random() * sentences_easy.length)];
    } else if (difficulty === "medium") {
        targetSentence = sentences_medium[Math.floor(Math.random()* sentences_medium.length)];
    } else {
            targetSentence = sentences_hard[Math.floor(Math.random() * sentences_hard.length)];
    }

    setTheme();

    timeleft = 30;
    timerEl.innerHTML = `Time is ${timeleft}`;
    document.getElementById("input-text").disabled = false;
    document.getElementById("target-text").innerHTML = targetSentence;
    document.getElementById("input-text").value = "";
    document.getElementById("results").innerHTML = "";
    document.getElementById("best-score").innerHTML = "";
    document.getElementById("input-text").addEventListener("input" , texttyped)
    clearInterval(timers);
    starttimer();
}

function setTheme(level) {
    document.body.className = level;
}

function starttimer() { 
    timers = setInterval(() => {
    document.getElementById("timer").innerHTML =`Time is ${timeleft}`;
    timeleft--;
    if (timeleft < 0) {
        gameover(false);
        clearInterval(timers);
        document.getElementById("input-text").removeEventListener("input" , texttyped);
    }
    }
    , 1000)
}


function texttyped () {
    let inputtext = document.getElementById("input-text").value;

    correctchars = 0;

    for ( let i = 0 ; i < targetSentence.length; i++) {
        if (inputtext[i] === targetSentence[i]) correctchars++;  
    }

    if ( inputtext === targetSentence) {
        gameover (true);
    }
}


function gameover (isOver) {
        document.getElementById("input-text").removeEventListener("input", texttyped);
        document.getElementById("input-text").disabled =true;
        clearInterval(timers);

    if (isOver) {
        let typedwords = document.getElementById("input-text").value.split(" ").length;
        let timetaken =30 - timeleft;
        let correctchars2 = typedwords / 5;
        let wpm = (correctchars2 / timetaken) ;
        if (wpm > best_score) {
            best_score = wpm;
        }
        document.getElementById("results").innerHTML = `You won! time taken: ${timetaken} sec ,the correct characters is ${correctchars}`;
        document.getElementById("best-score").innerHTML = `Best score: ${best_score} WPM`;

    } else {
        document.getElementById("results").innerHTML = `You lose!`;
    }

};


// Event Listeners

easyButton.addEventListener("click", (evt) => {
    startGame('easy'); 
    setTheme('easy')  
});

mediumButton.addEventListener("click", (evt) => {
    startGame('medium'); 
    setTheme('medium')  
});

hardButton.addEventListener("click", (evt) => {
    startGame('hard'); 
    setTheme('hard')  
});