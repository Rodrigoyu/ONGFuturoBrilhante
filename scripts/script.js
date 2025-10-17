// scripts/script.js

document.addEventListener('DOMContentLoaded', function() {

    // --- FUNÇÃO 1: ATUALIZAR O ANO NO RODAPÉ ---
    const anoAtualSpan = document.getElementById('ano-atual');
    if (anoAtualSpan) {
        const anoAtual = new Date().getFullYear();
        anoAtualSpan.textContent = anoAtual;
    }

    // --- FUNÇÃO 2: VALIDAÇÃO DO FORMULÁRIO DE CADASTRO ---
    const formCadastro = document.querySelector('.form-cadastro');

    if (formCadastro) {
        formCadastro.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio imediato do formulário

            // Limpa erros antigos
            limparErros();

            // Pega os valores dos campos
            const email = document.getElementById('email').value;
            const telefone = document.getElementById('telefone').value;
            const cpf = document.getElementById('cpf').value;
            
            let formValido = true;

            // 1. Validação do E-mail
            if (!validaEmail(email)) {
                mostrarErro('erro-email', 'Por favor, insira um e-mail válido (ex: nome@dominio.com).');
                formValido = false;
            }

            // 2. Validação do Telefone (se contém apenas números)
            if (!/^\d+$/.test(telefone)) {
                mostrarErro('erro-telefone', 'O telefone deve conter apenas números.');
                formValido = false;
            }

            // 3. Validação do CPF
            if (!validaCPF(cpf)) {
                mostrarErro('erro-cpf', 'CPF inválido. Verifique os números digitados.');
                formValido = false;
            }
            
            // Se tudo estiver correto, envia o formulário
            if (formValido) {
                alert('Cadastro enviado com sucesso! Agradecemos o seu interesse.');
                formCadastro.reset();
            }
        });
    }
});


// --- FUNÇÕES AUXILIARES DE VALIDAÇÃO ---

// Função para validar o formato do e-mail
function validaEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

// Função para validar o CPF (algoritmo completo)
function validaCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove pontos e traços

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false; // CPFs com 11 dígitos repetidos são inválidos
    }

    let soma = 0;
    let resto;

    // Validação do primeiro dígito verificador
    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) {
        resto = 0;
    }
    if (resto !== parseInt(cpf.substring(9, 10))) {
        return false;
    }

    // Validação do segundo dígito verificador
    soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) {
        resto = 0;
    }
    if (resto !== parseInt(cpf.substring(10, 11))) {
        return false;
    }

    return true; // Se passou por tudo, o CPF é válido
}


// Funções para exibir e limpar mensagens de erro
function mostrarErro(idElemento, mensagem) {
    const elementoErro = document.getElementById(idElemento);
    elementoErro.textContent = mensagem;
    // Adiciona borda vermelha no input correspondente
    document.getElementById(idElemento.replace('erro-', '')).classList.add('input-erro');
}

function limparErros() {
    const mensagensErro = document.querySelectorAll('.mensagem-erro');
    mensagensErro.forEach(msg => msg.textContent = '');
    
    const inputsComErro = document.querySelectorAll('.input-erro');
    inputsComErro.forEach(input => input.classList.remove('input-erro'));
}

// --- LÓGICA DO MENU HAMBÚRGUER ---
const menuHamburguer = document.getElementById('menu-hamburguer');
const navPrincipal = document.getElementById('ul_nav');
const testeP = document.getElementById('teste');

    menuHamburguer.addEventListener('click', ()=>{

    navPrincipal.classList.toggle('ativo')
    

}
)



/*
menuHamburguer.addEventListener('click', toke);
function testeps(){
function toke(){
    testeP.textContent = 'fucionou';

}
}*/

