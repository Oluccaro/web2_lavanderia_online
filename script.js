/* Arquivo JavaScript (.js) do Projeto de Web II que precisará ser adaptado utilizando o Angular e TypeScript */

const senhaInput = document.getElementById('password');
const mostrarSenhaBtn = document.getElementById('mostrarSenhaBtn');

mostrarSenhaBtn.addEventListener('click', () => {
  if (senhaInput.type === 'password') {
    senhaInput.type = 'text';
  } else {
    senhaInput.type = 'password';
  }
});


    