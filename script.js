let timer;
let isWorkSession = true; // true for work, false for break
let minutes = 25;
let seconds = 0;
let isRunning = false;

const startButton = document.getElementById("startButton");
const resetButton = document.getElementById("resetButton");
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");

function startTimer() {
    if (isRunning) return;
    isRunning = true;

    timer = setInterval(function() {
        if (seconds === 0) {
            if (minutes === 0) {
                toggleSession();
            } else {
                minutes--;
                seconds = 59;
            }
        } else {
            seconds--;
        }

        minutesDisplay.textContent = minutes < 10 ? "0" + minutes : minutes;
        secondsDisplay.textContent = seconds < 10 ? "0" + seconds : seconds;
    }, 1000);
}

function toggleSession() {
    clearInterval(timer);
    isRunning = false;
    if (isWorkSession) {
        minutes = 5;
        seconds = 0;
        isWorkSession = false;
    } else {
        minutes = 25;
        seconds = 0;
        isWorkSession = true;
    }
    minutesDisplay.textContent = minutes < 10 ? "0" + minutes : minutes;
    secondsDisplay.textContent = seconds < 10 ? "0" + seconds : seconds;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    minutes = 25;
    seconds = 0;
    isWorkSession = true;
    minutesDisplay.textContent = "25";
    secondsDisplay.textContent = "00";
}

startButton.addEventListener("click", startTimer);
resetButton.addEventListener("click", resetTimer);
