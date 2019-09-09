const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
// const fs = require('fs')
// const path = require('path')

// Configurando
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));
// app.use(morgan('combined'));
// app.use(morgan('tiny'));
// const logFile = fs.createWriteStream(path.join(__dirname, '../access.log'), { flags: 'a' })
// app.use(morgan('dev', { stream: logFile }))
app.use(morgan('dev'))
app.use(cors());


// Rotas
app.get('/api', (req, res) => {
  res.json({
    message: "API Tarefas"
  })
})
// Importando o modulo que contém as rotas tarefa
const tarefaRouter = require('./routes/tarefaRouter')
// A rota /api/tarefas utiliza o módulo importado
app.use('/api/tarefas', tarefaRouter)
const categoriaRouter = require('./routes/categoriaRouter')
app.use('/api/categorias', categoriaRouter)

// Documentação
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./docs/swagger.yml');
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Subindo o servidor
app.listen(port, () => { console.log(`Servidor rodando na porta ${port}`) })
