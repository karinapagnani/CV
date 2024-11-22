// Função para salvar o carrinho no localStorage
function salvarCarrinho(carrinho) {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  }
  
  // Função para recuperar o carrinho do localStorage
  function carregarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    return carrinho;
  }
  
  // Função para atualizar o carrinho na página do carrinho
  function atualizarCarrinho() {
    const carrinho = carregarCarrinho();
    const carrinhoLista = document.getElementById('carrinho-lista');
    const totalValor = document.getElementById('total-valor');
    carrinhoLista.innerHTML = ''; // Limpar carrinho antes de atualizar
  
    let total = 0;
    carrinho.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.classList.add('item');
      itemElement.innerHTML = `
        <img src="${item.imagem}" alt="${item.nome}">
        <div>
          <h4>${item.nome}</h4>
          <p>R$ ${item.preco}</p>
          <p>Quantidade: ${item.quantidade}</p>
        </div>
        <p>Total: R$ ${(item.preco * item.quantidade).toFixed(2)}</p>
      `;
      carrinhoLista.appendChild(itemElement);
      total += item.preco * item.quantidade;
    });
  
    totalValor.textContent = total.toFixed(2);
  }
  
  // Função para adicionar um produto ao carrinho
  function adicionarAoCarrinho(produto) {
    const carrinho = carregarCarrinho();
    const produtoExistente = carrinho.find(item => item.id === produto.id);
  
    if (produtoExistente) {
      produtoExistente.quantidade += 1;
    } else {
      carrinho.push({ ...produto, quantidade: 1 });
    }
  
    salvarCarrinho(carrinho);
  }
  
  // Ao carregar a página do carrinho, atualiza os itens
  if (window.location.pathname.includes('carrinho.html')) {
    atualizarCarrinho();
  }
  
  // Em cada página de produto, adicione o produto ao carrinho
  if (window.location.pathname.includes('manta.html')) {
    const produto1 = {
      id: 1,
      nome: 'Manta Blanket 300 Casal de poliéster',
      preco: 32.00,
      imagem:'img/produto4__1_-removebg-preview.png',
    };
  
    const btnAdicionar = document.getElementById('add-to-cart');
    if (btnAdicionar) {
      btnAdicionar.addEventListener('click', () => {
        adicionarAoCarrinho(produto1);
      });
    }
  }
  
  

