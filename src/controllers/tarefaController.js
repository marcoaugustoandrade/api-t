const conexao = require('../config/conexao')
const { check, validationResult } = require('express-validator');

exports.listar = (req, res) => {
  
  let descricao = req.query.f || ""
  descricao = "%" + descricao + "%"

  const query = 'select * from tarefas where descricao like ?'

  conexao.query(query, [descricao], (err, rows) => {
    if (err){
      res.status(500)
      res.json({"message": "Internal Server Error"})
    } else if (rows.length > 0){
      res.status(200)
      res.json(rows)
    } else {
      res.status(404)
      res.json({"message": "Nenhuma tarefa cadastrada"})
    }
  })
}

exports.listarPorId = (req, res) => {
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  } else {
    
    const id = req.params.id

    const query = 'select * from tarefas where id = ?'

    conexao.query(query, [id], (err, rows) => {
      if (err){
        res.status(500)
        res.json({"message": "Internal Server Error"})
      } else if (rows.length > 0){
        res.status(200)
        res.json(rows[0])
      } else {
        res.status(404)
        res.json({"message": "Nenhuma tarefa cadastrada com esse id"})
      }
    })
  }
}

exports.inserir = (req, res) => {
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  } else {
    
    const tarefa = {}
    tarefa.descricao = req.body.descricao
    tarefa.datahorario = req.body.datahorario
    tarefa.realizado = req.body.realizado
    tarefa.categoria_id = req.body.categoria_id
    
    const query = 'insert into tarefas (descricao, datahorario, realizado, categoria_id) values (?, ?, ?, ?)'
    
    conexao.query(query, [tarefa.descricao, tarefa.datahorario, tarefa.realizado, tarefa.categoria_id], (err, result) => {
      if (err){
        res.status(500)
        res.json({"message": "Internal Server Error"})
      } else {
        res.status(201)
        res.json({"message": result.insertId})
      }
    })
  }
}

exports.alterar = (req, res) => {
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  } else {

    const tarefa = {}
    tarefa.id = req.params.id
    tarefa.descricao = req.body.descricao
    tarefa.datahorario = req.body.datahorario
    tarefa.realizado = req.body.realizado
    tarefa.categoria_id = req.body.categoria_id

    const query = 'update tarefas set descricao = ?, datahorario = ?, realizado = ?, categoria_id = ? where id = ?'

    conexao.query(query, [tarefa.descricao, tarefa.datahorario, tarefa.realizado, tarefa.realizado, tarefa.id], (err, result) => {
      if (err){
        res.status(500)
        res.json({"message": "Internal Server Error"})
      } else if (result.affectedRows > 0){
        res.status(202)
        res.json({"message": "Tarefa alterada"})
      } else {
        res.status(404)
        res.json({"message": "Tarefa não encontrada"})
      }
    })
  }
}

exports.deletar = (req, res) => {
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  } else {
    
    const id = req.params.id

    const query = 'delete from tarefas where id = ?'

    conexao.query(query, [id], (err, result) => {
      if (err){
        res.status(500)
        res.json({"message": "Internal Server Error"})
      } else if (result.affectedRows > 0){
        res.status(200)
        res.json({"message": "Tarefa deleta"})
      } else {
        res.status(404)
        res.json({"message": "Tarefa não encontrada"})
      }
    })
  }
}

  // const a = 10
  // const b = 20
  
  // module.exports.a = a
  // module.exports.b = b
  
  // exports.listar = (req, res) => {
  //   if (req.query.f)
  //   res.json({"message": "Listar por descrição"})
  //   else res.json({"message": "Listar todos"})
  // }
  
  
  // exports.listarPorId = (req, res) => {
  //   res.json({"message": "Listar por id"})
  // }
  
  // exports.inserir = (req, res) => {
  //   res.json({"message": "Inserir"})
  // }
  
  // exports.alterar = (req, res) => {
  //   res.json({"message": "Alterar"})
  // }
  
  // exports.deletar = (req, res) => {
  //   res.json({"message": "Deletar"})
  // }
