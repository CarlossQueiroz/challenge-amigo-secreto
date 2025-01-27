//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let inputAmigo = document.getElementById("amigo");

function checkInputAmigo() {
    const checkInput = inputAmigo.value;

    if (checkInput === "") {
        alert("Por favor, insira um nome.");
    }
    else {
        amigos.push(checkInput)
        limparCampo();
    }
}

function adicionarAmigo() {
    checkInputAmigo();
}

function limparCampo() {
    inputAmigo.value = '';
}

