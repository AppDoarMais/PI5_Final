const { RESOLVER, Lifetime } = require('awilix');
const { Console } = require('winston/lib/winston/transports');

const DoacaoRepositorio = ({ DoacaoModel }) => ({
    criarDoacao: async (doador, produto, quantidade, validade, localretirada, observacao, datadisponibilidade, datainiciodivulgacao) => {
        const doacaoModel = new DoacaoModel({
            doador: doador,
            produto: produto,
            quantidade: quantidade,
            validade: validade,
            localretirada: localretirada,
            observacao: observacao,
            datadisponibilidade: datadisponibilidade,
            datainiciodivulgacao: datainiciodivulgacao,
            status: 4
        });

        const novadoacao = await doacaoModel.save();

        return novadoacao
    },

    obterDoacoesDisponivel: async () => {
        return await DoacaoModel.find({
            status: 4
        });
    },

    obterDoacaoAcompanhamento: async (_id) => {
        return await DoacaoModel.findOne({
            _id: _id
        })
    }
})

module.exports = DoacaoRepositorio

DoacaoRepositorio[RESOLVER] = {
    name: 'DoacaoRepositorio',
    lifetime: Lifetime.SINGLETON
}