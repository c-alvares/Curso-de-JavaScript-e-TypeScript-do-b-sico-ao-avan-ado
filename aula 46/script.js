const data = new Date('2019-04-20 20:20:59');
console.log('Dia', data.getDate()) // Dia 20
console.log('Mês', data.getMonth()) // Mês 3
console.log('Ano', data.getFullYear()) // Ano 2019
console.log('Hora', data.getHours()) // Hora 20
console.log('Min', data.getMinutes()) // Min 20
console.log('Seg', data.getSeconds()) // Seg 59
console.log('ms', data.getMilliseconds()) // ms 0
console.log('Dia semana', data.getDay()) // Dia semana 6
console.log(data.toString()); // Sat Apr 20 2019 20:20:59 GMT-0300 (Horário Padrão de Brasília)
console.log(Date.now()); // 1694181812419

