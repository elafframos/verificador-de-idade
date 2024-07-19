function verificar() { //Função
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os Dados e Tente novamente ')
    } else {
        var fsex = document.getElementsByName('radsex') //Esrá chamando o input do HTML
        var idade = ano - fano.value
        var gênero = ''
        var img = document.createElement('img') 
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 12) { //Se a idade for igual ou menor a 12 é uma criança
                //Criança
                img.setAttribute('src', 'menino.png') //Chamando a imagem
            } else if (idade < 20) { //Se a idade for menor a 20 é um jovem
                //Jovem
                img.setAttribute('src', 'homem.png') //Chamando a imagem
            } else if (idade < 50) { //Se a idade for menor a 50 é um adulto
                //Adulto
                img.setAttribute('src', 'meio.png') //Chamando a imagem
            } else { //Se a idade for maior a 50 é um idoso
                //Idoso
                img.setAttribute('src', 'idoso.png') //Chamando a imagem
            }

            
            } else if (fsex[1].checked) {

            gênero = 'Mulher'
            if (idade >=0 && idade < 12) { //Se a idade for igual ou menor a 12 é uma criança
                //Criança
                img.setAttribute('src', 'menina.png') //Chamando a imagem
            } else if (idade < 20) { //Se a idade for menor a 20 é uma jovem
                //Jovem
                img.setAttribute('src', 'mulher.png') //Chamando a imagem
            } else if (idade < 50) { //Se a idade for menor a 50 é um adulto
                //Adulto
                img.setAttribute('src', 'meia.png') //Chamando a imagem
            } else { //Se a idade for maior a 50 é um idosa
                //Idoso
                img.setAttribute('src', 'idosa.png') //Chamando a imagem
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos!`
        res.append(img) //Para fazer aparecer as imagens
    }
}
