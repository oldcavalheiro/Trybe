const firstDiv = document.getElementById('first-div');
const secondDiv = document.getElementById('second-div');
const thirdDiv = document.getElementById('third-div');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

// 1. Copie esse arquivo e edite apenas ele;

// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1. Deve existir apenas um elemento com a classe 'tech'.
function handleChangeTech(event) {
  document.querySelector('.tech').classList.remove('tech');
  event.target.classList.add('tech');
  input.value = ''; // limpa caixa de texto
}

firstDiv.addEventListener('click', handleChangeTech);
secondDiv.addEventListener('click', handleChangeTech);
thirdDiv.addEventListener('click', handleChangeTech);

// 3. Crie uma função que, ao digitar na caixa de texto;
// altere o texto do elemento com a classe 'tech'.
input.addEventListener('input', function(event) {
  document.querySelector('.tech').innerText = event.target.value;
});

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?
myWebpage.addEventListener('dblclick', function() {
  // window.location.replace('https://blog.betrybe.com/');
  window.open('https://blog.betrybe.com/', '_blank');
});

// 5. Crie uma função: passar o mouse sobre 'Meu top 3 do Spotrybefy',
// alterea cor do mesmo;
myWebpage.addEventListener('mouseover', function(event) {
  event.target.style.color = 'blue';
});

myWebpage.addEventListener('mouseout', function(event) {
  event.target.style.color = 'unset';
});