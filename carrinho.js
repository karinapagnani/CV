// Função para atualizar a lista de itens do carrinho e o total
function updateCart() {
    const cartList = document.getElementById('cart-list').querySelector('ul');
    const totalElement = document.getElementById('total');

    // Obter carrinho do localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Limpar a lista antes de atualizar
    cartList.innerHTML = '';

    // Adicionar os itens do carrinho à lista HTML
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.product} - R$${item.price.toFixed(2)} 
                        <button onclick="removeFromCart(${index})">Remover</button>`;
        cartList.appendChild(li);
    });

    // Atualizar o total do carrinho
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalElement.textContent = total.toFixed(2);
}

// Função para remover um item do carrinho
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Remover o item selecionado
    cart.splice(index, 1);

    // Atualizar o carrinho no localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Atualizar a exibição do carrinho
    updateCart();
}

// Atualizar a página do carrinho ao carregá-la
updateCart();
