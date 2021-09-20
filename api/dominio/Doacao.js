class Doacao {
    constructor(doador, produto, quantidade, validade, localretirada, observacao, datadisponibilidade, datainiciodivulgacao) {
        this.doador = doador
        this.produto = produto
        this.quantidade = quantidade
        this.validade = validade
        this.localretirada = localretirada
        this.observacao = observacao
        this.datadisponibilidade = datadisponibilidade
        this.status = 3
        this.datainiciodivulgacao = datainiciodivulgacao
    }
}

module.exports = Doacao