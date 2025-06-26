// ARROW FUNCTION

const hello = (name, age) => {console.log
    (`Hello ${name}`)
    console.log(`You are ${age} years old`)
}

hello("Lucas", 19)

const adios = () => console.log("Adios")

adios() 

setTimeout(() => {
    console.log("E, ai!")
}, 3000)


// SETTIMEOUT COM CALLBACK

function hola() {
    console.log("Hola")
}

setTimeout(hola, 2000)

//SET INTERVAL

function bora() {
    console.log("Boraaaa")
}

//setInterval(bora, 3000)
clearInterval(bora)


function brazil() {
    console.log("Brazil is champions")
}

setTimeout(brazil, 3000)

// clear interval 

let x = 8

const myTimer = setTimeout(() => {
    console.log(`O x é igual a ${x}`)
}, 3000)

if(x > 3) {
    console.log("O x passou de 3")
    clearInterval(myTimer)
}