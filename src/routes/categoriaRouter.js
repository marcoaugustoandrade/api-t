const express = require('express')
const router = express.Router()
const categoriaController = require('../controllers/categoriaController')
const categoriaValidation = require('../util/categoriaValidation')

router.get('/', categoriaController.listar)
router.get('/:id', categoriaValidation.listarPorId, categoriaController.listarPorId)
router.post('/', categoriaValidation.inserir, categoriaController.inserir)
router.put('/:id', categoriaValidation.alterar, categoriaController.alterar)
router.delete('/:id', categoriaValidation.deletar, categoriaController.deletar)

module.exports = router
