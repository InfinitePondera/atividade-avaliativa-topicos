const Cliente = require("../lib/cliente");
const Fatura = require("../lib/fatura");
const {filtrarFaturaAcimaDeDoisMil, filtrarFaturaEntre2500e2000eData, filtrarFaturaEntre3000e2500eData, filtrarAcimaDe4000} = require("../lib/clienteFunctions");

describe('Fatura', () => {
    const cliente1 = new Cliente ("João", new Date(2019, 7, 19), "PR");
    const cliente2 = new Cliente ("Maria", new Date(2016, 3, 21), "RS");
    const cliente3 = new Cliente ("Ronaldo", new Date(2018, 9, 7), "SC");
    const cliente4 = new Cliente ("Roberta", new Date(2012, 11, 21), "MG");

    const fatura1 = new Fatura (1, 4206, new Date(2021, 11, 12), cliente1);
    const fatura2 = new Fatura (2, 2500, new Date(2019, 5, 14), cliente2);
    const fatura3 = new Fatura (3, 735, new Date(2017, 8, 7), cliente3);
    const fatura4 = new Fatura (4, 126, new Date(2020, 3, 5), cliente4);

    test('Fatura Acima de Dois Mil', () => {
        var faturas = [
            fatura1,
            fatura2,
            fatura3,
            fatura4
        ]

        var retornoEsperado = [
            fatura1,
            fatura2
        ]
    
        faturas = filtrarFaturaAcimaDeDoisMil(faturas);

        expect(faturas).toEqual(retornoEsperado);
    })

    test('Fatura Entre 2000 e 2500 com data menor ou igual a um mês atrás', () => {
        var faturas = [
            fatura1,
            fatura2,
            fatura3,
            fatura4
        ]

        var retornoEsperado = [
            fatura2,
            fatura3,
            fatura4
        ]
    
        faturas = filtrarFaturaEntre2500e2000eData(faturas);

        expect(faturas).toEqual(retornoEsperado);
    })

    test('Fatura Entre 2500 e 3000 com data menor ou igual a dois meses atrás', () => {
        var faturas = [
            fatura1,
            fatura2,
            fatura3,
            fatura4
        ]

        var retornoEsperado = [
            fatura2,
            fatura3,
            fatura4
        ]
    
        faturas = filtrarFaturaEntre3000e2500eData(faturas);

        expect(faturas).toEqual(retornoEsperado);
    })

    test('Fatura maior que 4000 e pertence a região sul', () => {
        var faturas = [
            fatura1,
            fatura2,
            fatura3,
            fatura4
        ]

        var retornoEsperado = [
            fatura4
        ]
    
        faturas = filtrarAcimaDe4000(faturas);

        expect(faturas).toEqual(retornoEsperado);
    })
});