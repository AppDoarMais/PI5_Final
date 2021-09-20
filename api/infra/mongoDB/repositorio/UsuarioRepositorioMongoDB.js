const { RESOLVER, Lifetime } = require('awilix')

const UsuarioRepositorio = ({ UsuarioModel }) => ({
  inserir: async (usuario) => {
    const usuarioModel = new UsuarioModel(usuario);

    const novoUsuario = await usuarioModel.save()
    console.log('Novo usuario...', novoUsuario)

    return novoUsuario
  },

  autenticarUsuario: async (login, senha, tipoUsuario) => {
    return await UsuarioModel.find({
      login: login,
      senha: senha,
      tipoUsuario: tipoUsuario
    })
  },
})

module.exports = UsuarioRepositorio

UsuarioRepositorio[RESOLVER] = {
  name: 'UsuarioRepositorio',
  lifetime: Lifetime.SINGLETON
}