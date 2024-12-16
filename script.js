function updateCountdown() {
    const now = new Date();
    const newYear = new Date("January 1, 2025 00:00:00").getTime();
    const timeLeft = newYear - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60)) / 1000 / 60);
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    const greetingMessage = document.getElementById("greetingMessage");
    if (now.getMonth() === 11 && now.getDate() >= 24 && now.getDate() <= 26) {
        greetingMessage.textContent = "Merry Christmas! 🎄✨";
    } else if (now.getMonth() === 0 && now.getDate() <= 1) {
        greetingMessage.textContent = "Happy New Year 2025! 🎉🥂";
    } else {
        greetingMessage.textContent = "Merayakan Natal 2024 dan Membuat Masa Depan Cerah 2025! 🌟";
    }
}

function createDecoration() {
    const decoration = document.createElement("div");
    decoration.classList.add("decoration");
    decoration.style.left = Math.random() * window.innerWidth + "px";
    decoration.style.top = Math.random() * window.innerHeight + "px";
    decoration.style.fontSize = Math.random() * 30 + 20 + "px";
    const decorations = ["❄", "🎄", "🎁", "🎅", "⭐"];
    decoration.innerHTML = decorations[Math.floor(Math.random() * decorations.length)];
    document.body.appendChild(decoration);

    setTimeout(() => decoration.remove(), 10000);
}

setInterval(updateCountdown, 1000);
setInterval(createDecoration, 2000);

updateCountdown();

const musicControl = document.getElementById("musicControl");
const backgroundMusic = document.getElementById("backgroundMusic");

musicControl.addEventListener("click", () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        musicControl.textContent = "Pause Music";
    } else {
        backgroundMusic.pause();
        musicControl.textContent = "Play Music";
    }
});
