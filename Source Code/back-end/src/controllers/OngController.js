const connetion = require('../database/connection');
const crypto = require('crypto');
module.exports = {

    /**Listagem de Ongs */
    async index (request, response) {
        const ongs = await connetion('ongs').select('*'); /**Seleciona toda nossa tabela ongs **/
      
        return response.json(ongs);
      },
      
    /**Cadastro de ongs */  
    async create(request, response) {
        const {name, email, whatsapp, city, uf} = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
        /**Dizendo que o nosso id com o método randomBytes vai gerar uma senha de 4 bytes
         * depois será convertida em String, e essa String é do tipo hexadecimal
         */

        await connetion('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,  
        }); 
        /**Awai = serve para que quando chegar nessa parte do código, ele vai esperar até que a inserção de 
         * dados seja feita
         */
        
        return response.json({ id });
    }
};