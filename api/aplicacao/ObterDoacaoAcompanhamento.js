module.exports = ({ DoacaoRepositorio }) =>
    async (_id) => {
        return await DoacaoRepositorio.obterDoacaoAcompanhamento(_id)
    }