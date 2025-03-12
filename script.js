let noClickCount = 0;
const noButtonMessages = [
    "No",
    "Even if I give you chocolate?",
    "But pretty please?",
    "I'll make you cookies!",
    "I'll write you a poem!",
    "I'll sing you a song!",
    "I'll do your homework!",
    "I'll give you a hug!",
    "I'll be your best friend!",
    "I'll give you my heart!",
    "I'll give you my money!",
    "I'll give you my love!",
    "I'll give you everything!",
    "I'll give you kisses!",
];

// Add event listener to the "No" button
document.getElementById('noButton').addEventListener('click', function () {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');

    // Increase the size of the "Yes" button
    let currentSize = window.getComputedStyle(yesButton).fontSize;
    let newSize = parseFloat(currentSize) * 1.2; // Increase size by 20%
    yesButton.style.fontSize = newSize + 'px';

    // Change the text of the "No" button
    noClickCount++;
    if (noClickCount < noButtonMessages.length) {
        noButton.textContent = noButtonMessages[noClickCount];
    } else {
        noButton.textContent = noButtonMessages[noButtonMessages.length - 1]; // Keep the last message
    }

    // If the "Yes" button fills the screen, stop growing
    if (parseFloat(newSize) > window.innerWidth * 0.8) {
        yesButton.style.fontSize = window.innerWidth * 0.8 + 'px';
    }
});

// Add event listener to the "Yes" button
document.getElementById('yesButton').addEventListener('click', function () {
    alert("Yay! You made my day! ❤️");
});
