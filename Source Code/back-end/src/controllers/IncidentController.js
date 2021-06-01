
const connection = require('../database/connection');

module.exports = {

    /**Listagem de casos */
    async index(request, response){

        //Inicio da paginação da aplicação
        const {page = 1} = request.query; //Está fazendo um requisição para a rota page

        const [count] = await connection('incidents') //retornar a quantidade de todos os casos
			.count(); // conta todos os campos da tabela
			console.log(count);

			const incidents = await connection('incidents') //Trazendo todos os dados do incidents
			.join('ongs', 'ongs.id', '=', 'incidents.ong_id')//relacionar dados de duas tabelas
			.limit(5) // limitar a busca para 5 registro
			.offset((page - 1) * 5) //Na página preciso pular zero.Pular 5 registros por página (0 * 5)
			.select([
				'incidents.*', //Selecionar através de um array: todos os dados do incidentes e selecionar os demais campos o qual quero
				'ongs.name',
				'ongs.email',
				'ongs.whatsapp',
				'ongs.city',
				'ongs.uf'
		]);


			response.header('X-Total-Count', count['count(*)']) //retornar o número de regitros

			return response.json(incidents);
    },

    /**Criação de novos casos */
    async create(request, response){
            const { title, descreption, value } = request.body;
            const ong_id = request.headers.authorization;

            //buscando com um único id
        const [id] =await connection('incidents').insert({
                title,
                descreption,
                value,
                ong_id,
            });

		return response.json({ id });
    },
    
    /**Deletar casos */
    async delete(request, response){
        const {id} = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
		.where('id', id) //  buscar o incidente
		.select('ong_id')
		.first(); //q vai retornar apenas um resultado

		if(incident.ong_id != ong_id){
			return response.status(401).json({ error: 'Operation not permited.'});
		}

        await connection('incidents').where('id', id).delete();

		return response.status(204).send();
    }

};