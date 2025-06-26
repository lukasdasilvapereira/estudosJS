function multiplicacao(a, b, callback) {
    let op = a * b
    console.log(op)
    callback(a , b)
}

function soma(a , b){
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