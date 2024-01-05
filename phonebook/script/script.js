/* eslint-disable max-len */
'use strict';

const data = [
  {
    name: 'Иван',
    surname: 'Петров',
    phone: '+79514545454',
  },
  {
    name: 'Игорь',
    surname: 'Семёнов',
    phone: '+79999999999',
  },
  {
    name: 'Семён',
    surname: 'Иванов',
    phone: '+79800252525',
  },
  {
    name: 'Мария',
    surname: 'Попова',
    phone: '+79876543210',
  },
];

// пишем внутри скобок, чтобы была своя область видимости и ничего в глобальную область видимости не выносили
{
  // ф-ия создает container
  const createContainer = () => {
    // создаем переменную container она будет создавать div
    const container = document.createElement('div');
    // добавим класс для container
    container.classList.add('container');
    // возвращаем container, каждый раз когда мы вызываем эту ф-ию будет создаваться новый container
    return container;
  };

  // создаем ф-ию createHeader, она ничего не принимает. Ф-ия формирует верстку и возвращает.
  const createHeader = () => {
    // создаем header
    const header = document.createElement('header');
    // добавим класс для header
    header.classList.add('header');
    // добавляем headerContainer тк все эл-ты в header вставляются в container
    const headerContainer = createContainer();
    // вставляем в header наш container
    header.append(headerContainer);

    // к header привяжем headerContainer
    header.headerContainer = headerContainer;

    // возвращаем header
    return header;
  };

  // ф-ия для заголовка (logo) будет принимать title (скобки не ставим)
  const createLogo = title => {
    // добавляем заголовк h1
    const h1 = document.createElement('h1');
    // добавляем класс для h1
    h1.classList.add('logo');
    // добавим содержимое для h1, в title попадет наше имя из phoneBookInit (html)
    h1.textContent = `Телефонный справочник. ${title}`;
    // возвращаем h1
    return h1;
  };


  // создаем Main
  const createMain = () => {
    const main = document.createElement('main');
    // создаем container для main
    const mainContainer = createContainer();
    // вставим mainContainer
    main.append(mainContainer);
    // добавим mainContainer, чтобы могли в него добавлять какие-то элементы
    main.mainContainer = mainContainer;
    // возвращаем main
    return main;
  };

  // создаем верхние кнопки, принимаем параметр params
  const createButtonsGroup = params => {
    // создаем обертку для кнопки (создаем элемент div)
    const btnWrapper = document.createElement('div');
    // добавляем для этого div класс
    btnWrapper.classList.add('btn-wrapper');

    // перебираем params с помощью метода map, деструктурируем и будем возвращать кнопки
    const btns = params.map(({ className, type, text }) => {
      // создаем кнопки
      const button = document.createElement('button');
      // заполняем кнопки данными:
      button.type = type;
      button.textContent = text;
      button.className = className;
      // возвращаем кнопки
      return button;
    });

    // вставляем btnWrapper с помощью spread оператора (...btns);
    btnWrapper.append(...btns);

    // вернемся в btnWrapper
    return {
      btnWrapper,
      btns,
    };
  };

  // ф-ия для таблицы
  const createTable = () => {
    // создаем таблицы
    const table = document.createElement('table');

    // задаем таблице классы
    table.classList.add('table', 'table-striped');
    // создаем thead
    const thead = document.createElement('thead');
    // добавляем верстку в конец, перед закрывающим тегом
    thead.insertAdjacentHTML('beforeend', `
    <tr>
      <th class="delete">Удалить</th>
      <th>Имя</th>
      <th>Фамилия</th>
      <th>Телефон</th>
    </tr>
    `);

    // создаем tbody
    const tbody = document.createElement('tbody');

    // добавляем в таблицу thead, tbody в нужном порядке
    table.append(thead, tbody);
    // в эл-т table добавим tbody
    table.tbody = tbody;

    return table;
  };

  // ф-ия для формы
  const createForm = () => {
    // создаем overlay для модального окна (формы)
    const overlay = document.createElement('div');
    // создаем класс для overlay
    overlay.classList.add('form-overlay');

    // создаем форму
    const form = document.createElement('form');
    // создаем класс для form
    form.classList.add('form');
    // вставляем верстку в form, в конец, перед закрывающим тегом
    form.insertAdjacentHTML('beforeend', `
      <!-- кнопка закрыть -->
      <button class="close" type="button"></button>
      <h2 class="form-title">Добавить контакт</h2>
      <div class="form-group">
        <label class="form-label" for="name">Имя:</label>
        <input class="form-input" name="name" 
          id="name" type="text" required></input>
      </div>

      <div class="form-group">
        <label class="form-label" for="surname">Фамилия:</label>
        <input class="form-input" name="surname" 
          id="surname" type="text" required></input>
      </div>

      <div class="form-group">
        <label class="form-label" for="phone">Телефон:</label>
        <input class="form-input" name="phone" 
          id="phone" type="number" required></input>
      </div>
    `);

    const buttonGroup = createButtonsGroup([
      // для кнопок модального окна
      {
        className: 'btn btn-primary mr-3',
        type: 'submit',
        text: 'Добавить',
      },
      {
        className: 'btn btn-danger',
        type: 'reset',
        text: 'Отмена',
      },
    ]);

    // вставляем кнопки
    form.append(...buttonGroup.btns);
    // вставляем в overlay нашу form
    overlay.append(form);

    // возвращаем overlay
    return {
      overlay,
      form,
    };
  };

  // добавляем footer

  // создаем ф-ию createHeader, она ничего не принимает. Ф-ия формирует верстку и возвращает.
  const createFooter = () => {
    // создаем footer
    const footer = document.createElement('footer');
    // добавим класс для footer
    footer.classList.add('footer');
    // добавляем headerContainer тк все эл-ты в header вставляются в container
    const footerContainer = createContainer();
    // вставляем в header наш container
    footer.append(footerContainer);

    // к footer привяжем footerContainer
    footer.footerContainer = footerContainer;

    // возвращаем header
    return footer;
  };

  // ф-ия для текста footer будет принимать titleFooter
  const footerText = (title) => {
    // добавляем текст
    const footerCopyRight = document.createElement('p');
    // добавляем класс для p
    footerCopyRight.classList.add('div');
    // добавим содержимое для p, в title попадет наше имя из phoneBookInit (html)
    footerCopyRight.textContent = `Все права защищены © ${title}`;
    // возвращаем p
    return footerCopyRight;
  };

  // добавляем footer

  // ф-ия renederPhoneBook, основная ф-ия, будет заполнять таблицу
  const renederPhoneBook = (app, title) => {
    // создаем header, вызываем ф-ию createHeader
    const header = createHeader();
    // создаем заголовок (logo), будет принимать title.
    const logo = createLogo(title);
    // создаем main
    const main = createMain();
    // вызываем ф-ию buttonGroup и добавляем туда массив
    const buttonGroup = createButtonsGroup([
      // классы, типы, текст для кнопок
      {
        className: 'btn btn-primary mr-3 js-add',
        type: 'button',
        text: 'Добавить',
      },
      {
        className: 'btn btn-danger',
        type: 'button',
        text: 'Удалить',
      },
    ]);

    // добавляем footer
    // создаем header, вызываем ф-ию createHeader
    const footer = createFooter();
    const footerCopyRight = footerText(title);
    // добавляем footer

    // переменная для таблицы (вызываем)
    const table = createTable();
    // переменная для формы (вызываем)
    const form = createForm();
    // добавляем header на страницу в app (в headerContainer)
    header.headerContainer.append(logo);
    // вставим в mainContainer кнопки и таблицу
    main.mainContainer.append(buttonGroup.btnWrapper, table, form.overlay);
    // добавляем в footer тег с footerCopyRight
    footer.footerContainer.append(footerCopyRight);
    // вставляем logo (h1), footer;
    app.append(header, main, footer);

    // ф-ия обратно будет возвращать объект (св-во list, tbody и logo)
    return {
      list: table.tbody,
      logo,
      // кнопка для скрипта открытия модального окна (работает на кнопке "добавить")
      btnAdd: buttonGroup.btns[0],
      // overlay от формы, чтобы ее показать
      formOverlay: form.overlay,
      // вернем форму
      form: form.form,
    };
  };

  // ф-ия для передачи данных из объекта (делаем деструктуризацию, name использовать нежелательно, переименуем
  const createRow = ({ name: firstname, surname, phone }) => {

    // создаем строки
    const tr = document.createElement('tr');

    const tdDel = document.createElement('td');
    // добавляем класс для tdDel (скрыть кнопки)
    tdDel.classList.add('delete');
    // создаем кнопку Del
    const buttonDel = document.createElement('button');
    // добавляем класс для buttonDel
    buttonDel.classList.add('del-icon');
    // вставляем кнопку в tdDel
    tdDel.append(buttonDel);

    const tdName = document.createElement('td');
    tdName.textContent = firstname;

    const tdSurname = document.createElement('td');
    tdSurname.textContent = surname;

    const tdPhone = document.createElement('td');
    // создаем ссылку, чтобы при клике на телефон был звонок
    const phoneLink = document.createElement('a');
    phoneLink.href = `tel:${phone}`;
    phoneLink.textContent = phone;
    // в tr передаем номер телефона  
    tr.phoneLink = phoneLink;
    // добавляем в tdPhone ссылку
    tdPhone.append(phoneLink);
    // вставим td в tr
    tr.append(tdDel, tdName, tdSurname, tdPhone);

    // возвращаем tr;
    return tr;
  };


  // ф-ия renderContacts
  const renderContacts = (elem, data) => {
    // перебираем массив data с помощью метода map, используя ф-ию createRow и создаем эл-ты (строки)
    const allRow = data.map(createRow);
    // загружаем то что получилось (строки) на страницу
    elem.append(...allRow);
    // возвращаем ячейки allRow
    return allRow;
  };

  // напишем ф-ию hoverRow для получения в шапку текста при наведении на телефон. Принимаем в ф-ию allRow и logo
  const hoverRow = (allRow, logo) => {
    // в замыкании будет храниться текст (первоначальный заголовок)
    const text = logo.textContent;

    // перебираем все строки allRow с помощью forEach
    allRow.forEach(contact => {
      // при наведении мыши на строку (contact), будем вызывать ф-ию с помощью addEventListener, которая будет выводить в консоль mouseEnter и строку (contact)
      contact.addEventListener('mouseenter', () => {
        logo.textContent = contact.phoneLink.textContent;
      });
      // когда мышка уводится вбок от номера телефона (mouseleave), в заголовке будет заголовок
      contact.addEventListener('mouseleave', () => {
        // возвращаем первоначальный текст (заголовок) когда мышка уехала
        logo.textContent = text;
      });
    });
  };



  // ф-ия init будет принимать селектор со страницы и заголовок
  const init = (selectorApp, title) => {
    // получим эл-т по селектору
    const app = document.querySelector(selectorApp);
    const phoneBook = renederPhoneBook(app, title);
    // делаем реструктуризацию из phoneBook (получаем list, logo, form)
    const { list, logo, btnAdd, formOverlay, form } = phoneBook;

    // Функционал

    // получаем строки allRow
    const allRow = renderContacts(list, data);

    // вызываем ф-ию hoverRow, передаем туда все строки allRow и logo
    hoverRow(allRow, logo);

    // при клике на кнопку добавить будет открываться модальное окно
    btnAdd.addEventListener('click', () => {
      // добавляем класс для formOverlay, делаем видимым модальное окно (форма)
      formOverlay.classList.add('is-visible');
    });

    // при клике по форме добавляем событие, чтобы она не закрывалась (используем stopPropagation или stopImmediatePropagation)
    form.addEventListener('click', event => {
      event.stopImmediatePropagation();
    });

    // на formoverlay (фон когда форма активна) вешаем событие для закрытия модального окна
    formOverlay.addEventListener('click', () => {
      // удаляем класс для formOverlay, делаем невидимым модальное окно (форма)
      formOverlay.classList.remove('is-visible');
    });

    // события для моб устройств
    // touchstart аналог mouse down - прикосновение к dom эл-ту
    document.addEventListener('touchstart', e => {
      console.log(e.type);
    });
    // touchstart аналог mouse move - движение пальцем по dom эл-ту
    document.addEventListener('touchmove', e => {
      console.log(e.type);
    });

    // touchstart аналог mouse up - событие когда палец убираем с dom эл-та
    document.addEventListener('touchend', e => {
      console.log(e.type);
    });
  };
  // ф-ия, которая будет инициализировать наше приложение
  window.phoneBookInit = init;
}