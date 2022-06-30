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

function createHolidayButton(botao) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-holiday';

  newButton.innerHTML = botao;
  newButton.id = newButtonID

  buttonContainer.appendChild(newButton);
};

createHolidayButton('Feridados');