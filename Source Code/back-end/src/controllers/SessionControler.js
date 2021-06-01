const connection = require('../database/connection');

module.exports = {
	async create(request, response){
		//rota de login: verificar se a ong existe.
		const { id } = request.body;
        

        const ong = await connection('ongs')
		.where('id', id) //  buscar o incidente
		.select('name')
		.first(); //q vai retornar apenas um resultado

		if(!ong){
			return response.status(400).json({ error: 'NO Ong found with this ID'});
		}
		return response.json(ong);
		
}
}