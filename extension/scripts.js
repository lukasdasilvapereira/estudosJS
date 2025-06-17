let myLeads = []
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el")
let inputBtn = document.getElementById("input-btn")


inputBtn.addEventListener("click", function () {
    if (inputEl.value === "") {
        alert = "Write something"
    } else {
        myLeads.push(inputEl.value)
        renderItems()
        inputEl.value = ""
    }
})

function renderItems() {

    let listItems = "";

    for (let i = 0; i < myLeads.length; i++) {
        listItems += "<li> <a href>" + myLeads[i] + " </a> </li>"
    }

    ulEl.innerHTML = listItems
}