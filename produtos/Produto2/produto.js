const miniaturas = document.querySelectorAll('.foto');

    // Adicionar o evento de clique a cada miniatura
    miniaturas.forEach(foto => {
      foto.addEventListener('click', function () {
        // Atualizar o src da imagem principal com o src da miniatura clicada
        const imagemPrincipal = document.getElementById('imagem-principal');
        imagemPrincipal.src = this.src;
      });
    });