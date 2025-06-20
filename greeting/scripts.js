const welcome = document.getElementById("greeting-el")


                    //parameters inside of the function
function greetUser(greeting, name, emoji) {
    welcome.textContent = `${greeting}, ${name} ${emoji}`
}
        // arguments out of the function
greetUser("WELCOMEEEE", "Lucas", "👋");

function add(n1, n2) {
    return n1 + n2;
}

console.log(add(3,4))

function getFirst(arr) {
    return arr[0]
}

let first = getFirst(arr[35, 5 ,10])

console.log(first)