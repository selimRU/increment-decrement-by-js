let startTime;
let intervalId;
let running = false;

function startStop() {
    if (running) {
        clearInterval(intervalId);
        document.getElementById("startStopButton").textContent = "Start";
    } else {
        startTime = Date.now() - (startTime || 0);
        intervalId = setInterval(updateDisplay, 1000);
        document.getElementById("startStopButton").textContent = "Stop";
    }
    running = !running;
}

function updateDisplay() {
    const currentTime = Date.now() - startTime;
    const hours = Math.floor(currentTime / 3600000);
    const minutes = Math.floor((currentTime % 3600000) / 60000);
    const seconds = Math.floor((currentTime % 60000) / 1000);
    document.getElementById("display").textContent =
        pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
}

function pad(num) {
    return num.toString().padStart(2, "0");
}

function reset() {
    clearInterval(intervalId);
    running = false;
    document.getElementById("startStopButton").textContent = "Start";
    document.getElementById("display").textContent = "00:00:00";
}

document.getElementById("startStopButton").addEventListener("click", startStop);
document.getElementById("resetButton").addEventListener("click", reset);