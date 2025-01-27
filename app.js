//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let inputAmigo = document.getElementById("amigo");

function sortearAmigo() {
    let n = amigos.length;
    if (n != 0) {
        let numeroSorteado = Math.random() * n;
        console.log(numeroSorteado);
        Math.floor(numeroSorteado);
        console.log(Math.floor(numeroSorteado));

        console.log(amigos[Math.floor(numeroSorteado)]);
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = amigos[Math.floor(numeroSorteado)];
    }
    else {
        alert("Nenhum nome cadastrado")
    }
}

listarAmigos();

function checkInputAmigo() {
    const checkInput = inputAmigo.value;

    if (checkInput === "") {
        alert("Por favor, insira um nome.");
    }
    else {
        amigos.push(checkInput)
        listarAmigos();
        limparCampo();
    }
}

function adicionarAmigo() {
    checkInputAmigo();
}

function limparCampo() {
    inputAmigo.value = '';
}

function listarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const item = document.createElement("li");
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}
