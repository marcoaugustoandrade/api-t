const conexao = require('../config/conexao')
const { validationResult } = require('express-validator');

exports.listar = (req, res) => {
  
  const query = 'select * from categorias'

  conexao.query(query, (err, rows) => {
    if (err){
      console.log(err)
      res.status(500)
      res.json({"message": "Internal Server Error"})
    } else if (rows.length > 0){
      res.status(200)
      res.json(rows)
    } else {
      res.status(404)
      res.json({"message": "Nenhuma categoria cadastrada"})
    }
  })
}

exports.listarPorId = (req, res) => {
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  } else {

    const id = req.params.id
    const query = 'select * from categorias where id = ?'

    conexao.query(query, [id], (err, rows) => {
      if (err){
        console.log(err)
        res.status(500)
        res.json({"message": "Internal Server Error"})
      } else if (rows.length > 0){
        res.status(200)
        res.json(rows[0])
      } else {
        res.status(404)
        res.json({"message": "Nenhuma categoria cadastrada com esse id"})
      }
    })
  }
}

exports.inserir = (req, res) => {
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  } else {
    
    const categoria = {}
    categoria.descricao = req.body.descricao

    const query = 'insert into categorias (descricao) values (?)'

    conexao.query(query, [categoria.descricao], (err, result) => {
      if (err){
        console.log(err)
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
    
    const categoria = {}
    categoria.id = req.params.id
    categoria.descricao = req.body.descricao

    const query = 'update categorias set descricao = ? where id = ?'

    conexao.query(query, [categoria.descricao, categoria.id], (err, result) => {
      if (err){
        console.log(err)
        res.status(500)
        res.json({"message": "Internal Server Error"})
      } else if (result.affectedRows > 0){
        res.status(202)
        res.json({"message": "Categoria alterada"})
      } else {
        res.status(404)
        res.json({"message": "Categoria não encontrada"})
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

    const query = 'delete from categorias where id = ?'

    conexao.query(query, [id], (err, result) => {
      if (err){
        console.log(err)
        res.status(500)
        res.json({"message": "Internal Server Error"})
      } else if (result.affectedRows > 0){
        res.status(200)
        res.json({"message": "Categoria deletada"})
      } else {
        res.status(404)
        res.json({"message": "Categoria não encontrada"})
      }
    })
  }
}
