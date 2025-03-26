/*Resumo da aula e exercício estão na pasta dia 3, ler o resumo e fazer/refazer
os exercícios*/

//EXERCICIO 1
const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
let idade = 30 ;
let peso = 80 ;
let alturaEmM = 1.8;
let indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
const ano = 2024 - idade;

console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + 'Kg, tem ' + alturaEmM + ' m de altura, e seu IMC é ' + indiceMassaCorporal + '. O ano de seu nascimento é ' + ano);
/*Usando templateString */
console.log(` ${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} Kg, tem ${alturaEmM} m de altura, e seu IMC é ${indiceMassaCorporal}. O ano de seu nascimento é ${ano}`);
//EXERCICIO2