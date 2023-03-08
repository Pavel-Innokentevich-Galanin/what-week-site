import getMonthDays from '../getMonthDays/getMonthDays';
import getNextYear from '../getNextYear/getNextYear';

function getUniversityYearCalendar(year = '2020') {
  const nextYear = getNextYear(year);
  return [
    { month: 9, dates: getMonthDays(year, '9') },
    { month: 10, dates: getMonthDays(year, '10') },
    { month: 11, dates: getMonthDays(year, '11') },
    { month: 12, dates: getMonthDays(year, '12') },
    { month: 1, dates: getMonthDays(nextYear, '1') },
    { month: 2, dates: getMonthDays(nextYear, '2') },
    { month: 3, dates: getMonthDays(nextYear, '3') },
    { month: 4, dates: getMonthDays(nextYear, '4') },
    { month: 5, dates: getMonthDays(nextYear, '5') },
    { month: 6, dates: getMonthDays(nextYear, '6') },
    { month: 7, dates: getMonthDays(nextYear, '7') },
    { month: 8, dates: getMonthDays(nextYear, '8') },
  ];
}

export default getUniversityYearCalendar;
