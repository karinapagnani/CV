function filtrarPorCategoria(event) {
   
    event.preventDefault();

    
    const categoriaSelecionada = event.target.getAttribute('data-categoria');

    
    const produtos = document.querySelectorAll('.tudo .produtos1 div, .tudo .produtos2 div, .produtos3 div');

    
    produtos.forEach(produto => {
       
        const categoriaProduto = produto.getAttribute('data-categoria');

        if (categoriaSelecionada === 'todas' || categoriaSelecionada === categoriaProduto) {
          
            produto.style.display = 'block';
        } else {
            
            produto.style.display = 'none';
        }
    });
}


const linksCategorias = document.querySelectorAll('.filtros a, .filtros button');
linksCategorias.forEach(link => {
    link.addEventListener('click', filtrarPorCategoria);
});



const suggestions = {
    "Fone Bluetooth branco": "/produtos/Produto1/fone.html",
    "Manta Blanket 300 Casal de poliéstersa": "/produtos/Produto2/manta.html",
    "Pen Drive 64GB USB": "/produtos/Produtos3/pendrive.html",
    "Presilha de cabelo de flor": "/produtos/Produto5/flor.html.html",
};
  
  const searchInput = document.getElementById("search-input");
  const autocompleteList = document.getElementById("autocomplete-list");
  
  searchInput.addEventListener("input", function () {
    const inputValue = this.value;
    closeSuggestions();
    if (!inputValue) return;
  
    const filteredSuggestions = Object.keys(suggestions).filter((item) =>
      item.toLowerCase().startsWith(inputValue.toLowerCase())
    );
  
    addSuggestions(filteredSuggestions);
  });
  
  function addSuggestions(suggestionsArray) {
    suggestionsArray.forEach((item) => {
      const suggestionDiv = document.createElement("div");
      suggestionDiv.textContent = item;
      suggestionDiv.addEventListener("click", function () {
        
        window.location.href = suggestions[item];
      });
      autocompleteList.appendChild(suggestionDiv);
    });
  }
  
  function closeSuggestions() {
    while (autocompleteList.firstChild) {
      autocompleteList.removeChild(autocompleteList.firstChild);
    }
  }
  
  
  document.addEventListener("click", function (e) {
    if (e.target !== searchInput) {
      closeSuggestions();
    }
  });
