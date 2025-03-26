//Cada variavel criada pelo script, defini terminando em Js.
    const numeroJs = Number(prompt(`Digite um numero:`));//Já entra string e é convertido pra number.
    const numeroTituloJs = document.getElementById('numero-titulo');//Salvando elemento numa constante

//Pegando elemento texto
    const textoJs = document.getElementById('texto');//salvo elemento na constante.

//Alterando HTML interno por elemento:
    numeroTituloJs.innerHTML = '';
    numeroTituloJs.innerHTML = numeroJs;
//Se deixar só com =, ele zera, excluindo oque foi digitado antes. Para que não apareça o texto placeholder, zere.
    //Zerando o placeholder:
    textoJs.innerHTML = '';

//Adicionando texto ao HTML
    textoJs.innerHTML += `<p>A raiz quadrada do seu número é: ${numeroJs ** 0.5}<p/>`;//0.5 = 1/2
    textoJs.innerHTML += `<p>${numeroJs} é inteiro? ${Number.isInteger(numeroJs)}<p/>`;
    textoJs.innerHTML += `<p>${numeroJs} é NaN? ${Number.isNaN(numeroJs)}<p/>`;
    textoJs.innerHTML += `<p>${numeroJs} arredondado para baixo é´: ${Math.floor(numeroJs)}<p/>`;
    textoJs.innerHTML += `<p>${numeroJs} arredondado para cima é: ${Math.ceil(numeroJs)}<p/>`;
    textoJs.innerHTML += `<p>${numeroJs} com duas casas decimais é: ${numeroJs.toFixed(2)}<p/>`;


    /*Exercicio:
    crie um software, usando essa lógica, em que após o usuário digitar um número, seja exibido:
    Seu numero é:*
    Raiz quadrada:*
    ____ inteiro: (true ou false)*
    é NaN?*
    Arredondando pra baixo: ______*
    Arredondando pra cima: ______
    Com duas casas decimais: ______  
    */
