
const awilix = require('awilix')

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY
})

function setup() {
  container.loadModules([
    'api/infra/Logger/**/*.js',
    'api/infra/mongoDB/**/*.js',
    'api/aplicacao/**/*.js',
    'api/dominio/**/*.js',
    'api/porta/*Controlador.js',
  ])
}

module.exports = {
  container,
  setup
}
