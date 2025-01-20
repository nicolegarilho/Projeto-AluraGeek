// js/script.js

// URL da API JSON Server
const API_URL = "http://localhost:3000/produtos";

// Selecionar elementos do DOM
const produtosContainer = document.getElementById("produtos-container");
const form = document.querySelector("form");
const nomeInput = document.querySelector("#nome");
const valorInput = document.querySelector("#valor");
const imagemInput = document.querySelector("#imagem");

// Função para buscar produtos da API e renderizá-los
async function listarProdutos() {
    try {
        const resposta = await fetch(API_URL);
        const produtos = await resposta.json();

        produtosContainer.innerHTML = ""; // Limpar o container antes de renderizar
        produtos.forEach(produto => {
            const li = document.createElement("li");
            li.classList.add("caixa_produto");

            li.innerHTML = `
                <img class="imagem_produto" src="${produto.imagem}" alt="${produto.nome}">
                <div>
                    <h3 class="formacao__nome">${produto.nome}</h3>
                    <p class="formacao__detalhe">${produto.descricao}</p>
                    <p class="formacao__valor">R$ ${produto.valor.toFixed(2)}</p>
                </div>
                <button class="delete-btn" data-id="${produto.id}">Excluir</button>
            `;

            produtosContainer.appendChild(li);

            // Adicionar evento de exclusão
            const deleteButton = li.querySelector(".delete-btn");
            deleteButton.addEventListener("click", () => excluirProduto(produto.id));
        });
    } catch (erro) {
        console.error("Erro ao buscar produtos:", erro);
    }
}

// Função para criar um novo produto na API
async function criarProduto(produto) {
    try {
        const resposta = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(produto)
        });

        if (!resposta.ok) {
            throw new Error("Erro ao criar produto");
        }

        listarProdutos(); // Atualizar a lista de produtos
    } catch (erro) {
        console.error("Erro ao criar produto:", erro);
    }
}

// Função para excluir um produto da API
async function excluirProduto(id) {
    try {
        const resposta = await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });

        if (!resposta.ok) {
            throw new Error("Erro ao excluir produto");
        }

        listarProdutos(); // Atualizar a lista de produtos
    } catch (erro) {
        console.error("Erro ao excluir produto:", erro);
    }
}

// Capturar evento de envio do formulário
form.addEventListener("submit", evento => {
    evento.preventDefault();

    const novoProduto = {
        nome: nomeInput.value,
        valor: parseFloat(valorInput.value),
        imagem: imagemInput.value,
        descricao: "Novo produto" // Adicione outros campos conforme necessário
    };

    criarProduto(novoProduto);

    // Limpar os campos do formulário
    nomeInput.value = "";
    valorInput.value = "";
    imagemInput.value = "";
});

// Inicializar a listagem de produtos
listarProdutos();
