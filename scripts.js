document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const target = this.getAttribute('data-tab');

            // Remove a classe 'active' de todas as abas
            tabs.forEach(t => t.classList.remove('active'));

            // Esconde todo o conteúdo das abas
            tabContents.forEach(content => content.style.display = 'none');

            // Mostra o conteúdo da aba correspondente
            document.getElementById('tab-' + target).style.display = 'block';

            // Adiciona a classe 'active' na aba clicada
            this.classList.add('active');
        });
    });

    // Exibe a primeira aba e o conteúdo correspondente por padrão
    document.querySelector('.tab[data-tab="1"]').click();
});
