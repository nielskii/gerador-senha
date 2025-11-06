let range = document.getElementById('rangeID')
let rangeValor = document.getElementById('rangeValor');
let btnGerar = document.getElementById('btnGerar');
let displayText = document.getElementById('displayText')
let btnCopiar = document.getElementById('btnCopiar')
btnGerar.addEventListener('click',function(){
    let valor = parseInt(range.value)
    rangeValores(valor)
    mudarNivel(valor)
    if(valor <=0){
        window.alert('Coloque o tamanho da senha')
        displayText.style.display = 'none'
    }
    else{
        gerarSenha(valor)
    }
})
function rangeValores(valor){
    range.addEventListener('input',function(){
    rangeValor.textContent = this.value;
    let valor = parseInt(this.value)
    mudarNivel(valor)
})   
}


function mudarNivel(valor){
    let nivelF = document.getElementById('nivelF');
    if (valor < 30) {
        nivelF.style.display = 'inline'
        nivelF.textContent = "Fraca";
        nivelF.style.color = "#FF4D4D";
    } else if (valor < 70) {
        nivelF.style.display = 'inline'
        nivelF.textContent = "Média";
        nivelF.style.color = "#FFA500";
    } else {
        nivelF.style.display = 'inline'
        nivelF.textContent = "Impenetrável";
        nivelF.style.color = "#168C40";
    }

}

function gerarSenha(valor){
let char = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789.,;:!?'…+-*/=%^~()[]{}<>@#$&_|\//"
let lista = char.split('');
let novaLista = []
let cont = 1
let acumulador = 0
while(cont <= valor){
    let aleatorio = secureChoice(lista)
    novaLista.push(aleatorio)
    acumulador +=1
    cont+=1
    }   
    let senha = novaLista.join('')
    console.log(senha)
    console.log('Tamanho:', senha.length)
    displayText.style.display = 'block'
    btnCopiar.style.display = 'block'
    displayText.value = senha
}

function secureChoice(char){
    const randomBuffer = new Uint32Array(1)
    crypto.getRandomValues(randomBuffer);
    const index = randomBuffer[0] % char.length
    return char[index]
}

function copiaSenha(){
    let copiaTexto = document.getElementById('displayText')
    copiaTexto.select()
    copiaTexto.setSelectionRange(0,99999)

    navigator.clipboard.writeText(copiaTexto.value);
    alert('Senha copiada: '+ copiaTexto.value)
}