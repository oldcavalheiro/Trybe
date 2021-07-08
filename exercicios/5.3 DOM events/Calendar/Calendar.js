// criando dias da semana
function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();


// 1. criando dias do mês
let arrayDays = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfMonth() {
  //let getDaysList = document.querySelector('#days');
  let elementIdDays = document.getElementById('days');

  for (let index = 0; index < arrayDays.length; index += 1) {
    let day = arrayDays[index];
    let dayItem = document.createElement('li');

    if (day === 24 | day === 31) {
      dayItem.className = 'day holiday';
      dayItem.innerText = day;
      elementIdDays.appendChild(dayItem);
    } else if (day === 4 | day === 11 | day === 18) {
      dayItem.className = 'day friday';
      dayItem.innerText = day;
      elementIdDays.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = 'day holiday friday';
      dayItem.innerText = day;
      elementIdDays.appendChild(dayItem);
    } else {
      dayItem.innerText = day;
      dayItem.className = 'day';
      elementIdDays.appendChild(dayItem);
    }
  };
};
createDaysOfMonth();


// 2 && 4 criando botão Feriados e Sexta-feira 
function createButton(buttonName, buttonId) {
  let button = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  
  newButton.innerText = buttonName;
  newButton.id = buttonId;
  button.appendChild(newButton);
};

createButton('Feriados', 'btn-holiday');
createButton('Sexta-feira', 'btn-friday'); //cornflowerblue


// 3. mudando cor dos feriados
function displayHolidays() {
  let btnHoliday = document.getElementById('btn-holiday');
  let classHolidays = document.querySelectorAll('.holiday');
    
  // holidayButton.onclick = function () {
  btnHoliday.addEventListener('click', function () {
    for (let index = 0; index < classHolidays.length; index += 1) {
      if (classHolidays[index].style.backgroundColor !== 'cornflowerblue') {
        classHolidays[index].style.backgroundColor = 'cornflowerblue';
        classHolidays[index].style.color = 'black';
      } else {
        classHolidays[index].style.backgroundColor = '#eee';
        classHolidays[index].style.color = '#777';
      }
    }
  });
};

displayHolidays();


// 5. mudando Sexta-feira
function displayFridays(fridaysArray) {
  let btnFriday = document.getElementById('btn-friday');
  let fridays = document.getElementsByClassName('day friday');
  
  btnFriday.addEventListener('click', function() {
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerText !== 'SEXTA') {
        fridays[index].innerText = 'SEXTA';
    } else {
        fridays[index].innerText = fridaysArray[index];
      }
    }
  })
};

displayFridays([4, 11, 18, 25]);


// 6. zoom no dia ao passar o mouse
function dayMouseOver() {
  let days = document.getElementById('days');

  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '50px';
    //event.target.style.fontWeight = '400';
    event.target.style.heigth = '20px';
    event.target.style.heigth = '20px';
  })
};

function dayMouseOut() {
  let days = document.getElementById('days');

  days.addEventListener('mouseout', function(event) {
    //event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
    event.target.style.heigth = '20px';

    
  })
};

dayMouseOver();
dayMouseOut();