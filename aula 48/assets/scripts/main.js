const h1 = document.querySelector(".container h1");
const dateAndTime = new Date();

// Primeiro jeito de fazer:
// function getDayName(dayName) {
//   let dayDescription;
//   switch (dayName) {
//     case 0:
//       dayDescription = "domingo";
//       return dayDescription;
//     case 1:
//       dayDescription = "segunda-feira";
//       return dayDescription;
//     case 2:
//       dayDescription = "terça-feira";
//       return dayDescription;
//     case 3:
//       dayDescription = "quarta-feira";
//       return dayDescription;
//     case 4:
//       dayDescription = "quinta-feira";
//       return dayDescription;
//     case 5:
//       dayDescription = "sexta-feira";
//       return dayDescription;
//     case 6:
//       dayDescription = "sábado";
//       return dayDescription;
//     default:
//       dayDescription = "dia inválido";
//       return dayDescription;
//   }
// }

// function getMonthName(monthName) {
//   let monthDescription;
//   switch (monthName) {
//     case 0:
//       monthDescription = "Janeiro";
//       return monthDescription;
//     case 1:
//       monthDescription = "Fevereiro";
//       return monthDescription;
//     case 2:
//       monthDescription = "Março";
//       return monthDescription;
//     case 3:
//       monthDescription = "Abril";
//       return monthDescription;
//     case 4:
//       monthDescription = "Maio";
//       return monthDescription;
//     case 5:
//       monthDescription = "Junho";
//       return monthDescription;
//     case 6:
//       monthDescription = "Julho";
//       return monthDescription;
//     case 7:
//       monthDescription = "Agosto";
//       return monthDescription;
//     case 8:
//       monthDescription = "Setembro";
//       return monthDescription;
//     case 9:
//       monthDescription = "Outubro";
//       return monthDescription;
//     case 10:
//       monthDescription = "Novembro";
//       return monthDescription;
//     case 11:
//       monthDescription = "Dezembro";
//       return monthDescription;
//     default:
//       monthDescription = "Mês inválido";
//       return monthDescription;
//   }
// }

// function leftZero(num) {
//   return num >= 10 ? `${num}` : `0${num}`;
// }

// function formatDate() {
//   const dayName = dateAndTime.getDay();
//   const monthName = dateAndTime.getMonth();

//   const dayOfWeek = getDayName(dayName);
//   const day = leftZero(dateAndTime.getDate());
//   const month = getMonthName(monthName);
//   const year = dateAndTime.getFullYear();

//   const hour = leftZero(dateAndTime.getHours());
//   const minutes = leftZero(dateAndTime.getMinutes());

//   return `${dayOfWeek}, ${day} de ${month} de ${year} ${hour}:${minutes}`;
// }

// h1.innerHTML = formatDate();

// Segundo jeito de fazer:
// const opcoes = {
//     dateStyle: 'full',
//     timeStyle: 'short'
// };
// h1.innerHTML = dateAndTime.toLocaleString('pt-BR', opcoes);
// toLocaleDateString não aceita como options o timeStyle

// Terceiro jeito de fazer:
function getDayName(dayName) {
  let dayDescription = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado", "dia inválido"]
  return dayDescription[dayName]
}

function getMonthName(monthName) {
  let monthDescription = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro", "Mês inválido"]
  return monthDescription[monthName]
}

function leftZero(num) {
  return num >= 10 ? `${num}` : `0${num}`;
}

function formatDate() {
  const dayName = dateAndTime.getDay();
  const monthName = dateAndTime.getMonth();

  const dayOfWeek = getDayName(dayName);
  const day = leftZero(dateAndTime.getDate());
  const month = getMonthName(monthName);
  const year = dateAndTime.getFullYear();

  const hour = leftZero(dateAndTime.getHours());
  const minutes = leftZero(dateAndTime.getMinutes());

  return `${dayOfWeek}, ${day} de ${month} de ${year} ${hour}:${minutes}`;
}

h1.innerHTML = formatDate();