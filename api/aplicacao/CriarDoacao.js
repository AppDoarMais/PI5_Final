module.exports = ({ DoacaoRepositorio }) =>
    async (doador, produto, quantidade, validade, localretirada, observacao, datadisponibilidade, datainiciodivulgacao) => {
        return DoacaoRepositorio.criarDoacao(doador, produto, quantidade, validade, localretirada, observacao, datadisponibilidade, datainiciodivulgacao)
    }