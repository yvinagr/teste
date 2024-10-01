let carrinho = [];
let total = 0;

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    total += preco;
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const itensCarrinho = document.getElementById('itensCarrinho');
    const totalCarrinho = document.getElementById('totalCarrinho');

    itensCarrinho.innerHTML = '';
    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        itensCarrinho.appendChild(li);
    });

    totalCarrinho.textContent = `Total: R$ ${total.toFixed(2)}`;
}

function mostrarAba(aba) {
    const abas = document.querySelectorAll('.aba');
    abas.forEach(section => {
        section.style.display = 'none'; // Oculta todas as abas
    });
    document.getElementById(aba).style.display = 'block'; // Mostra a aba selecionada
}

// Mostrar a aba de início ao carregar a página
window.onload = function() {
    mostrarAba('inicio');
};
