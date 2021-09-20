const { validationResult } = require('express-validator')

module.exports = ({ AutenticarUsuario, Logger }) => ({

  autenticarUsuario: async (req, res) => {
    const erros = validationResult(req)

    if (!erros.isEmpty()) {
      return res.status(400).json({ erros: erros.array() })
    }

    const { login, senha, tipoUsuario } = req.body

    console.log('Novo usuario...' + login)

    Logger.info(`Autenticação realizada`)
    const usuario = await AutenticarUsuario(login, senha, tipoUsuario)

    const blnUsuarioValido = !!Object.values(usuario).length

    res.json(blnUsuarioValido)
    res.json(true)
  }
})