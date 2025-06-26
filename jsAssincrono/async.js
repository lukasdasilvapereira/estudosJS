function primeiraFuncao() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Espera eu")
            resolve()
        })
    })
}

async function segundaFuncao() {
    console.log("Iniciou")

    await primeiraFuncao()

    console.log("Terminou")
}

segundaFuncao()

// PRÁTICO

function getUser(id) {
    return fetch(`https://reqres.in/api/users?id=${id}`)
        .then((data) => data.json())
        .catch((err) => console.log(err))
}

async function showName(id) {

    try {
        const user = await getUser(id)
        console.log(`Teu nome é: ${user.data.name}`)
    } catch (error) {
        console.log(`${error}`)
    }
}

showName(3)


function walkDog() {
    return new Promise((resolve, reject) => {
        let walked = true

        if(walked) {
            console.log("You walked with the dog")
        } else {
            console.log('You DIDNT WALK THE DOG')
        }
    })
}

function takeoutTrash() {
    return new Promise((resolve, reject) => {
        let took = false;

        if(took) {
            console.log("You took out the trash")
        } else {
            console.log("YOU DIDNT?")
        }
    })
}


async function displayDog() {
    const walk = await walkDog()
    console.log(walk)
}

async function tookOut() {
    const tok = await takeoutTrash()
    console.log(tok)
}

tookOut()
displayDog()
