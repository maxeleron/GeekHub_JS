//Создайте дату
var date = new Date(2012, 1, 20, 3, 12);

//День недели в европейской нумерации
function getLocalDay(date) {

  var day = date.getDay();

  if (day == 0) { // день 0 становится 7
    day = 7;
  }

  return day;
}

//День указанное количество дней назад
function getDateAgo(date, days) {
  date.setDate(date.getDate() - days);
  return date.getDate();
}

//Последний день месяца?
function getLastDayOfMonth(year, month) {
  var date = new Date(year, month + 1, 0);
  return date.getDate();
}