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

// Escreva seu código abaixo.
//Exercicio 1
function createDaysOfTheMonth() {
  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const monthDaysList = document.querySelector('#days');

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    const dayMonth = decemberDaysList[index];
    const daysMonthList = document.createElement('li');
    daysMonthList.innerHTML = dayMonth;

    if (dayMonth === 24 || dayMonth === 31) {
      daysMonthList.className = 'day holiday';
      monthDaysList.appendChild(daysMonthList);
    } else if (dayMonth === 4 || dayMonth === 11 || dayMonth === 18) {
      daysMonthList.className = 'day friday';
      monthDaysList.appendChild(daysMonthList);
    } else if (dayMonth === 25) {
      daysMonthList.className = 'day holiday friday';
      monthDaysList.appendChild(daysMonthList);
    } else {
      daysMonthList.className = 'day';
      monthDaysList.appendChild(daysMonthList);
    }
  };
};

createDaysOfTheMonth();

//Exercicio 2
function createHolidayButton(botao) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-holiday';

  newButton.innerHTML = botao;
  newButton.id = newButtonID

  buttonContainer.appendChild(newButton);
};

createHolidayButton('Feridados');

//Exercicio 3
function changeHolidaysBackgound() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday');
  let changeColor = 'red';
  let backgroundColor = 'rgb(238,238,238)';
  
  getHolidayButton.addEventListener('click', function() {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === changeColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = changeColor;
      }
    }
  });
}

changeHolidaysBackgound(); 

//Exercicio 4
function createFridayButton(botao) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-friday';

  newButton.innerHTML = botao;
  newButton.id = newButtonID

  buttonContainer.appendChild(newButton); 
}

createFridayButton('Sexta-Feira');

//Exercicio 5

function changeFriday(fridaysArray) {
  let getFridayButton = document.querySelector('#btn-friday');
  let fridays = document.getElementsByClassName('friday');
  let newText = 'É sexta!!!';

  getFridayButton.addEventListener('click', function() {
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerHTML !== newText) {
          fridays[index].innerHTML = newText;
      } else {
          fridays[index].innerHTML = fridaysArray[index];
        }
      }
    });
}

changeFriday([ 4, 11, 18, 25 ]);

//Exercicio 6
function dayMouseOver() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '35px';
    event.target.style.fontWeight = '700';
  });
}

function dayMouseOut() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  });
}

dayMouseOver();
dayMouseOut();

//Exercicio 7

function newTask(task) {
  let tasksContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');

  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName); 
}

newTask('Jogar Genshin Impact');

//Exercicio 8

function taskColor(color) {
  let tasksContainer = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');

  newTask.className = 'task';
  newTask.style.backgroundColor = color;
  tasksContainer.appendChild(newTask);
}

taskColor('cyan');
