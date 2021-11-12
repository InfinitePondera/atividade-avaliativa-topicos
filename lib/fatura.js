module.exports = class Fatura {
    constructor(codigo, valor, data, cliente){
        this.codigo = codigo;
        this.valor = valor;
        this.data = data;
        this.cliente = cliente;
    }
}