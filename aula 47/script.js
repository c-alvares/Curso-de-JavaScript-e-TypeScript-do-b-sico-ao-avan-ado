const data = new Date("2023-09-08 00:00:00");
const dayOfWeek = data.getDay();

function describeDayOfWeek(dayOfWeek) {
  let dayOfWeekDescription;
  switch (dayOfWeek) {
    case 0:
      dayOfWeekDescription = "Domingo";
      return dayOfWeekDescription;
    case 1:
      dayOfWeekDescription = "Segunda";
      return dayOfWeekDescription;
    case 2:
      dayOfWeekDescription = "Terça";
      return dayOfWeekDescription;
    case 3:
      dayOfWeekDescription = "Quarta";
      return dayOfWeekDescription;
    case 4:
      dayOfWeekDescription = "Quinta";
      return dayOfWeekDescription;
    case 5:
      dayOfWeekDescription = "Sexta";
      return dayOfWeekDescription;
    case 6:
      dayOfWeekDescription = "Sábado";
      return dayOfWeekDescription;
    default:
      dayOfWeekDescription = "Data Incorreta";
      return dayOfWeekDescription;
  }
}

const dayOfWeekDescription = describeDayOfWeek(dayOfWeek);
console.log(dayOfWeekDescription);
