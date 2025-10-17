// Seleciona os elementos do DOM
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

// Adiciona um "ouvinte de evento" de clique no botão do menu
menuToggle.addEventListener('click', () => {
    // A cada clique, ele alterna (adiciona ou remove) a classe 'active' do menu
    navMenu.classList.toggle('active');
});