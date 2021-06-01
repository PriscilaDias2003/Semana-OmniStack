 /**Importa um arquivo chamado express*/
const express = require('express');

 /**Importa nosso arquivo OngController que contém nossos métodos */
const OngCrontroler = require('./controllers/OngController');

 /**Importa nosso arquivo IncidentController que contém nossos métodos */
const IncidentCrontroller = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionControler');
const routes = express.Router();

routes.post('/session', SessionController.create);

routes.get('/ongs', OngCrontroler.index); /**Listagem de ongs */
routes.post('/ongs', OngCrontroler.create); /**Cadastro de ongs */

routes.get('/incidents', IncidentCrontroller.index); /**Listagem de Incidents */
routes.post('/incidents', IncidentCrontroller.create); /**Cadastro de Incidents */
routes.delete('/incidents/:id', IncidentCrontroller.delete)/**Rota para deletar um caso, o ":id" é para saber qual o id do caso que será apagado */

routes.get('/profile', ProfileController.index);

module.exports = routes;