// app.js
const express = require('express');
const plantaoRouter = require('./router/plantao');
const handlebars = require('express-handlebars')

const app = express();
const porta = 5000;

// Configuração do Handlebars
app.engine('handlebars',handlebars.engine({extended:true}));
app.set('view engine', 'handlebars');

// Configuração do body-parser para formulários
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Diretório para arquivos estáticos
app.use(express.static('public'));

// Rotas de plantão
app.use('/plantao', plantaoRouter);

//Exibindo informação na tela 
app.get('/',(req,res)=>{
    res.render("home")
})

//Executando o servidor
app.listen(porta,()=>{
    console.log("Servidor executando na porta",porta)
})

//carregando rotas 
const medicoRouter = require('./router/plantao')