// подключили файл для урока 5.6, потом можно удалить
'use strict';

// напишем скрипт с делегированием
{
  // получаем эл-т app
  const app = document.querySelector('#app');

  // переменная с количеством залов (счётчик)
  let countArea = 0;
  // ф-ия для создания стульев
  const createSeat = i => {
    // создаем стул
    const seat = document.createElement('div');
    // добавляем класс для seat
    seat.classList.add('seat');
    // добавим дата атрибут для seat
    seat.dataset.seatNumber = i;
    return seat;
  };

  // ф-ия, будем принимать номер линий (countLine)
  //  и сколько стульев должно быть в линий (y)
  const createLine = (countLine, y) => {
    // создаем переменную для линий
    const line = document.createElement('div');
    // зададим класс для line
    line.classList.add('line');
    // добавим data атрибут для line
    line.dataset.lineNumber = countLine;

    // создаем цикл for, i это кол-во стульев
    for (let i = 1; i <= y; i++) {
      // создаем место и передаем туда i. Добавляем в line
      line.append(createSeat(i));
    }
    // возвращаем line
    return line;
  };

  // ф-ия которая будет создавать залы.
  // Принимаем сколько будет линий и сколько будет стульев в ряду
  const createArea = (x, y) => {
    // будем увеличивать кол-во залов(арен)
    countArea += 1;
    // создаем первый зал с номером 1, создаем для него div
    const area = document.createElement('div');
    // для area добавим класс area
    area.classList.add('area');
    // добавим data атрибут для areaNumber
    area.dataset.areaNumber = countArea;

    // с помощью цикла for будем создавать ряды
    for (let i = 1; i <= x; i++) {
      // в area добавляем то что было создано с помощью createLine и
      // туда будем передавать i (номер линии) и y (сколько стульев в ряду)
      area.append(createLine(i, y));
    }

    // возвращаем area (создаем ее)
    return area;
  };

  // в app будем добавлять залы, которые будем создавать с помощью createArea
  app.append(createArea(5, 6));
  app.append(createArea(8, 6));
  app.append(createArea(6, 6));

  // для app вешаем событие (это и есть делегирование, клик происходит
  // на app, но событие просиходит только при клике на стул).
  // e.target (event target) это там где произошло событие
  app.addEventListener('click', e => {
    // получаем номер стула (таргет события)
    // console.log(e.target);
    // запишем таргет в переменную
    const target = e.target;

    // если target class содержит seat
    if (target.classList.contains('seat')) {
      // создаем переменную для получения номера сиденья
      const seat = target.dataset.seatNumber;
      // создаем переменную для получения номера линии, используя метод closest
      const line = target.closest('.line').dataset.lineNumber;
      // создаем переменную для получения номера зала, используя метод closest
      const area = target.closest('.area').dataset.areaNumber;
      target.style.backgroundColor = 'tomato';

      alert(`Ваш зал № ${area} / ряд № ${line} / место № ${seat}`);
    }

    console.log(1);
  });
}