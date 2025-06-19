let myLeads = []
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el")
let inputBtn = document.getElementById("input-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderItems()
}

inputBtn.addEventListener("click", function () {
    if (inputEl.value === "") {
        alert ("Write something")
    } else {
        myLeads.push(inputEl.value)
        inputEl.value = ""
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderItems()
    }
})

function renderItems() {

    let listItems = "";

    for (let i = 0; i < myLeads.length; i++) {
        listItems += `<li> 
        <a target='_blank' href='${myLeads[i]}'>
        ${myLeads[i]}
        </a>
         </li>`
    }

    ulEl.innerHTML = listItems
}

function deletar() {
    localStorage.clear("myLeads")
    ulEl.innerHTML = ""
}