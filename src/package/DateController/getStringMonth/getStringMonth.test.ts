import getStringMonth from './getStringMonth';

test('getStringMonth() Мы получили строковой месяц?', () => {
  expect(getStringMonth(1)).toBe('Студзень (ЯНВ)');
  expect(getStringMonth(2)).toBe('Люты (ФЕВ)');
  expect(getStringMonth(3)).toBe('Сакавiк (МАР)');
  expect(getStringMonth(4)).toBe('Красавiк (АПР)');
  expect(getStringMonth(5)).toBe('ТРАВЕНЬ (МАЙ)');
  expect(getStringMonth(6)).toBe('Чэрвень (ИЮН)');
  expect(getStringMonth(7)).toBe('Лiпень (ИЮЛ)');
  expect(getStringMonth(8)).toBe('Жнiвень (АВГ)');
  expect(getStringMonth(9)).toBe('Вераснь (СЕН)');
  expect(getStringMonth(10)).toBe('Кастрычнiк (ОКТ)');
  expect(getStringMonth(11)).toBe('Лiстапад (НОЯ)');
  expect(getStringMonth(12)).toBe('Снежань (ДЕК)');

  expect(getStringMonth(-1)).toBe(undefined);
  expect(getStringMonth(0)).toBe(undefined);
  expect(getStringMonth(13)).toBe(undefined);
});
