const email = document.getElementById('email');
const password = document.getElementById('password');
const btn = document.getElementById('enter-btn');
btn.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const agreement = document.getElementById('agreement');
const formBtn = document.getElementById('submit-btn');
console.log(formBtn);

document.addEventListener('DOMContentLoaded', () => {
  agreement.addEventListener('change', () => {
    console.log('checkbox alterado');
    if (agreement.checked) {
      console.log('o if funciona checkado');
      formBtn.disabled = false;
    } else {
      console.log('o if funciona não checkado');
      formBtn.disabled = true;
    }
  });
});
