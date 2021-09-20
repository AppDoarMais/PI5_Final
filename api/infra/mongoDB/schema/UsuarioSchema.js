const {RESOLVER} = require('awilix')
const {Schema} = require('mongoose')

const usuarioSchema = new Schema({
  login: {
    type: String,
    unique: true,
    index: true,
    required: [true, 'Login é obrigatorio']
  },
  senha: {
    type: String,
    unique: false,
    index: false,
    required: [true, 'Senha é obrigatoria']
  },
  status: {
    type: String,
    unique: false,
    index: true,
    required: [true, 'Status é obrigatorio']
  },
  tipoUsuario: {
    type: String,
    unique: false,
    index: false,
    required: [true, 'Tipo de usuário é obrigatorio']
  }
})

const usuarioModel = ({mongoose}) => mongoose.model('usuarios', usuarioSchema)

module.exports = usuarioModel

usuarioModel[RESOLVER] = {
  name: 'UsuarioModel'
}