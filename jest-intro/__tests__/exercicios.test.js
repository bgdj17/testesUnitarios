const lista19 = require('../functionParaTest');
test('deve retornar verdadeiro se for string', () => {
    expect(lista19.exercicio1('bruna')).toBeTruthy();
});
test('deve retornar false se o emal e senha não estiverem corretos', () => {
    expect(lista19.exercicio2('bruna', 'batatafrita')).toBeFalsy();
});