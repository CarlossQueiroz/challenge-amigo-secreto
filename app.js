//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let inputAmigo = document.getElementById("amigo");

listarAmigos();

function adicionarAmigo() {
    const checkInput = inputAmigo.value.trim();

    if (checkInput === "") {
        alert("Por favor, insira um nome.");
    }
    else {
        amigos.push(checkInput);
        limparCampo();
        listarAmigos();
        console.log(amigos)
    }
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

function sortearAmigo() {
    let n = amigos.length;
    if (n != 0) {
        let gerarNumero = Math.random() * n;
        let numeroSorteado = Math.floor(gerarNumero);

        let resultado = document.getElementById("resultado");
        resultado.innerHTML = amigos[numeroSorteado];
    }
    else {
        alert("Nenhum nome cadastrado")
    }
}




