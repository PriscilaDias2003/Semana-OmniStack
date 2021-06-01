const knex = require('knex'); /**Importa o knex, nosso auxiliar para programação de banco de dados em JS */

/**Acessa nosso arquivo KnexFile onde estão nossas configurações de banco de dados */
const configuration = require('../../knexfile');

/**Cria nossa conexção com o banco de dados passando
como parâmetro nosso arquivo knexfile acesando a parte development */
const connection = knex(configuration.development); 

module.exports = connection; /**Exporta a conexção feita com o banco de dados */