import React, { useEffect, useState } from 'react';
// import PropTypes from "prop-types";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import styles from './CalendarPage.module.css';
import DateController from './../../package/DateController/DateController';

const CalendarPage = (props) => {
  let navigate = useNavigate();
  const { year } = useParams();
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    const year_calendar = DateController.getUniversityYearCalendar(year);
    setCalendar(year_calendar);
  }, [year]);

  const prev = () => {
    const prevYear = DateController.getPrevYear(year);
    navigate(`/calendar/${prevYear}`);
  };

  const next = () => {
    const nextYear = DateController.getNextYear(year);
    navigate(`/calendar/${nextYear}`);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <p align="center">
          <button
            onClick={prev}
            title="Просмотреть календарь за прошлый год"
            children={'<--'}
          />
          {` ${year} `}
          <button
            onClick={next}
            title="Просмотреть календарь на следующий год"
            children={'-->'}
          />
        </p>
        <h2 align="center">
          {'Расписание '}
          <span
            style={{ backgroundColor: 'rgba(100, 149, 237, 0.2)' }}
            children="верхних"
          />
          {' и '}
          <span
            style={{ backgroundColor: 'rgba(255, 207, 64, 0.3)' }}
            children="нижних"
          />
          {' недель на '}
          {` ${year}/${DateController.getNextYear(year)} `}
          {' учебный год'}
        </h2>

        <ul className={styles.array}>
          {calendar.map((el, i) => {
            const { month, dates } = el;
            const month_string = DateController.getStringMonth(month);
            return (
              <li key={i}>
                <div className={styles.month_title}>{month_string}</div>
                <ul className={styles.days_block}>
                  {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((element) => {
                    return <li key={element}>{element}</li>;
                  })}
                </ul>
                <ul className={styles.month_block}>
                  {dates.map((element, i) => {
                    const { date, isThisMonth } = element;
                    const d = new Date(date);
                    const weekend_type = DateController.getWeekType(d);
                    const d_d = d.getDate();
                    return (
                      <li
                        key={i}
                        attribute_is_this_month={isThisMonth ? 'true' : 'false'}
                        attribute_weekend_type={weekend_type}
                        children={d_d}
                      />
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
        <p>
          Верхняя неделя начинается с первого сентября. Когда заканчивается I'ый
          семестр и начинается II'ой семестр, то отчёт продолжается с 1-го
          сентября.
        </p>
        <p>
          Сделал подсветку верхних и нижних недель. Так как июль-август
          каникулы, то не подсвечивал.
        </p>
      </div>
      <footer className={styles.footer}>
        <p>Написано на React'e с любовью от группы ПО-4</p>
        <p>
          Ставь звезду, клонируй и редактируй код на GitHub:{' '}
          <a
            href="https://github.com/Pavel-Innokentevich-Galanin/what-univer-weekend"
            title="Открыть репозиторий с кодом"
            children={'Pavel-Innokentevich-Galanin/what-univer-weekend'}
          />
        </p>
      </footer>
    </div>
  );
};

CalendarPage.propTypes = {};

export default CalendarPage;
