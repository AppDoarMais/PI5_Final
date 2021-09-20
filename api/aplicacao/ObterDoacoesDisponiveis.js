module.exports = ({ DoacaoRepositorio }) =>
    async () => {
        return DoacaoRepositorio.obterDoacoesDisponivel()
    }