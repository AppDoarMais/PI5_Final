const express = require('express')
const router = express.Router()
const { body, param } = require('express-validator')

module.exports = (container) => {
  const controlador = container.resolve('DoacaoControlador')

  router.post(
    '/',
    body('doador').notEmpty().withMessage('Doador obrigatório'),
    body('produto').notEmpty().withMessage('Produto obrigatório'),
    body('quantidade').notEmpty().withMessage('Quantidade obrigatória'),
    body('validade').notEmpty().withMessage('Validade obrigatória'),
    body('localretirada').notEmpty().withMessage('Local de Retirada obrigatório'),
    body('datadisponibilidade').notEmpty().withMessage('Data em que o produto será disponibilizado é obrigatória'),
    body('datainiciodivulgacao').notEmpty().withMessage('Data de início da divulgação é obrigatória'),
    controlador.criarDoacao
  ),
    router.get(
      '/disponivel/',
      controlador.obterDoacoesDisponiveis
    ),
    router.get(
      '/acompanhamento/:_id',
      //body('_id').notEmpty().withMessage('Identificador da Doação obrigatório'),
      controlador.obterDoacaoAcompanhamento
    )

  return router
}