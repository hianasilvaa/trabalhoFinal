const {sequelizeDb, sequelizeConfig} = require('./database')
const plantao = require('./plantao')
//CRIANDO TABELA
const medico = sequelizeConfig.define(
    'medico',
    {
        nome:{
            type:sequelizeDb.STRING
        },
        especialidade:{
            type:sequelizeDb.TEXT
        },
        contato:{
            type:sequelizeDb.TEXT
        },
        email:{
            type:sequelizeDb.TEXT
        }
    }
)
plantao.hasMany(medico,{
    onDelete:'CASCADE',
    onUpdate: 'CASCADE'
})
medico.belongsTo(medico)// Estou dizendo que funcionário pertence a apenas 1 departamento

medico.sync()
module.exports = medico
