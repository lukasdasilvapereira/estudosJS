const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

function render() {
    let contain = document.getElementById("container")
    for(let i = 0; i < imgs.length; i++) {
        contain.innerHTML += `<img class ="team-equipe" src="${imgs[i]}">`
    }
}

render()



