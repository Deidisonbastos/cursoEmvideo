function carregar(){
    let msg = document.getElementById("msg1")
    let img1 = document.getElementById("imagem")
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `<strong>Agora são ${hora} horas!</strong>`
    if (hora >= 0 && hora < 12) {
        // Bom Dia //
        img1.src = "/Banco de Imagens/amanhecer.png"
        document.body.style.background = "#da682c"
        } else if (hora >=12 && hora < 18) {
        // Boa Tarde //
        img1.src = "/Banco de Imagens/tardes.png"
        document.body.style.background = "#fdd59a"
    }else {
        // Boa Noite!//
        img1.src = "/Banco de Imagens/anoitecer.png"
        document.body.style.background = "#0a7e8d"
    }
}



