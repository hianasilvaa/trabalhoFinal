const {sequelizeDb, sequelizeConfig} = require('./database')

const plantao = sequelizeConfig.define(
    'plantao',// o nome da tabela
    {
        nome:{
            type:sequelizeDb.STRING
        },
        data:{
            type:sequelizeDb.FLOAT
        },
        especialidade:{
            type:sequelizeDb.FLOAT
        },
        horario_inicio:{
            type:sequelizeDb.FLOAT
        },
        horario_fim:{
            type:sequelizeDb.FLOAT
        }
    }
)

plantao.sync()
module.exports = plantao