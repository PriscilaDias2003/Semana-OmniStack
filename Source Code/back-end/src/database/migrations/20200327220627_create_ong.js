/**Método UP é o que vai criar ou aconter com nosso banco de dados */

exports.up = function(knex) {

    /**Criando uma tabela com o KNEX */
    
    return knex.schema.createTable('ongs', function(table){
    
    /**Criando um campo chamado id do tipo String, ele vai ser primary key */
    
    table.string('id').primary();
    
    table.string('name').notNullable();
    
    table.string('email').notNullable();
    
    table.string('whatsapp').notNullable();
    
    table.string('city').notNullable();
    
    table.string('uf' , 2).notNullable();
    
    /**UF = Estado, esse 2 que vem depois da vírgula serve
    
    * para dizer o tamanho de caracteres que podem ser recebidos nesse campo */
    
    });
    
    };
    
    /**Método down é o que vai acontecer caso precisemos voltar atrás com algo em nosso banco de dados */
    
    exports.down = function(knex) {
    
     return knex.schema.dropTable('ongs');
    
    };