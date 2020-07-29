
// 3 (Obrigatório) -.Crie uma função que recebe um parâmetro, essa função deve
// retornar o parâmetro + 5. (soma)
// Agora crie três testes dentro de um bloco utilizando o ‘describe’, dentro desses três
// testes você precisa validar:
// 1 - Que o retorno da função é a soma correta do parâmetro + 5.
// 2 - Que o retorno da função não é undefined.
// 3 - Que o retorno da função não é null.
// 4 (Obrigatório) - Crie uma função que recebe dois parâmetros, esses parâmetros
// precisam ser números (garanta isso) e, o retorno dessa função deve ser a multiplicação
// desses do primeiro parâmetro pelo segundo parâmetro.
// Agora crie um bloco de testes utilizando o ‘describe’, nesse bloco crie 4 testes
// utilizando os métodos
// 1 - .toBeGreaterThan(),
// 2 - .toBeGreaterThanOrEqual(),
// 3- .toBeLessThan()
// 4 - toBeLessThanOrEqual().

// 5 (Obrigatório) - Crie um programa que pergunte para o usuário 3 palavras, logo após
// crie uma função que receba como parâmetro essas 3 palavras (garanta que os 3
// valores serão strings), o retorno dessa função deve ser a junção dessas 3 palavras,
// exemplo:
// Palavra 1 - Pão
// Palavra 2 - Queijo
// Palavra 3 - Mortadela
// Retorno da função - Pão Queijo Mortadela
// Por fim crie um teste que verifique se a frase possui a palavra ‘Churros’.
// 6 (Obrigatório) - No seu arquivo de testes crie um bloco utilizando o ‘describe’ e,
// dentro desse bloco crie uma variável x com um valor numérico, logo após faça um
// setup utilizando ‘beforeEach’ e ‘afterEach’ para garantir que no início de cada teste a
// variável x recebe + 1 em seu valor e, ao acabar todos os testes o valor da variável x
// seja 0.
// 7 - Crie uma função que recebe como parâmetro o nome de um Pokemon, esse nome
// precisa está todo em letras minúsculas, o retorno dessa função deve ser um request de
// ‘GET’ na api https://pokeapi.co/pokemon/’parâmetro’.
// Após isso crie um teste para validar que esse request está sendo feito corretamente.
class Usuario {
    constructor(email, senha) {
        this.email = email
        this.senha = senha
    }
}

module.exports = {
    exercicio1(a) {
        if (typeof (a) == 'string') {
            return true
        }
        else {
            return false
        }
    },

    exercicio2(email, senha) {
        var novoUsuario = new Usuario(email, senha)
        if (email == 'admin@arbyte.com' && senha == 'batatafrita') {
            return true
        }
        else {
            return false
        }
    },
    exercicio3(num) {
        if(typeof(num)!= Number){
            num.parse
        }
        return num + 5;
    }
}