// O EXERCÍCIO SE INICIA
window.alert("Bem vindo ao exercício supremo de Javascript, onde trabalhamos numa página de navegador, e usamos conceitos doo dia 5 e 6.");
let nomeInteiroUsuario = prompt("Olá, dev! Digite seu nome inteiro:");
    window.alert(`Olá, ${nomeInteiroUsuario}! Boa sorte!`);

    //imprime o nome
    window.document.body.innerHTML += `Olá, seu nome é ${nomeInteiroUsuario} <br />`;

    //Conta quantas letras e espaços tem no nome
    let quantidade = nomeInteiroUsuario.replace(/ /g, '').length;//O nome sem espaço, contado a letras.
    window.document.body.innerHTML += `Seu nomezinho tem ${quantidade} letras. <br />`;
    
    //pega a segunda letra do nome
    let segundaLetra = nomeInteiroUsuario[1];
    window.document.body.innerHTML += `A segunda letra do seu nome é ${segundaLetra}. <br />`;
    
    //primeiro indice
    let primeiroIndice = nomeInteiroUsuario.search('a');//se não der vai com indexOf
        window.document.body.innerHTML += `O primeiro índice da letra a no seu nome, caso não tenha tiu no a, é ${primeiroIndice} ><br />`;
    
    //Ultimo íncide da letra a
    let ultimoIndice = nomeInteiroUsuario.lastIndexOf('a');
        window.document.body.innerHTML += `O último índice da letra "a" no seu nome é ${ultimoIndice} <br />`;
    
    //ultimas 3 letras do nome
    let ultimasTresLetras = nomeInteiroUsuario.slice(-3);
        window.document.body.innerHTML += `As ultimas 3 letras do seu nome são: ${ultimasTresLetras} <br />`;4
    
    //palavras do nome
    let palavrasDoNome = nomeInteiroUsuario.split(' ');
        window.document.body.innerHTML += `As palavras do seu nome são: ${palavrasDoNome} <br />`;
    
    //nome com letras maiusculas
    let nomeComMaiuscula = nomeInteiroUsuario.toUpperCase();
        window.document.body.innerHTML += `Seu nome com letras maiúsculas, olha só: ${nomeComMaiuscula} <br />`;
    
    //nome com letras minusculas
    let nomeComMinuscula = nomeInteiroUsuario.toLowerCase();
        window.document.body.innerHTML += `Seu nome com letras minúsculas, veja só: ${nomeComMinuscula} <br />`;
    
    //indice onde comela seu nome:
    let indiceNome = nomeInteiroUsuario.indexOf(palavrasDoNome[2]);
        window.document.body.innerHTML += `O índice onde começa seu primeiro nome é ${indiceNome} <br />`;
    
    //substituir parte do nome
    let qualSubstituir = prompt("Você quer substituir o primeiro, segundo ou terceiro nomes? Só pode ser um deles. Se for primeiro, digite 0. Se for segundo, digite 1. Caso seja o terceiro, digite 2.");
    let numeroNome = parseInt(qualSubstituir);
    let substituirNome = prompt("Diga por qual nome você quer que substitua o seu?");
    nomeInteiroUsuario = nomeInteiroUsuario.replace(palavrasDoNome[numeroNome], substituirNome);
        window.document.body.innerHTML += `Seu nome com substituição é: ${nomeInteiroUsuario} <br />`;
    //FIM
