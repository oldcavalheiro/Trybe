
function createStates() {
  const state = document.querySelector('#state');
  const states = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

  for (index = 0; index < states.length; index += 1){
    const option = document.createElement('option');
    option.innerText = states[index];
    state.appendChild(option);
    console.log(states[index]);
  }
}

createStates();



function getName(event) {
  // stop refresh on submit btn
  // also stop html constraints
  event.preventDefault();
  
  let inputName = document.querySelector('#name');
  let pNameUser = document.querySelector('#nameUser');
  console.log(inputName.value);
  pNameUser.innerHTML = inputName.value;
}

btnSubmit = document.querySelector('#submit');
btnSubmit.addEventListener('click', getName);
