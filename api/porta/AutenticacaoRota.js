const express = require('express')
const router = express.Router()
const { body, param } = require('express-validator')

module.exports = (container) => {
  const controlador = container.resolve('AutenticacaoControlador')



  /**
 * @swagger
 * /Autenticacao:
 *   post:
 *     summary: Autenticar usuários
 *     description: Valida se dados de autenticação estão aptos a acessar o sistema.
*/
  router.post(
    '/',
    body('login').trim(),
    body('senha').trim(),
    body('tipoUsuario').trim(),
    controlador.autenticarUsuario
  )

  return router
}