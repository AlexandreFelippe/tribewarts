// Ao preencher o formulário e clicar no botão, será validado que:
// Caso o email seja "tryber@teste.com" e a senha seja "123456", será emitido um alerta contendo o texto "Olá, Tryber!";
// Em todos os outro casos deverá ser emitido um alerta contendo o texto "Email ou senha inválidos.";

// const email = document.querySelector('#input-email');
// const password = document.querySelector('#input-password')
// const btn = document.getElementById('btn');
// btn.addEventListener('click', () => {
//     if (email === "tryber@teste.com" & password === "123456") {
//         return "Olá, Tryber!"
//     }
//     else{
//         return "Email ou senha inválidos."
//     }
// })

const main = document.getElementById('main');
const form = document.createElement('form');
main.appendChild(form);
form.id = 'evaluation-form';

const select = document.createElement('select');
const option1 = document.createElement('option');
const option2 = document.createElement('option');
const option3 = document.createElement('option');
const option4 = document.createElement('option');
select.id = 'house';
form.appendChild(select);
select.appendChild(option1);
select.appendChild(option2);
select.appendChild(option3);
select.appendChild(option4);
option1.id = 'gitnoria-house';
option2.id = 'reactpuff-house';
option3.id = 'corvinode-house';
option4.id = 'pytherina-house';
option1.value = 'Gitnória';
option2.value = 'Reactpuff';
option3.value = 'Corvinode';
option4.value = 'Pytherina';
option1.innerText = 'Gitnória';
option2.innerText = 'Reactpuff';
option3.innerText = 'Corvinode';
option4.innerText = 'Pytherina';
