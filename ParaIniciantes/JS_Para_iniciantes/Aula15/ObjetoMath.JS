//ARRENDONDAR PARA CIMA/Baixo*
    //Arredondando para baixo
    let num1 = 9.545708;
    let num2 = Math.floor(num1);
    console.log(num2);
    //Arredondando para cima
    let num3 = Math.ceil(num1);
    console.log(num3);

//ARRENDONDAR PARA O MAIS PRÓXIMO*
    let numMetade = 9.50;
    let NumProx = Math.round(numMetade);
    console.log(NumProx);
    //na metade, arredonda para cima.

//QUAL O MAIOR NUMERO DA SEQUENCIA*
    let maiorNumero  = Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    console.log(maiorNumero);
    //Da mesma forma, min dá o menor número.

//GERAR NUMERO ALEATÓRIO entre 0 e 1*
    let numAleatorio = Math.random();
    console.log(numAleatorio);

//NUMERO DO PI*
    let numeroPi = Math.PI;
    console.log(numeroPi);

//POTENCIAÇÃO*
    console.log(`Elevando 2 a 10: ${Math.pow(2, 10)}`);
    //usando matemática
    console.log(`Elevando 9 : ${9** (1/2)}`);
//DIVISÃO*
    //Se dividir qualquer numero por 0, o resultado é infinito, dá um erro, e diferente de NULL;
    //Se dividir 0 por 0, o resultado é NaN.
    //Infinity é dado como conta certa e ainda é avaliado como true no JS.
    //Quanto mais se aproxima do zero, maior a conta.
    console.log(`Divisão por zero ${46/0}`);
    console.log(`${!!(46/0)}`); //Retorna verdadeiro.
    
