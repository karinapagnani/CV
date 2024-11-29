
const suggestions = {
    "Fone Bluetooth branco": "paginaDoFone/index.html",
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