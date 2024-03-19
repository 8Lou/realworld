// Функция форматирования даты в длинный формат
export const formatLongDate = (dateString: string): string => {
  // Создаем новый объект Date на основе переданной строки с датой
  const date = new Date(dateString);
  // Используем метод toLocaleDateString для форматирования даты
  return date.toLocaleDateString('en-US', {
    year: 'numeric', // Выводим год
    month: 'long', // Выводим полное название месяца
    day: 'numeric', // Выводим число месяца
  });
};
