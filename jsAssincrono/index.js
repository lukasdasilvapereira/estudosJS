function multiplicacao(a, b, callback) {
    let op = a * b
    console.log(op)
    callback(a, b)
}

function soma(a, b) {
    let op = a + b
    console.log(op)
}

multiplicacao(2, 4, () => {
    soma(100, 20)
})

function entrega(pacote, casa, callback) {
    console.log(`Aqui está sua ${pacote}, senhor da casa ${casa}`)
    callback(pacote, casa)
}

function recebimento(greeting) {
    console.log(`${greeting}`)
}

entrega("Pizza", 401, () => {
    recebimento("Obrigado")
})

function bomDia(callback) {
    console.log("Bom dia!")
    callback()
}

function boaTarde(boa) {
    console.log(`${boa}`)
}

bomDia(() => {
    boaTarde("Boa tarde!")
})

function hello(callback) {
    console.log("Hello!")
    callback()
}

function goodBye() {
    console.log("Goodbye!")
}

hello(goodBye)

// types of callbacks 

setTimeout(() => {
    console.log('I am beatiful')
}, 2000);


function buenas(id) {
    console.log("Lucas")
}

setTimeout(buenas, 2000)

const call = new Promise((resolve, reject) => {
    const c = Math.floor(Math.random() * 2)

    if (c == 0) {
        resolve()
    }
    else {
        reject()
    }
})

call.then(() => {
    console.log("Sucess")
})

call.catch(() => {
    console.error('Something went wrong')
})

// fetch api with async await

const fetchPokemon = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(`${error}`)
    }

};
fetchPokemon(2)