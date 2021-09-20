const { validationResult } = require('express-validator')

module.exports = ({ CriarDoacao, ObterDoacoesDisponiveis, ObterDoacaoAcompanhamento }) => ({

    criarDoacao: async (req, res) => {
        const erros = validationResult(req)

        if (!erros.isEmpty()) {
            return res.status(400).json({ erros: erros.array() })
        }

        const { doador, produto, quantidade, validade, localretirada, observacao, datadisponibilidade, status, datainiciodivulgacao } = req.body

        const doacao = await CriarDoacao(doador, produto, quantidade, validade, localretirada, observacao, datadisponibilidade, status, datainiciodivulgacao)

        res.json(doacao)
    },

    obterDoacaoAcompanhamento: async (req, res) => {

        const _id = req.params._id

        const erros = validationResult(req)

        if (!erros.isEmpty()) {
            return res.status(400).json({ erros: erros.array() })
        }

        const doacao = await ObterDoacaoAcompanhamento(_id)

        res.json(doacao)
    },

    obterDoacoesDisponiveis: async (req, res) => {
        const erros = validationResult(req)

        if (!erros.isEmpty()) {
            return res.status(400).json({ erros: erros.array() })
        }

        const doacao = await ObterDoacoesDisponiveis()

        res.json(doacao)
    }
})