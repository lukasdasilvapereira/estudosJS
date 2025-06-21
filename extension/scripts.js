let myLeads = []
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el")
let inputBtn = document.getElementById("input-btn")
const deletar = document.querySelector(".delete");
const tabBtn = document.querySelector(".save")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderItems(myLeads)
}

tabBtn.addEventListener("click", function () {

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        inputEl.value = ""
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderItems(myLeads)
    })
})

function renderItems(leads) {

    let listItems = "";

    for (let i = 0; i < leads.length; i++) {
        listItems += `<li> 
        <a target='_blank' href='${leads[i]}'>
        ${leads[i]}
        </a>
         </li>`
    }

    ulEl.innerHTML = listItems
}

deletar.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    ulEl.innerHTML = ""
})


inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderItems(myLeads)
})

