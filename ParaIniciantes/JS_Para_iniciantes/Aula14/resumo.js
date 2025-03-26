let num1 = -4 ;// Number
let num2 = 2.5;// number

console.log(num1 + num2);
console.log(num1.toString() + num2.toString());//Serão imprimidos como string
console.log( `${typeof num1}, ${typeof num2}`);/*Embora impressos como string na linha acima, continuam number. */

//CONVERTENDO PRA BINÁRIO:

    console.log(num1.toString(2));// 2 = base 2 ou binário.

//Arredondar
    let numArredondar = 9.545788994323238;
 
    console.log(numArredondar.toFixed(2)); // 2 - quantas casas quedo deixar após a vírgula.

//Saber se é inteiro
    console.log(Number.isInteger(numArredondar)); 

//saber se é Not a Number(NaN)
    let temp = num1 * '5';//se sei que receberei uma string, minha função de dev é converter pra um numero. 
//boa prática = nunca fazer conta com String.
    console.log(Number.isNaN(temp));// método do tipo booleano, com retorno entre true e false. 
    //se for um Not a Number, retornará true.

//padrão IEEE 754-2008
    let numTeste = 0.7;
    let numTeste2 = 0.1;
    console.log(numTeste + numTeste2);//imprecisão, pequena diferença na casa dos milésimos.

    numTeste += numTeste2;//Deveria ser 0.8
    numTeste += numTeste2;//Deveria ser 0.9
    numTeste += numTeste2;//Deveria ser 1.0
    console.log(numTeste);
    //resolvendo esse problema:
    numTeste = parseFloat(numTeste.toFixed(2)); //Arredonda pra 2 casas, passa para float.
    console.log(numTeste);
    console.log(Number.isInteger(numTeste));
    //usando number:
    //RECOMENDADO = USAR ISSO.
    numTeste = Number(numTeste.toFixed(2));
    //resolvendo usando conta
    numTeste = ((numTeste*100) + (numTeste2*100))/100;//se multioliquei os dois por 100, posso dividir o resultado por 100!
    console.log(numTeste);