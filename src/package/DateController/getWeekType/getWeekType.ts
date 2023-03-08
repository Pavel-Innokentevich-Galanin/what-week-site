/**
 * Функция возвращает сообщение о типе недели (верхняя или нижняя)
 */
function getWeekType(string_date: string) {
  try {
    let d = new Date(string_date);

    if (isNaN(d.getTime())) { // Invalid Date
      d = new Date();
    }

    let d1 = d;

    let mounth = d.getMonth() + 1; // Определяем номер месяца

    if (mounth === 7 || mounth === 8) {
      return 'none';
    }

    if (mounth >= 1 && mounth <= 8) {
      // Если месяц Январь - Август, то берём прошлый год
      let year = d.getFullYear() - 1;
      d = new Date(`${year}-09-01`);
    } else {
      // Если месяц Сентябрь - Декабрь, то берём текущий год
      let year = d.getFullYear();
      d = new Date(`${year}-09-01`);
    }

    let weeks = []; // Массив недель. Массив массивов дней недели
    let days: string[] = []; // Массив дней недели
    for (let i = 0; i < 365; ++i) {
      if (d.getDay() === 1) {
        // Если это первый день недели, то добавить в массив недель
        if (days.length !== 0) {
          weeks.push(days);
        }
        days = [];
      }

      days.push(d.toJSON()); // Добавляю день в массив дней недели
      d.setDate(d.getDate() + 1); // Сетаю новую дату
    }
    weeks.push(days); // Добавляю оставший массив дней недел в массив недель

    let type = getWeekIndex(weeks, d1); // Вызываю функцию, которая определяет номер недели
    if (type === -1) {
      return '-1';
    }

    if (type % 2 === 0) {
      return 'up';
    } else {
      return 'down';
    }
  } catch (e) {
    return '' + e;
  }
}

/**
 * Функция, по созданому массиву недель
 * (массив с 1-ого сентября и 365 дней)
 * возвращает номер недели.
 * [Если чётное число (индексация от нуля) - верхняя неделя]
 * [Если нечётное число - нижняя неделя]
 */
function getWeekIndex(weeks: string[][], d1 = new Date()) {
  let date_1 = d1.getDate(); // Определяю текущий день
  let mount_1 = d1.getMonth(); // Определяю текущий месяц
  for (let i = 0; i < weeks.length; ++i) {
    // Прохожусь по массиву недель
    for (let j = 0; j < weeks[i].length; ++j) {
      // Прохожусь по массиву дней недели
      let d2 = new Date(weeks[i][j]); // Определяю объект дня недели
      let date_2 = d2.getDate(); // Определяю дату дня недели
      let mount_2 = d2.getMonth(); // Определяю месяц дня недели
      if (date_1 === date_2 && mount_1 === mount_2) {
        return i; // Если даты и месяцы равны, то возвращаем номер недели
      }
    }
  }
  return -1; // Какая-то ошибка
}

export default getWeekType;
