const form = document.getElementById('cadastroForm');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;  

    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;  


    if (nome === '' || email === '' || senha === '' || confirmarSenha === '') {
        mensagem.textContent = 'Preencha todos os campos!';
    } else if (senha !== confirmarSenha) {
        mensagem.textContent = 'Senha incorreta!';
    } else {
        mensagem.textContent = 'Cadastro realizado com sucesso!';
        form.reset();
    }
});

