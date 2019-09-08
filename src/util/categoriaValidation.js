const { check } = require('express-validator')

exports.listarPorId = [
  check('id')
    .exists().withMessage('O id não pode estar em branco')
    .isInt().withMessage('O id deve ser numérico')
]

exports.inserir = [
  check('descricao')
    .exists().trim().withMessage('A descrição da categoria não pode estar em  branco')
]

exports.alterar = [
  check('id')
    .exists().withMessage('O id não pode estar em branco')
    .isInt().withMessage('O id deve ser numérico'),
  check('descricao')
    .exists().trim().withMessage('A descrição da categoria não pode estar em  branco')    
]

exports.deletar = [
  check('id')
    .exists().withMessage('O id não pode estar em branco')
    .isInt().withMessage('O id deve ser numérico')
]
