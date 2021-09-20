const { container, setup } = require('./di-config')
setup()

const express = require('express');
const config = require('./config');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const fakeHMR = require('./fake-hmr');
// const swaggerUI = require('swagger-ui-express')
// const swaggerJsDoc = require('swagger-jsdoc')
var swaggerUi = require('swagger-ui-express'),
  swaggerDocument = require('./swagger.json');

const promBundle = require('express-prom-bundle')
const promMetrics = promBundle({
  includePath: true,
  includeMethod: true,
  customLabels: { project_name: 'api-autenticacao' }
})

const compiler = webpack(webpackConfig);

const watching = compiler.watch({
  // Example watchOptions
  aggregateTimeout: 300,
  poll: undefined
}, (err, stats) => { // Stats Object
  console.log(stats.toString({
    chunks: false,  // Makes the build much quieter
    colors: true    // Shows colors in the console
  }))
  if (stats.hasErrors()) {
    console.log('didn\' t build')
    return;
  }
  console.log('built');
  fakeHMR.built();
});

const app = express();
//app.use(morgan('combined'))
const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.use(promMetrics)

const rotaAutenticacao = require('./api/porta/AutenticacaoRota')(container)
app.use('/api/autenticar', rotaAutenticacao)

const rotaDoacao = require('./api/porta/DoacaoRota')(container)
app.use('/api/doacao', rotaDoacao)

// const options = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title: "API de Autenticação",
//       version: "1.0.0",
//       description: "API para autenticação no sistema"
//     },
//     servers: [
//       {
//         url: "https://api-autenticacao.appdoarmais.repl.co/api"
//       },
//       {
//         url: "https://qa-api-autenticacao.appdoarmais.repl.co/api"
//       },
//       {
//         url: "https://dev-api-autenticacao.appdoarmais.repl.co/api",
//       }
//     ]
//   },
//   apis: [
//     './api/porta/AutenticacaoRota.js',
//     './api/porta/DoacaoRota.js'
//   ]
// }

// const specs = swaggerJsDoc(options)
// app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs))

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', rotaAutenticacao);

fakeHMR.config({ app });
app.use(express.static('public'));

// require('./webpackRunner');

app.get('*', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <title>hi</title>
  </head>
  <body>
    <div id="app"/>
    <script src="/bundle.js" type="text/javascript"></script>
  </body>
</html>`)
});

app.listen(config.PORT, function () {
  console.log(`Para desenvolvimento local, localhost:${config.PORT} in a web browser.`);

  const colors = require('colors');
  console.log('\nSWAGGER: https://pi5final.appdoarmais.repl.co/api-docs/ \n'.red)
})