const {valorInicial, deletaValorInicial} = require('../js/main.js');
var assert = require('assert');

describe('Inicia Calculadora', function(){
    it('Inicia display com 0' , function(){
        assert.equal(valorInicial(),0);
    });
    it("Deleta valor inicial do display", function(){
        assert.equal(deletaValorInicial(),"");
    });
});
