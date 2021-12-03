const inputEmailLogin = document.getElementById('email');
const inputPassword = document.getElementById('password');
const btnLogin = document.getElementById('login');
const btnSubmit = document.querySelector('#submit-btn');
const checkBoxAgreement = document.querySelector('#agreement');
const counterTextSpan = document.querySelector('#counter');
const textArea = document.querySelector('#textarea');
const answerPopUp = document.querySelector('#answer-popup');
const rateList = document.querySelectorAll('#container-rate input');
const familyList = document.querySelectorAll('#container-family input');
const users = {
  trybe: {
    email: 'tryber@teste.com',
    password: '123456',
  },
};

function validateLogin(event) {
  event.preventDefault();
  const emailValue = inputEmailLogin.value;
  const passwordValue = inputPassword.value;

  if (emailValue === users.trybe.email
    && passwordValue === users.trybe.password) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function toggleButton(event) {
  const isAgreementChecked = event.target.checked;
  btnSubmit.disabled = !isAgreementChecked;
}

function counterText() {
  counterTextSpan.innerText = 500 - textArea.value.length;
}

function catchFamily() {
  let family;

  familyList.forEach((element) => {
    if (element.checked) {
      family = element;
    }
  });

  return family.value;
}

function catchVoteRate() {
  let voteRateTrybewarts;

  rateList.forEach((element) => {
    if (element.checked) {
      voteRateTrybewarts = element;
    }
  });

  return voteRateTrybewarts.value;
}

/**
 * Forma de capturar os inputs selecionados e com a class 'subject'...
 * visto no código da dupla Polyana Sousa e Lilian Azevedo
 * https://github.com/tryber/sd-018-b-project-trybewarts/pull/37/files#diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3
 */
function catchSubjects() {
  const options = document.querySelectorAll('input[class=\'subject\']:checked');
  const selectedList = [];
  options.forEach((option) => {
    selectedList.push(option.value);
  });

  return selectedList.join(', ');
}

function submitForm(event) {
  event.preventDefault();
  // document.querySelector('main').style.display = 'none';
  const inputName = document.querySelector('#input-name').value;
  const inputLastName = document.querySelector('#input-lastname').value;
  const inputEmail = document.querySelector('#input-email').value;
  const houseSelected = document.querySelector('#house').value;

  answerPopUp.innerHTML = `
  <p>Nome: ${inputName} ${inputLastName}</p>
  <p>Email: ${inputEmail}</p>
  <p>Casa: ${houseSelected}</p>
  <p>Família: ${catchFamily()}</p>
  <p>Matérias: ${catchSubjects()}</p>
  <p>Avaliação: ${catchVoteRate()}</p>
  <p>Observações: ${textArea.value}</p>
  `;
}

btnLogin.addEventListener('click', validateLogin);
checkBoxAgreement.addEventListener('click', toggleButton);
textArea.addEventListener('input', counterText);
btnSubmit.addEventListener('click', submitForm);

/**
 * Não conseguimos compreender o enunciado do requisito 21
 * Obtivemos conhecimento do que era para ter sido feito através do PR da dupla,
 * Polyana Sousa e Lilian Azevedo
 */
