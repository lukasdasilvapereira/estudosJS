let sentence = ["Hello", "my", "name", "is", "Lucas", "and ", "I", "am", "learning", "JavaScript!"];
let greetingEl = document.getElementById("greeting-el");

function create() {
    for(let i = 0; i < sentence.length; i++) {
        greetingEl.textContent += sentence[i] + " "
    }
}


create();