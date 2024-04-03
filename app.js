let listaNumerosDaSorte = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',
    {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTexto('h1', 'Jogo Secreto');
    exibirTexto('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
     exibirTexto('h1', 'Acertou!');
     let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
     let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
     exibirTexto('p', mensagemTentativas)
     document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute > numeroSecreto){
            exibirTexto('p', 'O número secreto é menor');
        }
        else{
            exibirTexto('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementos = listaNumerosDaSorte.length;

    if (quantidadeDeElementos == numeroLimite) {
       listaNumerosDaSorte = [];
    }
    if (listaNumerosDaSorte.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaNumerosDaSorte.push(numeroEscolhido);
        console.log(listaNumerosDaSorte);
        return numeroEscolhido;
    }
}

//função que converte um valor em dólar
// function verificarChute() {
//     let chute = document.querySelector('input').value;
//     exibirTexto('p', chute*4.80);
//     limparCampo();
// }

//função que recebe um número como parâmetro e retorna o dobro desse número
// function verificarChute() {
//     let chute = document.querySelector('input').value;
//     console.log(chute*2);
// }

//função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
// function verificarChute() {
//     let chute = document.querySelector('input').value;
//     console.log(chute*chute);
    
// }

//função que limpa o campo após informar número errado
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

//função para reiniciar um novo jogo
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio;
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


// function reiniciarJogo() {
//     console.log('Olá mundo!');
// }

// //função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console
// function enviar(){
//     console.clear(); // Limpa o console
//     let nome = document.getElementById('inputNome').value;
//     console.log('Olá, '+ nome + "!");
// }