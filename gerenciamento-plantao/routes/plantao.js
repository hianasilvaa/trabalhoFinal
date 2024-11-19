const express = require('express')
const router = express.Router()// Módulo que irá trabalhar com rotas

const medico = require('../models/medico')
const plantao = require('../models/plantao')

//CRIANDO ROTAS
//10 ª ROTA - INSERIR DADOS NA TABELA
router.post('/store',async(req, res)=>{

    // Criar o plantão no banco de dados
    const resultado = await Plantao.create({
        nome: req.body.nome,
        data: req.body.data,
        especialidade:req.body.especialidade,
        horario_inicio: req.body.horario_inicio,
        horario_fim:req.body.horario_fim
    });
    if(resultado){
        res.redirect('/')
    }
    else{
        res.json({erro:"Não foi possível cadastrar os dados"})      
    }
})

//4ª ROTA - DELETAR DADOS DO PLANTÃO
// :id significa que iremos passar um valor na rota, ou seja,iremos informar um valor que poderá ser diferente e que será armazenado pela variável :id
router.get('/destroy/:id',async(req,res)=>{
    const resultado = await Plantao.destroy({
        where:{
            id:req.params.id//estamos recebendo o id via parâmetro que está sendo passado na rota,no caso, é o :id que estamos recebendo
        }
    })
})


// 5ª ROTA - exibir fórmulario de cadastro
router.get("/create",(req,res)=>{
    res.render('plantao/addPlantao'),
    {medicos, especialidade}
})

module.exports = router

