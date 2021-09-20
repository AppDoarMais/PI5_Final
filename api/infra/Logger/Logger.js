const {RESOLVER, Lifetime} = require('awilix')
const winston = require('winston')

const Logger = () => 
  winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: {service: 'api-login'},
    transports: [
      new winston.transports.File({filename: 'error.log', level: 'error'}),
      new winston.transports.File({filename: 'auditoria.log'})
    ]
  })

module.exports = Logger

Logger[RESOLVER] = {
  name: 'Logger',
  lifetime: Lifetime.SINGLETON
}