const welcome = document.getElementById("greeting-el")

function greetUser(greeting) {
    welcome.textContent = `${greeting}, Per Harald Borgen`
}

greetUser("WELCOMEEEE");