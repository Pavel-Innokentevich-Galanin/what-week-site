import React, { useEffect, useState } from 'react';
// import PropTypes from "prop-types";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import styles from './CalendarPage.module.css';
import DateController from '../../package/DateController/DateController';

const CalendarPage = () => {
  let navigate = useNavigate();
  const { year } = useParams();
  const [calendar, setCalendar] = useState([
    {
      month: 9,
      dates: [
        {
          date: '',
          isThisMonth: false,
        },
      ],
    },
  ]);

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
        <p style={{ textAlign: 'center' }}>
          <button
            onClick={prev}
            title="Прагледзець каляндар за мінулы год"
            children={'<- папярэдні'}
          />
          {` ${year} `}
          <button
            onClick={next}
            title="Прагледзець каляндар на наступны год"
            children={'наступны ->'}
          />
        </p>
        <h2 style={{ textAlign: 'center' }}>
          {'Расклад '}
          <span
            style={{ backgroundColor: 'rgba(100, 149, 237, 0.2)' }}
            children="верхніх"
          />
          {' і '}
          <span
            style={{ backgroundColor: 'rgba(255, 207, 64, 0.3)' }}
            children="ніжніх"
          />
          {' тыдняў на '}
          {` ${year}/${DateController.getNextYear(year)} `}
          {' навучальны год'}
        </h2>

        <ul className={styles.array}>
          {calendar.map((el, i) => {
            const { month, dates } = el;
            const month_string = DateController.getStringMonth(month);
            return (
              <li key={i}>
                <div className={styles.month_title}>{month_string}</div>
                <ul className={styles.days_block}>
                  {['Пн', 'Аў', 'Ср', 'Чц', 'Пт', 'Сб', 'Нд'].map((element) => {
                    return <li key={element}>{element}</li>;
                  })}
                </ul>
                <ul className={styles.month_block}>
                  {dates.map((element, i) => {
                    const { date, isThisMonth } = element;
                    const d = new Date(date);
                    const weekend_type = DateController.getWeekType(d.toJSON());
                    const d_d = d.getDate();
                    return (
                      <li
                        key={i}
                        data-attribute_is_this_month={isThisMonth ? 'true' : 'false'}
                        data-attribute_weekend_type={weekend_type}
                        children={d_d}
                      />
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
      <footer className={styles.footer}>
        <p>Студэнт 4 курса VIII семестра факультэта ЭИС групы ПЗ-4 (ПО-4)</p>
        <p>
          <a
            href="https://github.com/Pavel-Innokentevich-Galanin"
            title="GitHub праграміста"
            children={'Pavel-Innokentevich-Galanin'}
          />
        </p>
      </footer>
    </div>
  );
};

export default CalendarPage;
