let myLeads = []
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el")
let inputBtn = document.getElementById("input-btn")

//localStorage.setItem("myLeads", "https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal")

let name = localStorage.getItem("myLeads")

console.log(name)


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
        listItems += `<li> 
        <a target= '_blank' href='>${myLeads[i]}'>
        ${myLeads[i]}
        </a>
         </li>`
    }

    ulEl.innerHTML = listItems
}