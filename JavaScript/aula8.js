
/*Condições dentro de JavaScript 
if (Se - condição)
precisamos sempre criar um bloco {

} Esle (se não - condição) {
    
}    
*/

console.log("O console esta funcionado")

// condição simples // 
let vel = 10
console.log(`A velociadade do seu carro é: ${vel}`)
if (vel > 60) { // condição simples // 
    console.log("Voce ultrapassou a velocidade. MULTADO")
}
console.log("Dirifa sempre com sinto de segurança")

// Condição compostas //
let pais = "EUA"
if (pais == "Brasil") {
    console.log("Brasileira")
} else {
    console.log("Estrangeira")
}

// Condições aninhadas // 
let idade = 71
if (idade < 18) {
    console.log(`Sua idade é ${idade} anos, você é menor de idade`)
} else if (idade > 70) {
    console.log(`Sua idade é ${idade} anos, você é idoso!`)
} else
    console.log(`Sua idade é ${idade} anos, você é adulto!`)



// Condição aninhadas, puxando a hora atual //
let agora = new Date()
let hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log("Bom dia")
} else if (hora < 18) {
    console.log("Boa tarde!")
} else {
    console.log("Boa noite!")
}

// Switch // 
let agora = new Date()
let diaSem = agora.getDay()

/* Dias da Semana no Java Script
    0 = Domingo
    1 = Segunda
    2 - Terça
    3 - Quarta
    4 - Quinta
    5 - Sexta
    6 = Sabado
*/

switch (diaSem) {
    case 0:
        console.log("domingo")
        break
    case 1:
        console.log("Segunda-Feira")
        break
    case 2:
        console.log("Terça-Feira")
        break
    case 3:
        console.log("Quarta-Feira")
        break
    case 4:
        console.log("Quinta-Feira")
        break
    case 5:
        console.log("Sexta-Feira")
        break
    case 6:
        console.log("Sabado")
        break
    default:
        console.log("[ERRO] data invalida")
}
