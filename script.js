const messages = [
    "Jesteś Pewna?",
    "Naprawde??",
    "Jesteś 100% pewna?",
    "Pookie proszę...",
    "Poprostu to przemyśl!",
    "Jeśli powiesz nie, będę smutny...",
    "Będę bardzo smutny...",
    "Będę bardzo bardzo smutny...",
    "OK spoko przestane prosić...",
    "Żartowałem, prosze powiedz tak! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}