const bloco2 = document.getElementsByClassName('bloco2')
bloco2[1].style.display = 'none';
const bloco22 = document.getElementById('bloco2')
bloco22.style.display = 'none';



const elemento = document.querySelector('.bloco2');

// Define o efeito fade out
const efeito = () => {
  elemento.classList.add('bloco2_sumir');
};

// Inicia o temporizador e aplica o efeito após 40 segundos
setTimeout(efeito, 4000);