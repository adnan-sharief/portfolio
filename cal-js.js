let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        handleInput(e.target.innerText);
    });
});

// Function to handle both click and keyboard input
function handleInput(input) {
    switch (input) {
        case 'C':
            display.innerText = '';
            break;
        case '=':
            try {
                display.innerText = eval(display.innerText);
            } catch {
                display.innerText = "Error";
            }
            break;
        case '←':
            if (display.innerText) {
                display.innerText = display.innerText.slice(0, -1);
            }
            break;
        default:
            display.innerText += input;
    }
}

document.addEventListener('keydown', (event) => {
    let key = event.key;

    if (key >= "0" && key <= "9") { // Numbers
        handleInput(key);
    } else if (["+", "-", "*", "/", "(", ")", "."].includes(key)) { // Operators
        handleInput(key);
    } else if (key === "Enter") { // Equals
        handleInput("=");
    } else if (key === "Backspace") { // Backspace
        handleInput("←");
    } else if (key === "Escape") { // Clear
        handleInput("C");
    }
});
