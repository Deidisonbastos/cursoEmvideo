
/*Condições dentro de JavaScript 
if (Se - condição)
precisamos sempre criar um bloco {

} Esle (se não - condição) {
    
}    
*/

console.log("O console esta funcionado")

let vel = 10
console.log(`A velociadade do seu carro é: ${vel}`)
if (vel > 60) { // condição simples // 
    console.log("Voce ultrapassou a velocidade. MULTADO")
    }
console.log("Dirifa sempre com sinto de segurança")

let pais = "EUA"
    if (pais == "Brasil") {
        console.log("Brasileira")
    } else {
        console.log("Estrangeira")
    }

let idade = 71
    if (idade < 18){
        console.log(`Sua idade é ${idade} anos, você é menor de idade`)
    } else if (idade > 70){
        console.log(`Sua idade é ${idade} anos, você é idoso!`)
    } else
        console.log(`Sua idade é ${idade} anos, você é adulto!`)




let agora = new Date()
let hora = agora.getHours()
    console.log(`Agora são exatamente ${hora} horas.`)
    if (hora < 12){
        console.log("Bom dia")        
    } else if(hora <18){
        console.log("Boa tarde!")let agora = new Date()  
    }else{
        console.log("Boa noite!")
    }
