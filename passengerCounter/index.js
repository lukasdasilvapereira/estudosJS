let count = 0;
let countEl = document.getElementById("counter");
let saveEl = document.getElementById("save-line");

function increment() {
    count += 1;
    countEl.innerHTML = count;
}

function save() {
    let bothSave = `${count} - `;
    saveEl.textContent += bothSave;
    count = 0;
    countEl.textContent = count;
}
