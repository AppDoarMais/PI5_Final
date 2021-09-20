module.exports = ({UsuarioRepositorio}) => 
  async(login, senha, tipoUsuario) => { 
    return UsuarioRepositorio.autenticarUsuario(login, senha, tipoUsuario)
  }