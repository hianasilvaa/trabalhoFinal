const sequelizeDb = require("sequelize")
const sequelizeConfig = new sequelizeDb(
    'plantao_db',//O nome do banco de dados
    'root',// informando o nome de usuário do banco
    '', // informando a senha do banco
    {
        dialect:'sqlite', 
        storage:'./plantao_db.sqlite'// nome do arquivo onde será salvo o nosso banco
    }
)

module.exports = {sequelizeDb, sequelizeConfig}