/**
 * Функция возвращает следующий год
 * @param {*} year
 * @returns {string}
 * ```
 * 2022
 * 0999
 * 0001
 * 0000
 * -000001
 * -000999
 * ```
 */
export default function getNextYear(year: string | undefined) {
  if (!year) return `${new Date().getFullYear()}`;

  year = `${Number(year) + 1}`;

  if (Number(year) < 0) {
    year = `${-year}`.padStart(6, '0');
    return `-${year}`;
  }

  return `${year}`.padStart(4, '0');
}
