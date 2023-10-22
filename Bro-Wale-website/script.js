const text = ["I am a Graphic designer", "I am an Interior Decorator", "I am an Event planner"];
let currentText = 0;
let letter = 0;
let typingDisplay = document.getElementById("typingText");

(function type() {
    // Check if current text has completed typing
    if (letter < text[currentText].length) {
        typingDisplay.textContent += text[currentText].charAt(letter);
        letter++;
        setTimeout(type, 100);  // Determines the speed of typing
    } else {
        // Pause before starting a new sentence
        setTimeout(() => {
            typingDisplay.textContent = "";
            currentText = (currentText + 1) % text.length;
            letter = 0;
            type();
        }, 1000);  // Determines the pause duration between texts
    }
})();
