function criptografar(texto){
    var textoCriptografado = '';

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == 'a') {
            textoCriptografado += 'ai';
        } else if (texto[i] == 'e'){
            textoCriptografado += 'enter';
        } else if (texto[i] == 'i'){
            textoCriptografado += 'imes';
        } else if (texto[i] == 'o'){
            textoCriptografado += 'ober';
        } else if (texto[i] == 'u'){
            textoCriptografado += 'ufat';
        } else {
            textoCriptografado += texto[i];
        }
    }

    return textoCriptografado;
}

function descriptografar(texto){
    for(var i = 0; i < chaveCriptografia.length; i++){
        if(texto.includes(chaveCriptografia[i][1])){
            texto = texto.replaceAll(chaveCriptografia[i][1], chaveCriptografia[i][0])
        }
    }
    return texto;
}

function limparAreaTexto(){
    //Selecao dos HTMLs renderizados na pagina
    areaTextoCriptografado = document.getElementById('exibicaoMensagem');
    var imgAreaTextoCriptografado = areaTextoCriptografado.querySelector('img');
    var h2AreaTextoCriptografado = areaTextoCriptografado.querySelector('h2');
    var pAreaTextoCriptografado = areaTextoCriptografado.querySelector('p');
   //Limpeza das TAGs HTMLs
    imgAreaTextoCriptografado.src = '';
    h2AreaTextoCriptografado.textContent = '';
    pAreaTextoCriptografado.textContent = '';
}

function exibirMensagemNaoEncontrada(){
    areaTextoCriptografado = document.getElementById('exibicaoMensagem');
    var imgAreaTextoCriptografado = areaTextoCriptografado.querySelector('img');
    var h2AreaTextoCriptografado = areaTextoCriptografado.querySelector('h2');
    var pAreaTextoCriptografado = areaTextoCriptografado.querySelector('p');

    imgAreaTextoCriptografado.src = 'recursos/img/notfound.svg';
    h2AreaTextoCriptografado.textContent = 'Nenhuma mensagem encontrada';
    pAreaTextoCriptografado.textContent = 'Digite um texto que você deseja criptografar ou descriptografar.';
}

function exibirMensagem(){
    pTextoExibido = document.getElementById('mensagemCriptografadaExibida');
    pTextoExibido.textContent = mensagemExibida;
}

function BotaoCopiar(){
    botaoCopiar = document.createElement('button');
    botaoCopiar.type = 'button';
    botaoCopiar.innerHTML = 'Copiar texto';
    botaoCopiar.className = 'botaoCopiar';

    areaTextoCriptografado.appendChild(botaoCopiar);

    areaTextoCriptografado.onclick = function(){
       navigator.clipboard.writeText(pTextoExibido.textContent);
    }
}

//Selecao HTML
var textArea = document.querySelector('textarea');
var btnCriptografar = document.getElementById('criptografar');
var btnDescriptografar = document.getElementById('descriptografar');

//Variaveis a ser utilizadas
var textoCriptografado = '';
var botaoCopiar;
var pTextoExibido;
var mensagemExibida = '';
var areaTextoCriptografado;

//matriz com a chaves de descriptografia
var chaveCriptografia = [['e', 'enter'], ['a', 'ai'], ['i', 'imes'], ['o', 'ober'], ['u', 'ufat']];

btnCriptografar.onclick = function(){

    var texto = textArea.value;
    mensagemExibida = criptografar(texto);

    if(mensagemExibida){
        limparAreaTexto();
        exibirMensagem();
        BotaoCopiar();
    } else {
        alert('Digite um texto para ser criptografado');
        exibirMensagemNaoEncontrada();
        botaoCopiar.hidden = true;
        pTextoExibido.textContent = ''
    }
    textArea.value = ''
}

btnDescriptografar.onclick = function(){
    
    var texto = textArea.value;
    mensagemExibida = descriptografar(texto);

    if(mensagemExibida){
        limparAreaTexto();
        exibirMensagem();
        BotaoCopiar();
        pTextoExibido.textContent = mensagemExibida;
    } else {
        alert('Digite um texto para ser criptografado');
    }
    textArea.value = ''
}