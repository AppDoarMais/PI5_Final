const { RESOLVER } = require('awilix')
const { Schema } = require('mongoose')

const doacaoSchema = new Schema({
    doador: {
        type: String,
        default: '',
        index: true,
        required: [true, 'Doador é obrigatorio']
    },
    produto: {
        type: String,
        length: 100,
        default: '',
        required: [true, 'Produto é obrigatorio']
    },
    quantidade: {
        type: String,
        length: 20,
        default: '',
        required: [true, 'Quantidade é obrigatorio']
    },
    validade: {
        type: Date,
        default: Date.now,
        required: [true, 'Validade é obrigatorio']
    },
    localretirada: {
        type: String,
        length: 100,
        default: '',
        required: [true, 'Local Retirada é obrigatorio']
    },
    observacao: {
        type: String,
        length: 200,
        default: ''
    },
    datadisponibilidade: {
        type: Date,
        default: Date.now,
        required: [true, 'Data Disponibilidade é obrigatorio']
    },
    status: {
        type: Number,
        default: 0
    },
    datainiciodivulgacao: {
        type: Date,
        default: Date.now,
        required: [true, 'Data de Início da Divulgação é obrigatorio']
    }
})

const doacaoModel = ({ mongoose }) => mongoose.model('doacao', doacaoSchema)

module.exports = doacaoModel

doacaoModel[RESOLVER] = {
    name: 'DoacaoModel'
}