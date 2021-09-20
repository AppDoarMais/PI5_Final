const { RESOLVER, Lifetime } = require('awilix')

const URL = 'mongodb+srv://aluno:aluno123@clusterarquiteturaweb.7bpmq.mongodb.net/autenticacaoDB?retryWrites=true&w=majority'

const mongoose = require('mongoose');

const database = () => {
  mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true});
  return mongoose
}

module.exports = database

database[RESOLVER] = {
  name: 'mongoose',
  lifetime: Lifetime.SINGLETON,
}