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
document.getElementById("input-text").disabled = true;
document.getElementById("input-text").style.visibility = "hidden";
document.getElementById("timer").style.visibility = "hidden";
document.getElementById("game-title").style.fontSize = "80px";
document.getElementById("game-level").style.fontSize = "35px";

const buttons = document.querySelectorAll("#difficulty-buttons button");
buttons.forEach(btn => {
    btn.style.fontSize = "20px";
    btn.style.width = "200px";
    btn.style.height = "150px";
}
);


// UI ELEMENTS
const timerEl = document.getElementById("timer");
const easyButton = document.getElementById("easy-button");
const mediumButton = document.getElementById("medium-button");
const hardButton = document.getElementById("hard-button");



function startGame(difficulty) {
    if (difficulty === "easy") {
        targetSentence = sentences_easy[Math.floor(Math.random() * sentences_easy.length)];
    } else if (difficulty === "medium") {
        targetSentence = sentences_medium[Math.floor(Math.random() * sentences_medium.length)];
    } else {
        targetSentence = sentences_hard[Math.floor(Math.random() * sentences_hard.length)];
    }

    timeleft = 30;
    timerEl.innerHTML = `Time left ${timeleft}s`;
    document.getElementById("input-text").disabled = false;
    document.getElementById("target-text").innerHTML = targetSentence;
    document.getElementById("input-text").value = "";
    document.getElementById("input-text").addEventListener("input", texttyped)
    document.getElementById("input-text").style.visibility = "visible";
    document.getElementById("timer").style.visibility = "visible";
    document.getElementById("game-level").style.display = "none";
    document.getElementById("instaqshin").style.display = "none";

    clearInterval(timers);
    starttimer();
    buttons.forEach(btn => {
        btn.style.fontSize = "20px";
        btn.style.width = "100px";
        btn.style.height = "100px";
    }
    );
    document.getElementById("game-title").style.fontSize = "50px";
}


function setTheme(level) {
    document.body.className = level;
}

function starttimer() {
    timers = setInterval(() => {
        document.getElementById("timer").innerHTML = `Time left ${timeleft}s`;
        timeleft--;
        if (timeleft < 0) {
            gameover(false);
            clearInterval(timers);
            document.getElementById("input-text").removeEventListener("input", texttyped);
        }
        if (timeleft < 10) {
            timerEl.style.borderColor = "#e74c3c";
            timerEl.style.color = "#e74c3c";
        } else {
            timerEl.style.borderColor = "#3498db";
            timerEl.style.color = "#2c3e50";
        }
    }
        , 1000)
}


function texttyped() {
    let inputtext = document.getElementById("input-text").value;
    correctchars = 0;
    let displayHTML = "";

    for (let i = 0; i < targetSentence.length; i++) {
        if (i < inputtext.length) {
            if (inputtext[i] === targetSentence[i]) {
                displayHTML += `<span class = 'correct'>${targetSentence[i]}</span>`;
                correctchars++;
            } else {
                displayHTML += `<span class = 'incorrect'>${targetSentence[i]}</span>`;
            }
        } else {
            displayHTML += targetSentence[i];
        }
    }
    if (inputtext.length >= targetSentence.length) {
        gameover(inputtext === targetSentence);
    }
    document.getElementById("target-text").innerHTML = displayHTML;
};


function gameover(isOver) {
    document.getElementById("input-text").removeEventListener("input", texttyped);
    document.getElementById("input-text").disabled = true;
    clearInterval(timers);

    let popup = document.getElementById("popup");
    let popuptitle = document.getElementById("popup-title");
    let popupmassege = document.getElementById("popup-messege");
    let popupcontent = document.getElementById("popup-content");
    popup.style.display = "flex";
    popupcontent.style.display = "flex";


    if (isOver) {
        let timetaken = 30 - timeleft;
        let typedwords = document.getElementById("input-text").value.split(" ").length;
        let wpm = Math.floor(typedwords * 60 / timetaken);

        if (wpm > best_score) {
            best_score = wpm;
        }
        popuptitle.innerHTML = "You Won!";
        popupmassege.innerHTML = ` time taken: ${timetaken} sec ,the correct characters is ${correctchars}, WPM : ${wpm},
        Best score: ${best_score} WPM`;
    } else {
        let timetaken = 30 - timeleft;
        let typedwords = document.getElementById("input-text").value.split(" ").length;
        let wpm = Math.floor(typedwords * 60 / timetaken);
        popuptitle.innerHTML = "You lose!";
        popupmassege.innerHTML = ` time taken: ${timetaken} sec , WPM : ${wpm},
        Best score: ${best_score} WPM`;
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

document.getElementById("popup-close").addEventListener("click", () => {
    document.getElementById("popup").style.display = "none";
});