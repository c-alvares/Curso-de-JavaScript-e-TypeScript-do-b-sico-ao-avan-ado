const data = new Date('2023-09-08 00:00:00');
const dayOfWeek = data.getDay();
let dayOfWeekDescription;

// if (dayOfWeek === 0) {
//     dayOfWeekDescription = 'Domingo';
// } else if (dayOfWeek === 1) {
//     dayOfWeekDescription = 'Segunda';
// } else if (dayOfWeek === 2) {
//     dayOfWeekDescription = 'Terça';
// } else if (dayOfWeek === 3) {
//     dayOfWeekDescription = 'Quarta';
// } else if (dayOfWeek === 4) {
//     dayOfWeekDescription = 'Quinta';
// } else if (dayOfWeek === 5) {
//     dayOfWeekDescription = 'Sexta';
// } else if (dayOfWeek === 6) {
//     dayOfWeekDescription = 'Sábado';
// } else {
//     dayOfWeekDescription = 'Data incorreta';
// }

switch (dayOfWeek) {
case 0:
    dayOfWeekDescription = 'Domingo';
    break;
case 1:
    dayOfWeekDescription = 'Segunda';
    break;
case 2:
    dayOfWeekDescription = 'Terça';
    break;
case 3:
    dayOfWeekDescription = 'Quarta';
    break;
case 4:
    dayOfWeekDescription = 'Quinta';
    break;
case 5:
    dayOfWeekDescription = 'Sexta';
    break;
case 6:
    dayOfWeekDescription = 'Sábado';
    break;
default:
    dayOfWeekDescription = 'Data Incorreta';
}
console.log(dayOfWeekDescription);
