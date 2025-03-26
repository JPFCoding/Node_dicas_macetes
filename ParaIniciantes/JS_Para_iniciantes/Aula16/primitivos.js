/*
Primitivos(copiados)
 ->tipos de dado = valor 
    ->String, Number, Undefined, Null, Boolean, (biginit, symbol)
 ->Imutáveis
 ->Exemplo:
    ->String
        ->let nome = 'Luiz';    
        ->nome[0] = 'R'; //não muda
        ->console.log(nome[0]); //L Mesmo se eu tentar colocar R, continua sendo L, pois é imutável
        ->console.log(nome); saida -> Luiz
    ->Number
        ->let numero = 10;
        ->numero = numero + 5; //não muda
        ->console.log(numero); saida -> 10
De referência(passados por referência)
    costumam ser mutáveis
    ->Array, Object, Function
    usando array:
        let a[1, 2, 3];
        let b = a //b referencia o mesmo valor de a na memória
        a.push(4);
        console.log(b); saida -> 1, 2, 3, 4
        b aponta para a, se mudar a muda b.
            b.pop();
            Afetou a também
            console.log(a); saida -> 1, 2, 3
    -> se quiser copiar efetivamente o valor de a pra b
        ->valor de c será independente de a.
        let a[1, 2, 3];
        let b = [...a]; // fiz um spread de a para b, copiando efetivamente o valor de a para b
        a.push(4);  //empurrei mais um valor pra a
        console.log(b); saida -> 1, 2, 3
    usando object:
        const a = {
            nome: 'Luiz',
            sobrenome: 'Otávio Miranda'
        };
        const b = {...a} // da mesma forma, se usar atribuição, apontam para o mesmo valor na memória
        a.nome = 'João';
        console.log(b); saida -> Luiz Otávio Miranda 

*/ 