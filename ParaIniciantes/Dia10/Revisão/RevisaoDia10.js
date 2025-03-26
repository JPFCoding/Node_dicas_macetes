// Constante array
const array = [1, 2, 3]; // Não posso reatribuir o valor
array[0] = 'a'; // Isso eu posso.
array.push(4); // Colocar mais um novo valor.
array.pop(); // Remover o último valor.

// Criando objeto:
// 1) Objeto Literal
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda'
}; // Objeto = chaves

// Acessar um atributo:
console.log(pessoa1.nome); // "Luiz"

// Função que cria objetos = Factory function
function criaPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    };
}

// Criando pessoa:
const pessoa2 = criaPessoa('Luiz', 'Miranda', 22);
console.log(pessoa2); // { nome: 'Luiz', sobrenome: 'Miranda', idade: 22 }

// Função com métodos:
function criaPessoa2(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade,
        // Métodos do objeto
        fala() {
            console.log("Olá mundo!");
        },
        // THIS = este objeto neste contexto.
        fala2() {
            console.log(`${this.nome} ${this.sobrenome} ${this.idade}`);
        },
        incrementaIdade() {
            this.idade++;
        }
    };
}

// Criando pessoa com métodos:
const pessoa3 = criaPessoa2('Luiz', 'Otávio', 25);
pessoa3.fala(); // "Olá mundo!"
pessoa3.fala2(); // "Luiz Otávio 25"
pessoa3.incrementaIdade();
console.log(pessoa3.idade); // 26
