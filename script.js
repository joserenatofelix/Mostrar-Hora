function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src='Imagens/fotomanha.png'
        document.body.style.background = '#F79948'
        msg.innerHTML = `Bom dia <br> Agora são ${hora} horas e ${min} minutos.`

    } else if ( hora >= 12 && hora < 18) {
       //BOA TARDE!
       img.src='Imagens/fototarde.png'
       document.body.style.background = '#89BAF0'
       msg.innerHTML = `Boa tarde <br> Agora são ${hora} horas e ${min} minutos.`

    } else {
       //BOA NOITE!
       img.src='Imagens/fotonoite.png'
       document.body.style.background = '#201EF0'
       msg.innerHTML = `Boa noite <br> Agora são ${hora} horas e ${min} minutos.`
    }
}
 
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if(idade >=0 && idade < 12) {
                //CRIANÇA
            img.setAttribute('src', 'Imagens/bebe_menino.png')
            } else if (idade < 21) {
                //JOVEM
            img.setAttribute('src', 'Imagens/jovem_homem.png')
            } else if (idade < 55){
                //ADULTO
            img.setAttribute('src', 'Imagens/adulto_homem.png')
            } else {
                //IDOSO
            img.setAttribute('src', 'Imagens/idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >=0 && idade < 12) {
                //CRIANÇA
            img.setAttribute('src', 'Imagens/bebe_menina.png')
            } else if (idade < 21) {
                //JOVEM
            img.setAttribute('src', 'Imagens/jovem_mulher.png') 
            } else if (idade < 55){
                //ADULTO
            img.setAttribute('src', 'Imagens/adulto_mulher.png')
            } else {
                //IDOSO
            img.setAttribute('src', 'Imagens/idosa.png')
            }
        }    
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
    
}
