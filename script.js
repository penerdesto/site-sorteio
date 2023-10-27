let flag = 0;
let participantes = [];
const vencedor = document.getElementById('resultado__sorteio');
let nParticipantes = '';

for (let i = 0; i < nParticipantes; i++) {
    participantes[i] = `Joao ${i + 1}`
}


function mostraParticipante(posicao) {
    if (posicao <= participantes.length && posicao >= 0) {
        vencedor.innerHTML = `${participantes[posicao]}`;
    }
    else {
        alert('Insira um número de 1 a 10!');
    }
}

function cadastrar() {
    for (let j = 0; j < nParticipantes; j++) {

        nome = prompt(`Insira o nome do ${j + 1} participante`);
        participantes[j] = nome;
    }
}

btCadastro = document.querySelector('.cadastrar');
btCadastro.onclick = function () {
    nParticipantes = Number(prompt('Insira o número de participantes '));
    if(!nParticipantes){
        alert('Insira um valor válido')
        return flag=0;
    }
    else{
    cadastrar()
    sorteia()
    return flag = 1;
    }
}

function sorteia(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

btVencedor = document.querySelector('.vencedor');
btVencedor.onclick = function () {
    if (flag == true) {
        mostraParticipante(sorteia(0, nParticipantes));
    }
    else {
        alert('Cadastre os paticipantes antes de sortear.')
    }
}





