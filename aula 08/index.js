/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1993
*/ 
const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const pesoEmKg = 84;
const alturaEmMetros = 1.80;
let indiceMassaCorporal; //peso / (altura * altura);
let anoNascimento;

indiceMassaCorporal = pesoEmKg / (alturaEmMetros * alturaEmMetros);
anoNascimento = 2023 - idade

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${pesoEmKg} kg`) ;
console.log(`tem ${alturaEmMetros} e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`);