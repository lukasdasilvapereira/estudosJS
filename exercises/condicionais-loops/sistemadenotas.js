let nota = Math.floor(Math.random() * 10) + 1

if(nota > 7) {
    console.log(`A sua nota é ${nota}, você está APROVADO`)
} else if(nota < 6) {
    console.log(`A sua nota é ${nota}, você está REPROVADO`)
} else {
    console.log(`A sua nota é ${nota}, você está em RECUPERAÇÃO`)
}