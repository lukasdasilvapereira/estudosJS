let opened = document.getElementById("open")

opened.addEventListener("click", function() {
    console.log("I wanna open the box!")
})

let divContainer = document.querySelector(".container")

divContainer.innerHTML = `<button onclick= 'buy()'>BUY</button>`

function buy() {
    divContainer.innerHTML += "<p>Thank you for buying</p>"
}