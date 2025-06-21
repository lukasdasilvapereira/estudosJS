//let errorEl = document.getElementById("error");

//function purchase() {
//    error.textContent = "Something went wrong. Please try again.";
//}

//let names = localStorage.getItem("name")

//console.log(names)

let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]

let btn = document.getElementById("janes")

btn.addEventListener("click", function() {
    console.log(data[0].score)
})