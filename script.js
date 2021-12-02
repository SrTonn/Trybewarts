const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const btnLogin = document.getElementById('login');
const users = {
  trybe: {
    email: 'tryber@teste.com',
    password: '123456',
  },
};

function validateLogin(event) {
  event.preventDefault();
  const emailValue = inputEmail.value;
  const passwordValue = inputPassword.value;

  if (emailValue === users.trybe.email
    && passwordValue === users.trybe.password) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnLogin.addEventListener('click', validateLogin);
