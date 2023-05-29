const email = document.getElementById('email');
const password = document.getElementById('password');
const btn = document.getElementById('submit-btn');
btn.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
